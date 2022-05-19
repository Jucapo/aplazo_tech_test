import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesListComponent } from './episodes-list.component';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';

describe('EpisodesListComponent', () => {
    let component: EpisodesListComponent;
    let fixture: ComponentFixture<EpisodesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EpisodesListComponent],
            imports: [StoreModule.forRoot({}), MatDialogModule],
            providers: [provideMockStore({})],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EpisodesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
