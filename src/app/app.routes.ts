import { Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelColorComponent } from './model-color/model-color.component';
import { ConfigComponent } from '../config/config.component';

export const routes: Routes = [
    {path: 'step1', component: ModelColorComponent},
    {path: 'step2', component: ConfigComponent},
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
