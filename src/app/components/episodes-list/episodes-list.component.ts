import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../../store/store.actions';
import { MatDialog } from '@angular/material/dialog';
import { TableCharactersDetailsComponent } from '../shared/table-characters-details/table-characters-details.component';
@Component({
    selector: 'app-episodes-list',
    templateUrl: './episodes-list.component.html',
    styleUrls: ['./episodes-list.component.scss'],
})
export class EpisodesListComponent implements OnInit {
    episodes$: Observable<any> = this.store.select((state: any) => state.store.episodesState?.episodes);
    maxPage$: Observable<number> = this.store.select((state: any) => state.store.episodesState.info?.pages);
    page = 1;

    constructor(private store: Store<{ episodes: any[] }>, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.store.dispatch(AppActions.getEpisodes({ page: this.page }));
    }

    previousPage() {
        this.page--;
        this.store.dispatch(AppActions.getEpisodes({ page: this.page }));
    }

    nextPage() {
        this.page++;
        this.store.dispatch(AppActions.getEpisodes({ page: this.page }));
    }

    showCharacters(residents: String[]) {
        let residentsIdList = '';
        residents.forEach((resident) => {
            const characterId = resident.split('/')[5];
            residentsIdList += characterId + ',';
        });
        this.store.dispatch(AppActions.getMultipleCharacters({ ids: residentsIdList }));
        this.dialog.open(TableCharactersDetailsComponent);
    }
}
