import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private http: HttpClient
  ) { }

  
  getCityWeatherByName(name: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bd2666f0e51cea025ed0c8a8887c482b`)
      .pipe(
        catchError(this.handleGetCityWeatherByNameError)
      )
  }

  private handleGetCityWeatherByNameError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError('Brak połączenia z internetem');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if(error.status === 404){
        return throwError('Brak podanego miasta w bazie');
      } else {
        return throwError('Serwer napotkał nieoczekiwany błąd');
      }
    }
  };

  getWeatherIconById(id: string){
    return this.http.get(`http://openweathermap.org/img/wn/${id}.png`,
    {
      responseType: 'blob'
    }).pipe(
        catchError(this.handleGetWeatherIconByIdError)
      );
  }

  handleGetWeatherIconByIdError(error: HttpErrorResponse){
    return throwError(false);
  }

}
