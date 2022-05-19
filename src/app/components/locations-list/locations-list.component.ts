import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../../store/store.actions';

@Component({
    selector: 'app-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.scss'],
})
export class LocationsListComponent implements OnInit {
    locations$: Observable<any> = this.store.select((state: any) => state.store.locationsState.locations);
    maxPage$: Observable<number> = this.store.select((state: any) => state.store.locationsState.info?.pages);
    page = 1;

    constructor(private store: Store<{ locations: any[] }>) {}

    ngOnInit(): void {
        this.store.dispatch(AppActions.getLocations({ page: this.page }));
    }

    previousPage() {
        this.page--;
        this.store.dispatch(AppActions.getLocations({ page: this.page }));
    }

    nextPage() {
        this.page++;
        this.store.dispatch(AppActions.getLocations({ page: this.page }));
    }
}
