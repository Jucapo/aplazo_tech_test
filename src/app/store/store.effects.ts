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
            mergeMap(() =>
                this.rickandmortyService.getCharacters().pipe(
                    map((characters) => AppActions.getCharactersSuccess({ characters })),
                    catchError((error) => of(AppActions.getCharactersFailure({ error })))
                )
            )
        )
    );
}
