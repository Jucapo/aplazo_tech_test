import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/store.actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    optionActive = 1;
    filter: string = '';

    constructor(private store: Store<{ characters: any[] }>) {}

    ngOnInit(): void {}

    filterCharacters() {
        if (this.optionActive === 1) {
            this.filter
                ? this.store.dispatch(AppActions.getFilterCharacters({ filter: this.filter }))
                : this.store.dispatch(AppActions.getCharacters({ page: 1 }));
        } else if (this.optionActive === 2) {
            this.filter
                ? this.store.dispatch(AppActions.getFilterLocations({ filter: this.filter }))
                : this.store.dispatch(AppActions.getLocations({ page: 1 }));
        } else if (this.optionActive === 3) {
            this.filter
                ? this.store.dispatch(AppActions.getFilterEpisodes({ filter: this.filter }))
                : this.store.dispatch(AppActions.getEpisodes({ page: 1 }));
        }
    }
}
