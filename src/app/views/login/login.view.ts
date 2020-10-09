import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute, ActivationStart, RouteConfigLoadStart, RouteConfigLoadEnd, RoutesRecognized, GuardsCheckEnd } from "@angular/router";

import { ICredential } from './../../models/credential.model';

import { AppState } from './../../services/state.service';
import { ApiService } from './../../services/api.service';
import { CookiesService } from './../../services/cookie.service';
import { ISession } from 'src/app/models/app-state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {

  hide: boolean = true;
  
  credentials: ICredential = {
    organisationId: null,
    username: null,
    password: null
  }

  constructor(
    private api: ApiService, 
    private router: Router, 
    private store: AppState,
    private cookies: CookiesService) 
    {
    }

  ngOnInit(): void {
    let session = this.cookies.getCookieValue('cibo-admin-session');
    console.log(session);
    console.log(document.cookie);
    if(session != null && session != undefined && session.trim() != ''){
      this.router.navigateByUrl('/app/dashboard');
    }
  }

  tryLogin = () => {
    this.credentials.organisationId = this.credentials.organisationId;
    this.api.tryLogin(this.credentials).subscribe((authResponse: boolean) => {
      if(authResponse){
        let session: ISession = {
          loggedIn: true,
          organisationId: this.credentials.organisationId
        }
        let currentDate = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(currentDate.getDate() + 1);
        this.cookies.setCookie('cibo-admin-session', JSON.stringify(this.credentials), tomorrow);
        this.store.setSession(session);
        this.router.navigateByUrl('/app/dashboard');
      }
      else{
        alert("OrganisationId not recognised");
      }
    })
  }

}
