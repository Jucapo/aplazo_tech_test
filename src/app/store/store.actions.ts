import { createAction, props } from '@ngrx/store';

// get characters
export const getCharacters = createAction('[Characters] Get Characters', props<{ page: number }>());
export const getCharactersSuccess = createAction('[Characters] Get Characters Success', props<{ result: any }>());
export const getCharactersFailure = createAction('[Characters] Get Characters Failure', props<{ error: any }>());

// get details character
export const getCharacter = createAction('[Characters] Get Character', props<{ id: number }>());
export const getCharacterSuccess = createAction('[Characters] Get Character Success', props<{ result: any }>());
export const getCharacterFailure = createAction('[Characters] Get Character Failure', props<{ error: any }>());

// get multiple characters
export const getMultipleCharacters = createAction('[Characters] Get Multiple Characters', props<{ ids: string }>());
export const getMultipleCharactersSuccess = createAction('[Characters] Get Multiple Characters Success', props<{ result: any }>());
export const getMultipleCharactersFailure = createAction('[Characters] Get Multiple Characters Failure', props<{ error: any }>());

// get locations
export const getLocations = createAction('[Locations] Get Locations', props<{ page: number }>());
export const getLocationsSuccess = createAction('[Locations] Get Locations Success', props<{ result: any }>());
export const getLocationsFailure = createAction('[Locations] Get Locations Failure', props<{ error: any }>());

// get episodes
export const getEpisodes = createAction('[Episodes] Get Episodes', props<{ page: number }>());
export const getEpisodesSuccess = createAction('[Episodes] Get Episodes Success', props<{ result: any }>());
export const getEpisodesFailure = createAction('[Episodes] Get Episodes Failure', props<{ error: any }>());
