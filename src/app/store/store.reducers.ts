import { createReducer, on } from '@ngrx/store';
import * as AppActions from './store.actions';

export interface CharactersState {
    info: any;
    characters: any[];
    characterSelected: any;
    loading: boolean;
    error: string;
    pageSelected: number;
}

export interface LocationsState {
    info: any;
    locations: any[];
    loading: boolean;
    characters: any[];
    error: string;
    pageSelected: number;
}
export interface EpisodesState {
    info: any;
    episodes: any[];
    characters: any[];
    loading: boolean;
    error: string;
    pageSelected: number;
}

export interface State {
    charactersState: CharactersState;
    locationsState: LocationsState;
    episodesState: EpisodesState;
}

export const initialState = {
    charactersState: {
        info: null,
        characters: [],
        characterSelected: null,
        loading: false,
        error: null,
        pageSelected: 1,
    },
    locationsState: {
        info: null,
        locations: [],
        characters: [],
        loading: false,
        error: null,
        pageSelected: 1,
    },
    episodesState: {
        info: null,
        episodes: [],
        characters: [],
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
    })),

    on(AppActions.getCharacter, (state, action) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            loading: true,
            error: null,
        },
    })),

    on(AppActions.getCharacterSuccess, (state, { result }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            characterSelected: result,
            loading: false,
        },
    })),

    on(AppActions.getCharacterFailure, (state, { error }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getMultipleCharacters, (state, action) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            loading: true,
            error: null,
        },
    })),

    on(AppActions.getMultipleCharactersSuccess, (state, { result }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            characters: result,
            loading: false,
        },
    })),

    on(AppActions.getMultipleCharactersFailure, (state, { error }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getFilterCharacters, (state, action) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            loading: true,
            error: null,
        },
    })),

    on(AppActions.getFilterCharactersSuccess, (state, { result }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            info: result.info,
            characters: result.results,
            loading: false,
        },
    })),

    on(AppActions.getFilterCharactersFailure, (state, { error }) => ({
        ...state,
        charactersState: {
            ...state.charactersState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getLocations, (state, action) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            loading: true,
            error: null,
            pageSelected: action.page,
        },
    })),

    on(AppActions.getLocationsSuccess, (state, { result }) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            info: result.info,
            locations: result.results,
            loading: false,
        },
    })),

    on(AppActions.getLocationsFailure, (state, { error }) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getFilterLocations, (state, action) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            loading: true,
            error: null,
        },
    })),

    on(AppActions.getFilterLocationsSuccess, (state, { result }) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            info: result.info,
            locations: result.results,
            loading: false,
        },
    })),

    on(AppActions.getFilterLocationsFailure, (state, { error }) => ({
        ...state,
        locationsState: {
            ...state.locationsState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getEpisodes, (state, action) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            loading: true,
            error: null,
            pageSelected: action.page,
        },
    })),

    on(AppActions.getEpisodesSuccess, (state, { result }) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            info: result.info,
            episodes: result.results,
            loading: false,
        },
    })),

    on(AppActions.getEpisodesFailure, (state, { error }) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            error,
            loading: false,
        },
    })),

    on(AppActions.getFilterEpisodes, (state, action) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            loading: true,
            error: null,
        },
    })),

    on(AppActions.getFilterEpisodesSuccess, (state, { result }) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            info: result.info,
            episodes: result.results,
            loading: false,
        },
    })),

    on(AppActions.getFilterEpisodesFailure, (state, { error }) => ({
        ...state,
        episodesState: {
            ...state.episodesState,
            error,
            loading: false,
        },
    }))
);

export function appReducer(state: any, action: any) {
    return _appReducer(state, action);
}
