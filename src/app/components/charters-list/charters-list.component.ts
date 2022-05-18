import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/store.reducers';
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

        this.characters$.subscribe((characters: any[]) => {
            console.log(characters);
        });

        // select the characters from the store
    }
    previousPage() {}

    nextPage() {}
}
