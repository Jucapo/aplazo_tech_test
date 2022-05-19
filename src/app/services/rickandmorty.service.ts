import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RickandmortyService {
    constructor(private http: HttpClient) {}

    base_url = environment.base_url;

    // Get Characters
    getCharacters(page?: number) {
        return this.http.get(`${this.base_url}/character/?page=${page}`).pipe(map((characters: any) => characters));
    }

    // Get Character Details
    getCharacter(id: number) {
        return this.http.get(`${this.base_url}/character/${id}`).pipe(map((character: any) => character));
    }

    // Get Multiple Characters
    getMultipleCharacters(ids: string) {
        return this.http.get(`${this.base_url}/character/${ids}`).pipe(map((characters: any) => characters));
    }

    // get filter characters
    getFilterCharacters(filter: string) {
        return this.http.get(`${this.base_url}/character/?name=${filter}`).pipe(map((characters: any) => characters));
    }

    // Get Locations
    getLocations(page?: number) {
        return this.http.get(`${this.base_url}/location/?page=${page}`).pipe(map((locations: any) => locations));
    }

    // filter locations
    filterLocations(filter: string) {
        return this.http.get(`${this.base_url}/location/?name=${filter}`).pipe(map((locations: any) => locations));
    }

    // Get Episodes
    getEpisodes(page?: number) {
        return this.http.get(`${this.base_url}/episode/?page=${page}`).pipe(map((episodes: any) => episodes));
    }

    // filter episodes
    filterEpisodes(filter: string) {
        return this.http.get(`${this.base_url}/episode/?name=${filter}`).pipe(map((episodes: any) => episodes));
    }
}
