import { Injectable } from '@angular/core';
import { ChatUserModel } from '../models/chat-user.model';
import { fakeData } from '../fake-data';
import { IAgentChatState, initialAgentChatState } from '../store/states/agent-chat.state';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private fakeDB = fakeData;

  constructor() {
    fakeData.map(item => {
      if (item.isTeam) {
        item.messages.forEach(m => m.teamID = item.teamID);
        return item;
      } else {
        return item;
      }
    });
  }

  public getLocalChats(): Promise<IAgentChatState> {
    return new Promise((resolve) => {
      const data: IAgentChatState = {
        teams: {},
        users: {},
        messages: [],
        selectedTeam: null,
        selectedUser: null
      };

      for (const item of this.fakeDB) {
        if (item.isTeam) {
          item.messages.forEach(msg => {
            data.messages.push(msg);
          });
          item.messages = null;
          data.teams[item.teamID] = item;
        } else {
          data.users[item.userID] = item;
        }
      }

      resolve(data);
    });
  }

  public sendLocalChat(toUserID: number, teamID: number, message: string): any {
    console.log('Pretend message is sent.');
  }
}
