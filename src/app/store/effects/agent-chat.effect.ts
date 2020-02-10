import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { MessageModel } from 'src/app/models/message.model';
import { ChatService } from 'src/app/services/chat.service';
import { AppState } from '../reducers';
import { GetLocalChats, EAgentChatActions, GetLocalChatSuccess, SendLocalChat, SendLocalChatSuccess } from '../actions/agent-chat.action';
import { IAgentChatState } from '../states/agent-chat.state';

@Injectable()
export class AgentChatEffects {
  @Effect()
  getLocalChats$ = this.actions$.pipe(
    ofType<GetLocalChats>(EAgentChatActions.GetLocalChats),
    mergeMap(() => this.chatService.getLocalChats()),
    map((data: IAgentChatState) => data),
    catchError(() => EMPTY),
    switchMap(response => {
      return of(new GetLocalChatSuccess(response));
    })
  );

  @Effect()
  sendLocalChat$ = this.actions$.pipe(
    ofType<SendLocalChat>(EAgentChatActions.SendLocalChat),
    mergeMap((action: SendLocalChat) => {
      console.log('PAYLOAD:', action.payload);
      return this.chatService.sendLocalChat(action.payload.toUserID, action.payload.teamID, action.payload.message);
    }),
    switchMap((res: MessageModel) => {
      console.log('return new Action');
      return of(new SendLocalChatSuccess(res));
    }),
    catchError(() => EMPTY)
  );

  constructor(
    private chatService: ChatService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {
  }
}
