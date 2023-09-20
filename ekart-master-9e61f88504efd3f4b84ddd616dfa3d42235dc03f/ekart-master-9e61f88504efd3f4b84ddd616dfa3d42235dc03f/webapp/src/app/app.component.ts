import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container-fluid mb-2">
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
