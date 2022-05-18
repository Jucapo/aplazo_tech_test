import { createReducer, on } from '@ngrx/store';
import * as AppActions from './store.actions';

export interface CharactersState {
    info: any;
    characters: any[];
    loading: boolean;
    error: string;
    pageSelected: number;
}

export interface State {
    charactersState: CharactersState;
}

export const initialState = {
    charactersState: {
        results: null,
        loading: false,
        error: null,
        pageSelected: 1,
    },
};

export const _appReducer = createReducer(
    initialState,

    on(AppActions.getCharacters, (state, action) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            loading: true,
            error: null,
            pageSelected: action.page,
        },
    })),

    on(AppActions.getCharactersSuccess, (state, { result }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            info: result.info,
            characters: result.results,
            loading: false,
        },
    })),

    on(AppActions.getCharactersFailure, (state, { error }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            error,
            loading: false,
        },
    }))
);

export function appReducer(state: any, action: any) {
    return _appReducer(state, action);
}
