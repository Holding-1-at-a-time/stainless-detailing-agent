// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Weather extends APIResource {
  /**
   * Get weather forecast for a location
   */
  getForecast(
    query: WeatherGetForecastParams,
    options?: RequestOptions,
  ): APIPromise<WeatherGetForecastResponse> {
    return this._client.get('/weather/forecast', { query, ...options });
  }
}

export type WeatherGetForecastResponse = Array<WeatherGetForecastResponse.WeatherGetForecastResponseItem>;

export namespace WeatherGetForecastResponse {
  export interface WeatherGetForecastResponseItem {
    condition:
      | 'clear'
      | 'clouds'
      | 'drizzle'
      | 'rain'
      | 'thunderstorm'
      | 'snow'
      | 'mist'
      | 'fog'
      | 'haze'
      | 'sunny_intervals';

    location: WeatherGetForecastResponseItem.Location;

    temperature_celsius: number;

    /**
     * Timestamp of the forecast data point
     */
    timestamp: string;

    condition_description?: string;

    humidity_percentage?: number;

    precipitation_probability?: number | null;

    wind_speed_mps?: number;
  }

  export namespace WeatherGetForecastResponseItem {
    export interface Location {
      city?: string | null;

      latitude?: number;

      longitude?: number;
    }
  }
}

export interface WeatherGetForecastParams {
  /**
   * Latitude of the location
   */
  latitude: number;

  /**
   * Longitude of the location
   */
  longitude: number;

  /**
   * Number of days for forecast (e.g., 1-7)
   */
  days?: number;
}

export declare namespace Weather {
  export {
    type WeatherGetForecastResponse as WeatherGetForecastResponse,
    type WeatherGetForecastParams as WeatherGetForecastParams,
  };
}
