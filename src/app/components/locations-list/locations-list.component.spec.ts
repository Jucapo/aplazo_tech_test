import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { LocationsListComponent } from './locations-list.component';

describe('LocationsListComponent', () => {
    let component: LocationsListComponent;
    let fixture: ComponentFixture<LocationsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocationsListComponent],
            imports: [StoreModule.forRoot({}), MatDialogModule],
            providers: [provideMockStore({})],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
