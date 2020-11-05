import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CookiesService{
    constructor(private cookieService: CookieService){}

    setCookie = (key:string, value: any, expires: Date): void => {
        this.cookieService.set(key, value, expires, '/',  environment.cookieDomain);
    }

    getCookieValue = (key: string): any => {
        return this.cookieService.get(key);
    }

    removeCookie = (key: string): void => {
        this.cookieService.delete('cibo-admin-session', '/', environment.cookieDomain);
    }

    testCookies = () => {
        console.log(this.cookieService.getAll());
    }
}   
