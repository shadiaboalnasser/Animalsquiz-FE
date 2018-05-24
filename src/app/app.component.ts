import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <app-navbar></app-navbar>
    <div class="container bg-3 text-center">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>`,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
