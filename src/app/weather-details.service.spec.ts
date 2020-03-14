import { TestBed } from '@angular/core/testing';

import { WeatherDetailsService } from './weather-details.service';

describe('WeatherDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDetailsService = TestBed.get(WeatherDetailsService);
    expect(service).toBeTruthy();
  });
});
