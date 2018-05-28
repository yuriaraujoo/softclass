import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DebugComponent } from './debug/debug.component';



const APP_ROUTES: Routes = [
    { path: 'debug', component: DebugComponent},
    { path: 'form' , component: FormComponent},
    { path: 'profile', component: ProfileComponent},
    { path: '' , component: HomeComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);