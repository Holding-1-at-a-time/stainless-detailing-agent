// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Services extends APIResource {
  /**
   * List available detailing services and packages
   */
  list(options?: RequestOptions): APIPromise<ServiceListResponse> {
    return this._client.get('/services', options);
  }
}

export type ServiceListResponse = Array<ServiceListResponse.ServiceListResponseItem>;

export namespace ServiceListResponse {
  export interface ServiceListResponseItem {
    id: string;

    base_price: number;

    estimated_duration_minutes: number;

    name: string;

    description?: string;

    included_service_ids?: Array<string>;

    package_discount_percentage?: number | null;
  }
}

export declare namespace Services {
  export { type ServiceListResponse as ServiceListResponse };
}
