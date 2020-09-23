import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IProductPriceListItem } from './../models/product-price-list.model';
import { ApiService } from './../services/api.service';
import { AppState } from './../services/state.service';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'    
})
export class PriceListResolver implements Resolve<any>{
    
    constructor (private api: ApiService, private store: AppState){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ){
        return this.api.getProductPriceListSync(this.store.session.organisationId, false, false);
        // return of(this.api.getProductPriceList(this.store.session.organisationId, false, false));
    }
}