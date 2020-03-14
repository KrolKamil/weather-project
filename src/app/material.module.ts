import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
