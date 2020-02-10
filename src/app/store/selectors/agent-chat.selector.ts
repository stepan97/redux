import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { IAgentChatState } from '../states/agent-chat.state';
import { ChatUserModel } from 'src/app/models/chat-user.model';
import { MessageModel } from 'src/app/models/message.model';

const selectAgentChatFromAppState = (state: AppState) => state.agentChat;

export const selectAgentChatTeams = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState): Array<ChatUserModel> => Object.values(state.teams)
);

export const selectAgentChatUsers = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState): Array<ChatUserModel> => Object.values(state.users)
);

// export const selectAgentChatMessages = createSelector(
//   selectAgentChatFromAppState,
//   (state: IAgentChatState): Array<MessageModel> => Object.values(state.messages)
// );

export const selectSelectedTeam = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState): ChatUserModel => state.selectedTeam ? state.teams[state.selectedTeam.teamID] : null
);

export const selectAgentChatUsersForTeam = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState) => state.users[state.selectedTeam.teamID]
);

export const selectSelectedUser = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState): ChatUserModel => state.selectedUser ? state.users[state.selectedUser.userID] : null
);

export const selectAgentChatMessagesForUserInTeam = createSelector(
  selectAgentChatFromAppState,
  (state: IAgentChatState) => state.messages
    .filter(message => message.teamID === state.selectedTeam.teamID && (
      message.fromUserID === state.selectedUser.userID || message.toUserID === state.selectedUser.userID)
    )
);
