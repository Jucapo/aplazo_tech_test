import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../../store/store.actions';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@Component({
    selector: 'app-charters-list',
    templateUrl: './charters-list.component.html',
    styleUrls: ['./charters-list.component.scss'],
})
export class ChartersListComponent implements OnInit {
    characters$: Observable<any> = this.store.select((state: any) => state.store.charactersState.characters);
    maxPage$: Observable<number> = this.store.select((state: any) => state.store.charactersState.info?.pages);
    page = 1;

    constructor(private store: Store<{ characters: any[] }>, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.store.dispatch(AppActions.getCharacters({ page: this.page }));
    }

    previousPage() {
        this.page--;
        this.store.dispatch(AppActions.getCharacters({ page: this.page }));
    }

    nextPage() {
        this.page++;
        this.store.dispatch(AppActions.getCharacters({ page: this.page }));
    }

    getCharacter(id: number) {
        this.store.dispatch(AppActions.getCharacter({ id }));
        this.dialog.open(CharacterDetailComponent);
    }
}
