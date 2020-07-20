import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }

    public get(key: any, defaultResponse: any = null) {
        const value: string = localStorage.getItem(key.Name);

        if (key.IsObject) {
            return JSON.parse(value);
        } else {
            if (value == null || value.trim() == '') {
                return defaultResponse;
            }
            else {
                return value;
            }
        }
    }

    public set(key: any, value: any, isStringfied: boolean = false) {
        if (key.IsObject && !isStringfied) {
            if (value == null || value == '') {
                localStorage.setItem(key.Name, '');
            } else {
                localStorage.setItem(key.Name, JSON.stringify(value));
            }
        } else {
            if (value == null || value == '') {
                localStorage.setItem(key.Name, '');
            } else {
                localStorage.setItem(key.Name, value);
            }
        }
    }

    public remove(key: any) {
        localStorage.removeItem(key.Name);
    }

    public removeAll() {
        localStorage.clear();
    }
}