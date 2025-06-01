// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Feedback extends APIResource {
  /**
   * Submit customer feedback
   *
   * @example
   * ```ts
   * const response = await client.feedback.submit({
   *   appointment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   rating: 1,
   * });
   * ```
   */
  submit(body: FeedbackSubmitParams, options?: RequestOptions): APIPromise<FeedbackSubmitResponse> {
    return this._client.post('/feedback', { body, ...options });
  }
}

export interface FeedbackRequest {
  appointment_id: string;

  customer_id: string;

  /**
   * Star rating, e.g., 1 to 5
   */
  rating: number;

  comments?: string | null;

  service_aspect_ratings?: Record<string, number>;
}

export interface FeedbackSubmitResponse extends FeedbackRequest {
  id?: string;

  submission_date?: string;
}

export interface FeedbackSubmitParams {
  appointment_id: string;

  customer_id: string;

  /**
   * Star rating, e.g., 1 to 5
   */
  rating: number;

  comments?: string | null;

  service_aspect_ratings?: Record<string, number>;
}

export declare namespace Feedback {
  export {
    type FeedbackRequest as FeedbackRequest,
    type FeedbackSubmitResponse as FeedbackSubmitResponse,
    type FeedbackSubmitParams as FeedbackSubmitParams,
  };
}
