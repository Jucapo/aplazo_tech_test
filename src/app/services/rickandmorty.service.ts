import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RickandmortyService {
    constructor(private http: HttpClient) {}

    // Get Characters
    getCharacters() {
        return this.http.get('https://rickandmortyapi.com/api/character/').pipe(map((characters: any) => characters.results));
    }
}
