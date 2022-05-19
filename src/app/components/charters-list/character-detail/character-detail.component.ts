import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
    character$: Observable<any> = this.store.select((state: any) => state.store.charactersState.characterSelected);

    constructor(private store: Store<{ character: any }>) {}

    ngOnInit(): void {}
}
