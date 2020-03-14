import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
