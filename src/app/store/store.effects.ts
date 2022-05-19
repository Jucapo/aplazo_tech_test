import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RickandmortyService } from '../services/rickandmorty.service';
import * as AppActions from './store.actions';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private rickandmortyService: RickandmortyService) {}

    // Get Characters
    getCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getCharacters),
            mergeMap((action) =>
                this.rickandmortyService.getCharacters(action.page).pipe(
                    map((result) => AppActions.getCharactersSuccess({ result })),
                    catchError((error) => of(AppActions.getCharactersFailure({ error })))
                )
            )
        )
    );

    // Get Character Details
    getCharacter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getCharacter),
            mergeMap((action) =>
                this.rickandmortyService.getCharacter(action.id).pipe(
                    map((result) => AppActions.getCharacterSuccess({ result })),
                    catchError((error) => of(AppActions.getCharacterFailure({ error })))
                )
            )
        )
    );

    // Get Multiple Characters
    getMultipleCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getMultipleCharacters),
            mergeMap((action) =>
                this.rickandmortyService.getMultipleCharacters(action.ids).pipe(
                    map((result) => AppActions.getMultipleCharactersSuccess({ result })),
                    catchError((error) => of(AppActions.getMultipleCharactersFailure({ error })))
                )
            )
        )
    );

    // Get Filter Characters
    getFilterCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getFilterCharacters),
            mergeMap((action) =>
                this.rickandmortyService.getFilterCharacters(action.filter).pipe(
                    map((result) => AppActions.getFilterCharactersSuccess({ result })),
                    catchError((error) => of(AppActions.getFilterCharactersFailure({ error })))
                )
            )
        )
    );

    // Get Locations
    getLocations$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getLocations),
            mergeMap((action) =>
                this.rickandmortyService.getLocations(action.page).pipe(
                    map((result) => AppActions.getLocationsSuccess({ result })),
                    catchError((error) => of(AppActions.getLocationsFailure({ error })))
                )
            )
        )
    );

    // Get Filter Locations
    getFilterLocations$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getFilterLocations),
            mergeMap((action) =>
                this.rickandmortyService.filterLocations(action.filter).pipe(
                    map((result) => AppActions.getFilterLocationsSuccess({ result })),
                    catchError((error) => of(AppActions.getFilterLocationsFailure({ error })))
                )
            )
        )
    );

    // Get Episodes
    getEpisodes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getEpisodes),
            mergeMap((action) =>
                this.rickandmortyService.getEpisodes(action.page).pipe(
                    map((result) => AppActions.getEpisodesSuccess({ result })),
                    catchError((error) => of(AppActions.getEpisodesFailure({ error })))
                )
            )
        )
    );

    // Get Filter Episodes
    getFilterEpisodes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getFilterEpisodes),
            mergeMap((action) =>
                this.rickandmortyService.filterEpisodes(action.filter).pipe(
                    map((result) => AppActions.getFilterEpisodesSuccess({ result })),
                    catchError((error) => of(AppActions.getFilterEpisodesFailure({ error })))
                )
            )
        )
    );
}
