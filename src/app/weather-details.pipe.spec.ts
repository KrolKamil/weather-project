import { WeatherDetailsPipe } from './weather-details.pipe';

describe('WeatherDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
