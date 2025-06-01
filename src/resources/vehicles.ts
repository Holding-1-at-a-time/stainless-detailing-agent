// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vehicles extends APIResource {
  /**
   * Get maintenance history for a vehicle
   */
  retrieveMaintenanceHistory(
    vehicleID: string,
    options?: RequestOptions,
  ): APIPromise<VehicleRetrieveMaintenanceHistoryResponse> {
    return this._client.get(path`/vehicles/${vehicleID}/maintenance-history`, options);
  }

  /**
   * Get maintenance recommendations for a vehicle
   */
  retrieveMaintenanceRecommendations(
    vehicleID: string,
    options?: RequestOptions,
  ): APIPromise<VehicleRetrieveMaintenanceRecommendationsResponse> {
    return this._client.get(path`/vehicles/${vehicleID}/maintenance-recommendations`, options);
  }
}

export type VehicleRetrieveMaintenanceHistoryResponse =
  Array<VehicleRetrieveMaintenanceHistoryResponse.VehicleRetrieveMaintenanceHistoryResponseItem>;

export namespace VehicleRetrieveMaintenanceHistoryResponse {
  export interface VehicleRetrieveMaintenanceHistoryResponseItem {
    description: string;

    service_date: string;

    service_type: string;

    vehicle_id: string;

    id?: string;

    cost?: number | null;

    odometer_reading?: number | null;

    serviced_by?: string | null;
  }
}

export type VehicleRetrieveMaintenanceRecommendationsResponse =
  Array<VehicleRetrieveMaintenanceRecommendationsResponse.VehicleRetrieveMaintenanceRecommendationsResponseItem>;

export namespace VehicleRetrieveMaintenanceRecommendationsResponse {
  export interface VehicleRetrieveMaintenanceRecommendationsResponseItem {
    reason: string;

    recommended_service_name: string;

    urgency: 'low' | 'medium' | 'high' | 'critical';

    vehicle_id: string;

    id?: string;

    estimated_cost?: number | null;

    recommended_date_or_mileage?: string | null;
  }
}

export declare namespace Vehicles {
  export {
    type VehicleRetrieveMaintenanceHistoryResponse as VehicleRetrieveMaintenanceHistoryResponse,
    type VehicleRetrieveMaintenanceRecommendationsResponse as VehicleRetrieveMaintenanceRecommendationsResponse,
  };
}
