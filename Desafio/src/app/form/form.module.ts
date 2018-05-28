import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from '../debug/debug.component';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponent,
    DebugComponent
  ]
})
export class FormModule { }
