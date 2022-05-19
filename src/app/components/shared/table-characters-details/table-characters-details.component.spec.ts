import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { TableCharactersDetailsComponent } from './table-characters-details.component';

describe('TableCharactersDetailsComponent', () => {
    let component: TableCharactersDetailsComponent;
    let fixture: ComponentFixture<TableCharactersDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableCharactersDetailsComponent],
            imports: [StoreModule.forRoot({})],
            providers: [provideMockStore({})],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCharactersDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
