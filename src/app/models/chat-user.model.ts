import { MessageModel } from './message.model';

export interface ChatUserModel {
  isTeam: boolean;
  teamID: number;
  teamName: string;
  isConnected: boolean;
  userID: number;
  userName: string;
  firstName: string;
  lastName: string;
  avatarFileName: string;
  avatarVersion: number;
  messages: Array<MessageModel>;
}
