import { AsyncPipe, CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ConfigComponent } from '../config/config.component';
import { HomeComponent } from "./home/home.component";
import { ModelColorComponent } from './model-color/model-color.component';
import { ModelColorService } from './model-color/model-color.service';
import { BrowserModule } from '@angular/platform-browser';

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
      UpperCasePipe,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,

      HomeComponent,
      ModelColorComponent,
      ConfigComponent
    ],
    providers: [
      ModelColorService,
      BrowserModule,
    ]
})
export class AppComponent {
  title = 'tesla-configurator';
}