import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigComponent } from '../config/config.component';
import { HomeComponent } from "./home/home.component";
import { ModelColorComponent } from './model-color/model-color.component';
import { ModelColorService } from './model-color/model-color.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [
      AsyncPipe, 
      JsonPipe,
    
      HttpClientModule,
      RouterModule,
      CommonModule,

      HomeComponent,
      ModelColorComponent,
      ConfigComponent
    ],
    providers: [
      ModelColorService
    ]
})
export class AppComponent {
  title = 'tesla-configurator';
}