import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherApiService } from './weather-api.service';
import { WeatherDetailsService } from './weather-details.service';
import { WeatherDetails } from './weather-details';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {

  private iconSource = new BehaviorSubject<ArrayBuffer | string | null>(null);
  public icon = this.iconSource.asObservable();
  
  private iconFetchingSource = new BehaviorSubject<Boolean>(false);
  public iconFetching = this.iconFetchingSource.asObservable();
  
  private iconFetchingErrorSource = new BehaviorSubject<String | null>(null);
  public iconFetchingError = this.iconFetchingErrorSource.asObservable();
  

  constructor(
    private weatherApiService: WeatherApiService,
    private weatherDetailsService: WeatherDetailsService
  ) { 
    this.weatherDetailsService.weatherDetails.subscribe(
      this.fetchingIconHandler
    );
  }

  private fetchingIconHandler = (data: WeatherDetails | null) => {
    if(data){
      this.fetchIcon(data.iconId);
    }
  }

  private fetchIcon = (iconId) => {
    if(this.iconFetchingSource.getValue() === false){
      this.iconFetchingSource.next(true);
      this.iconFetchingErrorSource.next(null);
      this.weatherApiService.getWeatherIconById(iconId)
        .subscribe(this.iconFetchedAction, this.iconFetchingErrorAction);
    }
  }

  private iconFetchedAction = (data) => {
    this.iconFetchingSource.next(false);
    this.createImageFromBlob(data);
  }

  private iconFetchingErrorAction = (error) => {
    this.iconFetchingSource.next(false);
    this.iconFetchingErrorSource.next(error);
    this.iconSource.next(null);
  }

  private createImageFromBlob = (image: Blob) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.iconSource.next(reader.result);
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }
}
