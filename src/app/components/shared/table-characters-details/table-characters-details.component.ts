import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../../../store/store.actions';

@Component({
    selector: 'app-table-characters-details',
    templateUrl: './table-characters-details.component.html',
    styleUrls: ['./table-characters-details.component.scss'],
})
export class TableCharactersDetailsComponent implements OnInit {
    characters$: Observable<any> = this.store.select((state: any) => state.store.charactersState.characters);

    constructor(private store: Store<{ characters: any[] }>) {}

    ngOnInit(): void {}
}
