import { Pipe, PipeTransform } from '@angular/core';
import { WeatherDetails } from './weather-details';

@Pipe({
  name: 'weatherDetails'
})
export class WeatherDetailsPipe implements PipeTransform {


  transform(weatherData: any): WeatherDetails {
    const celsiusTemperature = this.kelvinToCelsius(weatherData.main.temp);
    return {
      name: weatherData.name,
      temperature: Math.round(parseFloat(celsiusTemperature)).toString(),
      pressure: weatherData.main.pressure,
      sunrise: this.unixTimeToDate(weatherData.sys.sunrise * 1000),
      sunset: this.unixTimeToDate(weatherData.sys.sunset * 1000),
      date: this.unixTimeToDate(new Date()),
      description: this.getDescriptionByCelsiusTemperature(celsiusTemperature),
      iconId: weatherData.weather[0].icon
    };
  }

  private kelvinToCelsius (kelvin) {
    return (kelvin - 273.15).toString();
  };
  
  private unixTimeToDate (value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formatedDate = `${hours}h:${minutes}min - ${day}/${month}/${year}`;
    return formatedDate;
  };

  private getDescriptionByCelsiusTemperature (value) {
    if (value <= 0) {
      return 'Brrr zimno';
    }
    else if ((value > 0) && (value <=10)){
      return 'Moglo by byc cieplej';
    }
    else {
      return 'Przyjemnie ciepło';
    }
  };
}
