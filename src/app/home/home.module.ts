import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MaterialModule } from '../material.module';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    WeatherDetailsComponent,
    WeatherIconComponent
  ]
})
export class HomePageModule {}
