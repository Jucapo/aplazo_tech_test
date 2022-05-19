import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RickandmortyService } from './rickandmorty.service';

describe('RickandmortyService', () => {
    let service: RickandmortyService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RickandmortyService],
        }).compileComponents();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RickandmortyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
