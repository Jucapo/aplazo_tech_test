import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { ChartersListComponent } from './components/charters-list/charters-list.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Material Angular
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Store
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/store.effects';
import { CharacterDetailComponent } from './components/charters-list/character-detail/character-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        LocationsListComponent,
        ChartersListComponent,
        EpisodesListComponent,
        DashboardComponent,
        CharacterDetailComponent,
    ],
    imports: [
        StoreModule.forRoot({ store: appReducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
