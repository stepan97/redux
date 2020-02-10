import { EAgentChatActions, AgentChatActions } from '../actions/agent-chat.action';
import { initialAgentChatState, IAgentChatState } from '../states/agent-chat.state';

export function agentChatReducer(state = initialAgentChatState, action: AgentChatActions): IAgentChatState {
  switch (action.type) {
    case EAgentChatActions.SelectTeam:
      return {
        ...state,
        selectedTeam: action.payload
      };

    case EAgentChatActions.SelectUser:
      return {
        ...state,
        selectedUser: action.payload
      };

    case EAgentChatActions.GetLocalChatsSuccess:
      return {
        teams: action.payload.teams,
        users: action.payload.users,
        messages: action.payload.messages,
        selectedTeam: null,
        selectedUser: null
      };

    case EAgentChatActions.SendLocalChatSuccess:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
}
