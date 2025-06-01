// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Technicians extends APIResource {
  /**
   * List available technicians
   */
  list(options?: RequestOptions): APIPromise<TechnicianListResponse> {
    return this._client.get('/technicians', options);
  }
}

export type TechnicianListResponse = Array<TechnicianListResponse.TechnicianListResponseItem>;

export namespace TechnicianListResponse {
  export interface TechnicianListResponseItem {
    id: string;

    name: string;

    availability?: string;

    specialties?: Array<string>;
  }
}

export declare namespace Technicians {
  export { type TechnicianListResponse as TechnicianListResponse };
}
