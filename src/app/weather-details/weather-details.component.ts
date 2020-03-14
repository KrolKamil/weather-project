import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../weather-details.service';
import { WeatherDetails } from '../weather-details';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  weather = null;

  constructor(
    private weatherDetailsService: WeatherDetailsService
  ) {
    console.log(this.weatherDetailsService);
    console.log(this.weatherDetailsService.weatherDetails);
    this.weatherDetailsService.weatherDetails.subscribe(
      this.setWeatherData
    )
   }

   private setWeatherData = (data : WeatherDetails) => {
     this.weather = data;
   }
  ngOnInit() {}

}
