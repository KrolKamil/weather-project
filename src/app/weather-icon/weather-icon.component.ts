import { Component, OnInit } from '@angular/core';
import { WeatherIconService } from '../weather-icon.service';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
})
export class WeatherIconComponent implements OnInit {
  icon = null;

  constructor(
    private weatherIconService : WeatherIconService
  ) {
    this.weatherIconService.icon.subscribe(
      this.setIcon
    )
   }

   setIcon = (icon) => {
     this.icon = icon;
   }
  ngOnInit() {}

}
