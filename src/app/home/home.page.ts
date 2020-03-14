import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherDetailsService } from '../weather-details.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  checkoutForm
  cityName
  constructor(
    private fromBuilder: FormBuilder,
    private weatherDetailsService: WeatherDetailsService
  ) { 
    this.checkoutForm = this.fromBuilder.group({
      name: ''
    });
    this.cityName = ''
  }

  onSearch = (formData) => {
    if(formData.name.length !== 0){
      this.weatherDetailsService.fetchWeather(formData.name);
    }
  }
}
