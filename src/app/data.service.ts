import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {
    constructor(
        private http: HttpClient,
    ) { }

    getTourGuiders(obj: any) {
        return this.http.get(`${environment.api}/tourguiders`, { params: { ...obj } })
    }
}