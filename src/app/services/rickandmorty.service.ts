import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RickandmortyService {
    constructor(private http: HttpClient) {}

    // Get Characters
    getCharacters(page?: number) {
        return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`).pipe(map((characters: any) => characters));
    }

    // Get Locations
    getLocations(page?: number) {
        return this.http.get(`https://rickandmortyapi.com/api/location/?page=${page}`).pipe(map((locations: any) => locations));
    }

    // Get Episodes
    getEpisodes(page?: number) {
        return this.http.get(`https://rickandmortyapi.com/api/episode/?page=${page}`).pipe(map((episodes: any) => episodes));
    }
}
