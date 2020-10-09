import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

import { environment } from './../../../environments/environment';

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
      {label: "Product", path: 'product/productcategory', icon: 'local_drink', innerLinks: [{label:"Product Categories", path: 'product/productcategory'},{label:"Product Types", path: 'product/producttype'}, {label: 'Product Sizes', path:'product/productsize'},{label: "Sales Products", path: 'product/salesproduct'}]},
      {label: "Pricing", path: 'pricing/pricingperiod', icon: 'attach_money', innerLinks: [{label:"Pricing Periods", path: 'pricing/pricingperiod'},{label: "Product Prices", path: 'pricing/productprice'}]},
      {label: "Trading", path: 'trading/tradinghour', icon: 'access_time', innerLinks: [{label:"Trading Hours", path: 'trading/tradinghour'}]}
    ]
  //are these two used any more?
  links = [{label:"Pricing Periods", path: 'pricing/pricingperiods'},{label: "Product Prices", path: 'pricing/productprice'}]
  linkList = []

  selectedLink;
  activeInnerLink;
  

  
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch(true){
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
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
}
