import { Component, OnInit } from '@angular/core';
import { AppState } from './services/state.service';
import { Router, ActivationStart, Event } from '@angular/router';
import { CookiesService } from './services/cookie.service';
import { ISession } from './models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cibo-admin';
  loggedIn: boolean = false;

  constructor(private store: AppState, private router: Router, private cookies: CookiesService){
    this.router.events.subscribe((event: Event) => {
      let isAbandoned: boolean;
        if(event instanceof ActivationStart){
          let sCookie = this.cookies.getCookieValue('cibo-admin-session')
          let sCookiesObj = JSON.parse(sCookie);
          if(sCookie){
            let s: ISession = {
              organisationId: sCookiesObj.organisationId,
              loggedIn: true
            }
            this.store.setSession(s);
          }
        }
      })
  }

  ngOnInit(){
    this.store.sessionChangeSubject.subscribe(value => {
      this.loggedIn = value.loggedIn;
    })
  }

}
