import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class CookiesService{
    constructor(private cookieService: CookieService){}

    setCookie = (key:string, value: any, expires: Date): void => {
        this.cookieService.set(key, value, expires);
    }

    getCookieValue = (key: string): any => {
        return this.cookieService.get(key);
    }
}   
