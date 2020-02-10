import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/reducers';
import {
  selectAgentChatTeams,
  selectSelectedTeam,
  selectAgentChatUsers,
  selectSelectedUser,
  selectAgentChatMessagesForUserInTeam
} from './store/selectors/agent-chat.selector';
import { Observable, Subject } from 'rxjs';
import { ChatUserModel } from './models/chat-user.model';
import { MessageModel } from './models/message.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { ChatService } from './services/chat.service';
import { EAgentChatActions, SelectTeam, SelectUser, GetLocalChatSuccess, GetLocalChats } from './store/actions/agent-chat.action';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public teams$: Observable<ChatUserModel[]> = this.store.pipe(select(selectAgentChatTeams));
  public selectedTeam$: Observable<ChatUserModel> = this.store.pipe(select(selectSelectedTeam));
  public selectedTeam: ChatUserModel;

  public users$: Observable<ChatUserModel[]> = this.store.pipe(select(selectAgentChatUsers));
  public selectedUser$: Observable<ChatUserModel> = this.store.pipe(select(selectSelectedUser));
  public selectedUser: ChatUserModel;

  public messages$: Observable<MessageModel[]> = this.store.pipe(select(selectAgentChatMessagesForUserInTeam));

  public form: FormGroup;

  public currentUserID = 1;

  private subscriptionsSubject$ = new Subject<void>();

  constructor(
    private readonly store: Store<AppState>,
    // private readonly actions: Actions,
    private readonly formBuilder: FormBuilder,
    private readonly chatService: ChatService
  ) {
    this.initForm();
    this.store.dispatch(new GetLocalChats());

    // this.store.subscribe(v => {
    //   console.log('STORE VALUE CHAGE:', v);
    // });

    this.subscribeToStoreChanges();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  private subscribeToStoreChanges(): void {
    this.selectedTeam$.pipe(takeUntil(this.subscriptionsSubject$)).subscribe(value => {
      this.selectedTeam = value;
    });

    this.selectedUser$.pipe(takeUntil(this.subscriptionsSubject$)).subscribe(value => {
      this.selectedUser = value;
    });
  }

  public sendChat(): void {
    if (this.form.valid) {
      this.chatService.sendLocalChat(
        this.selectedUser.userID,
        this.selectedTeam.teamID,
        this.form.value.message
      );
    }
  }

  public selectTeam(team: ChatUserModel): void {
    console.log('select team:', team);
    this.store.dispatch(new SelectTeam(team));
  }

  public openChatWithUser(user: ChatUserModel): void {
    console.log('select user:', user);
    this.store.dispatch(new SelectUser(user));
  }

  ngOnDestroy() {
    this.subscriptionsSubject$.next();
    this.subscriptionsSubject$.complete();
  }
}
