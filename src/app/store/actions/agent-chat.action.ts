import { Action } from '@ngrx/store';
import { ChatUserModel } from 'src/app/models/chat-user.model';
import { IAgentChatState } from '../states/agent-chat.state';
import { MessageModel } from 'src/app/models/message.model';

export enum EAgentChatActions {
  SelectTeam = '[AgentChat] Select Team',
  SelectUser = '[AgentChat] Select User',
  GetLocalChats = '[AgentChat] Get Local Chat',
  GetLocalChatsSuccess = '[AgentChat] Get Local Chat Success',
  SendLocalChat = '[AgentChat] Send Local Chat',
  SendLocalChatSuccess = '[AgentChat] Send Local Chat Success'
}

export class SelectTeam implements Action {
  public readonly type = EAgentChatActions.SelectTeam;
  constructor(public payload: ChatUserModel) {}
}

export class SelectUser implements Action {
  public readonly type = EAgentChatActions.SelectUser;
  constructor(public payload: ChatUserModel) {}
}

export class GetLocalChats implements Action {
  public readonly type = EAgentChatActions.GetLocalChats;
}

export class GetLocalChatSuccess implements Action {
  public readonly type = EAgentChatActions.GetLocalChatsSuccess;
  constructor(public payload: IAgentChatState) {}
}

export class SendLocalChat implements Action {
  public readonly type = EAgentChatActions.SendLocalChat;
  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class SendLocalChatSuccess implements Action {
  public readonly type = EAgentChatActions.SendLocalChatSuccess;

  constructor(public payload: MessageModel) {}
}

export type AgentChatActions = GetLocalChats | GetLocalChatSuccess | SendLocalChat | SendLocalChatSuccess | SelectTeam | SelectUser;
