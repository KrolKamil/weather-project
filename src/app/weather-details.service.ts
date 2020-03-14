import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherApiService } from './weather-api.service';
import { WeatherDetailsPipe } from './weather-details.pipe';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {
  private weatherDetailsSource = new BehaviorSubject<Object | null>(null);
  public weatherDetails = this.weatherDetailsSource.asObservable();
  
  private weatherFetchingSource = new BehaviorSubject<Boolean>(false);
  public weatherFetching = this.weatherFetchingSource.asObservable();
  
  private weatherFetchingErrorSource = new BehaviorSubject<String | null>(null);
  public weatherFetchingError = this.weatherFetchingErrorSource.asObservable();
  

  constructor(
    private weatherApiService: WeatherApiService,
    private weatherDetailsPipe: WeatherDetailsPipe
  ) { }

  fetchWeather = (cityName) => {
    if(this.weatherFetchingSource.getValue() === false){
      this.weatherFetchingSource.next(true);
      this.weatherFetchingErrorSource.next(null);
      this.weatherApiService.getCityWeatherByName(cityName)
        .subscribe(this.weatherFetched, this.weatherFetchError);
    }
  }

  private weatherFetched = (data) => {
    this.weatherFetchingSource.next(false);
    this.weatherDetailsSource.next(this.weatherDetailsPipe.transform(data))
  }

  private weatherFetchError = (error) => {
    this.weatherFetchingSource.next(false);
    this.weatherFetchingErrorSource.next(error);
  }
}
