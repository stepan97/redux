import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IAgentChatState } from '../states/agent-chat.state';
import { agentChatReducer } from './agent-chat.reducer';

export interface AppState {
  agentChat: IAgentChatState;
}

export const reducers: ActionReducerMap<AppState> = {
  agentChat: agentChatReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
