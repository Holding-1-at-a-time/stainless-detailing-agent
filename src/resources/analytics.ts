// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Get key performance indicators (KPIs)
   */
  retrieveKpis(
    query: AnalyticsRetrieveKpisParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveKpisResponse> {
    return this._client.get('/analytics/kpis', { query, ...options });
  }

  /**
   * Get service trends
   */
  retrieveServiceTrends(
    query: AnalyticsRetrieveServiceTrendsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveServiceTrendsResponse> {
    return this._client.get('/analytics/service-trends', { query, ...options });
  }
}

export type AnalyticsRetrieveKpisResponse =
  Array<AnalyticsRetrieveKpisResponse.AnalyticsRetrieveKpisResponseItem>;

export namespace AnalyticsRetrieveKpisResponse {
  export interface AnalyticsRetrieveKpisResponseItem {
    kpi_name: string;

    period: string;

    value: string;

    previous_value?: string | null;

    trend?: 'up' | 'down' | 'stable' | 'N/A';

    unit?: string | null;
  }
}

export type AnalyticsRetrieveServiceTrendsResponse =
  Array<AnalyticsRetrieveServiceTrendsResponse.AnalyticsRetrieveServiceTrendsResponseItem>;

export namespace AnalyticsRetrieveServiceTrendsResponse {
  export interface AnalyticsRetrieveServiceTrendsResponseItem {
    period: string;

    service_name: string;

    total_bookings: number;

    total_revenue: number;

    average_revenue_per_booking?: number;
  }
}

export interface AnalyticsRetrieveKpisParams {
  period?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
}

export interface AnalyticsRetrieveServiceTrendsParams {
  period?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
}

export declare namespace Analytics {
  export {
    type AnalyticsRetrieveKpisResponse as AnalyticsRetrieveKpisResponse,
    type AnalyticsRetrieveServiceTrendsResponse as AnalyticsRetrieveServiceTrendsResponse,
    type AnalyticsRetrieveKpisParams as AnalyticsRetrieveKpisParams,
    type AnalyticsRetrieveServiceTrendsParams as AnalyticsRetrieveServiceTrendsParams,
  };
}
