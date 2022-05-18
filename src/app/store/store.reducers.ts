import { createReducer, on } from '@ngrx/store';
import * as AppActions from './store.actions';

export interface State {
  characters: any;
}

export const initialState = {
  characters: []
};
 
export const _appReducer = createReducer(
  initialState,
  on(AppActions.getCharacters, (state) => ({ ...state, characters: [] })),
  on(AppActions.getCharactersSuccess, (state, { characters }) => ({ ...state, characters })),
  on(AppActions.getCharactersFailure, (state, { error }) => ({ ...state, error }))
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
