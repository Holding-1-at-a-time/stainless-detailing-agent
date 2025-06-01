// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Quotes extends APIResource {
  /**
   * Generate a price quote
   */
  create(body: QuoteCreateParams, options?: RequestOptions): APIPromise<Quote> {
    return this._client.post('/quotes', { body, ...options });
  }

  /**
   * Get details of a specific quote
   */
  retrieve(quoteID: string, options?: RequestOptions): APIPromise<Quote> {
    return this._client.get(path`/quotes/${quoteID}`, options);
  }
}

export interface Quote {
  id: string;

  customer_id: string;

  expires_at: string;

  generated_at: string;

  line_items: Array<Quote.LineItem>;

  status: 'draft' | 'pending_acceptance' | 'accepted' | 'rejected' | 'expired' | 'invoiced';

  total_amount: number;

  vehicle_id: string;

  currency?: string;

  damage_assessment_id?: string | null;

  discounts?: number | null;

  subtotal?: number;

  taxes?: number | null;
}

export namespace Quote {
  export interface LineItem {
    description?: string;

    quantity?: number;

    service_id?: string;

    service_name?: string;

    total_price?: number;

    unit_price?: number;
  }
}

export interface QuoteCreateParams {
  customer_id: string;

  service_ids: Array<string>;

  vehicle_id: string;

  damage_assessment_id?: string | null;

  requested_by_customer_id?: string | null;
}

export declare namespace Quotes {
  export { type Quote as Quote, type QuoteCreateParams as QuoteCreateParams };
}
