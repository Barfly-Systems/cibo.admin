import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

import { environment } from './../../../environments/environment';
import { CookiesService } from 'src/app/services/cookie.service';
import { ISession } from 'src/app/models/app-state.model';
import { AppState } from 'src/app/services/state.service';
import { Instruction } from './../../staticdata/instructions.data';

import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ToastComponent } from './../dialogs/toast/toast.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  innerLinksReplacementString = environment.pathReplaceString;

  loading: boolean = false;
  background: ThemePalette = undefined;
  outerLinks = 
    [
      {label: "Dashboard", path: 'dashboard', icon: 'dashboard', innerLinks: [{label:"Dashboard", path: 'dashboard'}]},
      {label: "Organisation", path: 'organisation/details', icon: 'local_drink', innerLinks: [{label:"Organisation Details", path: 'organisation/details'}]},
      {label: "Product", path: 'product/productcategory', icon: 'local_drink', innerLinks: [{label:"Product Categories", path: 'product/productcategory'},{label:"Product Types", path: 'product/producttype'}, {label: 'Product Sizes', path:'product/productsize'},{label: "Sales Products", path: 'product/salesproduct'}]},
      {label: "Pricing", path: 'pricing/pricingperiod', icon: 'attach_money', innerLinks: [{label:"Pricing Periods", path: 'pricing/pricingperiod'},{label: "Product Prices", path: 'pricing/productprice'}]},
      {label: "Trading", path: 'trading/tradinghour', icon: 'access_time', innerLinks: [{label:"Trading Hours", path: 'trading/tradinghour'}]},
      {label: "Location", path: 'location/tables', icon: 'home', innerLinks: [{label:"Tables", path: 'location/tables'}]},
    ]
  //are these two used any more?
  links = [{label:"Pricing Periods", path: 'pricing/pricingperiods'},{label: "Product Prices", path: 'pricing/productprice'}]
  linkList = []

  selectedLink;
  activeInnerLink;
  
  currentRouteInstruction: string = null;
  
  constructor(private router: Router, private cookieService: CookiesService, private route: ActivatedRoute, private store: AppState, private _snackBar: MatSnackBar) {
    this.router.events.subscribe((event: Event) => {
      switch(true){
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.currentRouteInstruction = this.route.snapshot.firstChild.data.instruction;
          if(this.currentRouteInstruction != '' && this.currentRouteInstruction != null && this.currentRouteInstruction != undefined){
            this.openSnackBar();
          }
          else{
            this.closeSnackBar();
          }
          console.log(this.currentRouteInstruction);
          this.loading = false;
          break;
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    })
   }

  ngOnInit(): void {
    console.log(document.location.pathname.replace(`${this.innerLinksReplacementString}/app/`, ' '));
    console.log(this.outerLinks);
    this.selectedLink = this.outerLinks.find(ol => ol.innerLinks.find(il => il.path == document.location.pathname.replace(`${this.innerLinksReplacementString}/app/`,'')));  
    //ol.path == document.location.pathname.replace('/app/', ''));
    console.log(this.selectedLink);
    this.activeInnerLink = this.selectedLink.innerLinks.find(il => il.path == document.location.pathname.replace(`${this.innerLinksReplacementString}/app/`, ''));
    if(this.currentRouteInstruction != '' && this.currentRouteInstruction != null && this.currentRouteInstruction != undefined){
      this.openSnackBar();
    }
    else{
      this.closeSnackBar();
    }
  }

  panelOpenState = false;

  changeCategory = (category) => {
    this.selectedLink = category;
    this.activeInnerLink = category.innerLinks[0];
    this.router.navigateByUrl(`/app/${category.path}`);
  }

  setInnerLink = (link) => {
    this.activeInnerLink = link;
    this.router.navigateByUrl(`/app/${link.path}`);
  }

  logout = () => {
    let session: ISession = {
      loggedIn: false,
      organisationId: null
    }

    console.log(this.cookieService.getCookieValue('cibo-admin-session'));

    this.cookieService.removeCookie('cibo-admin-session');
    this.store.setSession(session);
    this.cookieService.testCookies();
    this.router.navigateByUrl('/login');
  }

  openSnackBar = () => {
    this._snackBar.open(this.currentRouteInstruction, "got it",{
      horizontalPosition: "left",
      verticalPosition: 'bottom'
    })
  }

  closeSnackBar = () => {
    this._snackBar.dismiss();
  }
}
