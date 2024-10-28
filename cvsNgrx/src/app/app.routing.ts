import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Root route shows the form
    { path: 'display', component: DisplayComponent }, // Display route shows the submitted data
];
