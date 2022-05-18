import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/store.actions';

@Component({
  selector: 'app-charters-list',
  templateUrl: './charters-list.component.html',
  styleUrls: ['./charters-list.component.scss']
})
export class ChartersListComponent implements OnInit {

  constructor( private store: Store) { }

  ngOnInit(): void {
    // dispatch Get Characters action
    this.store.dispatch(AppActions.getCharacters());
  }

}
