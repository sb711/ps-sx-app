import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Filter } from "../models/filter.model";

@Injectable({
    providedIn: 'root'
})
export class LaunchProgramService {

    private launchProgramFilterSubject = new Subject<any>();
    private filter: Filter = new Filter();
    constructor(
        private httpClient: HttpClient
    ) { }

    filterSelect(filterObj: any): void {
        if (this.filter.getFilter(filterObj.filterName) === filterObj.filterValue) {
            this.filter.setFilter(filterObj.filterName, null);
        } else {
            this.filter.setFilter(filterObj.filterName, filterObj.filterValue);
        }
        this.launchProgramFilterSubject.next();
    }

    getCurrentFilter(): any {
        return this.filter;
    }

    getFilterObservable(): Observable<any> {
        return this.launchProgramFilterSubject.asObservable();
    }

    getLaunchPrograms(queryObj?: any): Observable<any> {
        let query = '?';
        Object.keys(queryObj || {}).forEach(key => {
            if (queryObj[key] === null) return;
            query += '&' + key + '=' + queryObj[key]
        });
        return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100' + query);
    }
}
