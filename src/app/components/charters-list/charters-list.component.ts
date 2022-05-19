import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../../store/store.actions';

@Component({
    selector: 'app-charters-list',
    templateUrl: './charters-list.component.html',
    styleUrls: ['./charters-list.component.scss'],
})
export class ChartersListComponent implements OnInit {
    characters$: Observable<any> = this.store.select((state: any) => state.store.charactersState.characters);
    page = 1;

    constructor(private store: Store<{ characters: any[] }>) {}

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
}
