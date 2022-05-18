import { createAction, props } from '@ngrx/store';

export const getCharacters = createAction('[Characters] Get Characters');
export const getCharactersSuccess = createAction('[Characters] Get Characters Success', props<{ characters: any }>());
export const getCharactersFailure = createAction('[Characters] Get Characters Failure', props<{ error: any }>());

export const selectCharacter = createAction('[Characters] Get Character', props<{ id: number }>());
