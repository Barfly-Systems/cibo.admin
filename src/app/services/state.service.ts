import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IAppState, ISession } from './../models/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class AppState {

  private state: IAppState = {
    session: {
      loggedIn: false,
      organisationId: null
    }
  }

  sessionChangeSubject: Subject<ISession> = new Subject<ISession>();

  constructor() {
    this.sessionChangeSubject.subscribe((value) => {
      this.state.session = value;
    })
   }

   setSession = (session: ISession) => {
     this.sessionChangeSubject.next(session);
   }

   get session(): ISession{
     return this.state.session;
   }  

   get organisationId(): number{
     return this.state.session.organisationId;
   }
}
