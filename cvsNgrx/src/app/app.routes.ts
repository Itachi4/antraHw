import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { MainComponent } from './main/main.component'
export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'main', component: MainComponent }, // Root route shows the form
     // Root route shows the form
    { path: 'display', component: DisplayComponent }, // Display route shows the submitted data
];
