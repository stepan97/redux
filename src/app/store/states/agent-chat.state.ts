import { ChatUserModel } from 'src/app/models/chat-user.model';
import { MessageModel } from 'src/app/models/message.model';

export interface IAgentChatState {
  teams: { [id: number]: ChatUserModel };
  selectedTeam: ChatUserModel;
  users: { [id: number]: ChatUserModel };
  selectedUser: ChatUserModel;
  messages: MessageModel[];
}

export const initialAgentChatState: IAgentChatState = {
  teams: {},
  users: {},
  messages: [],
  selectedTeam: null,
  selectedUser: null
};
