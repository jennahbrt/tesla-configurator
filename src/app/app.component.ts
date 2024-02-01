import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [AsyncPipe, 
      JsonPipe,
    
      HomeComponent,
      routes,
      HttpClientModule,
    ],
})
export class AppComponent {
  name = 'Angular';

}
