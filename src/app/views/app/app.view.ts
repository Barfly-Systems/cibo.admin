import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
  selector: 'app-app',
  templateUrl: './app.view.html',
  styleUrls: ['./app.view.scss']
})
export class AppView implements OnInit {
  loading = false;

  constructor() {}

  ngOnInit(): void {
  }

}
