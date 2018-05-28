import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DebugComponent } from './debug/debug.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileComponent,
    HomeComponent,
    DebugComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
