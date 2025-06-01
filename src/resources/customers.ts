// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommunicationsAPI from './communications';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Get communication history for a customer
   */
  retrieveCommunicationHistory(
    customerID: string,
    query: CustomerRetrieveCommunicationHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveCommunicationHistoryResponse> {
    return this._client.get(path`/customers/${customerID}/communication-history`, { query, ...options });
  }

  /**
   * Get notification history for a customer
   */
  retrieveNotifications(
    customerID: string,
    query: CustomerRetrieveNotificationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveNotificationsResponse> {
    return this._client.get(path`/customers/${customerID}/notifications`, { query, ...options });
  }
}

export type CustomerRetrieveCommunicationHistoryResponse = Array<CommunicationsAPI.CommunicationLog>;

export type CustomerRetrieveNotificationsResponse = Array<NotificationsAPI.NotificationLog>;

export interface CustomerRetrieveCommunicationHistoryParams {
  /**
   * Maximum number of items to return.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface CustomerRetrieveNotificationsParams {
  /**
   * Maximum number of items to return.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Customers {
  export {
    type CustomerRetrieveCommunicationHistoryResponse as CustomerRetrieveCommunicationHistoryResponse,
    type CustomerRetrieveNotificationsResponse as CustomerRetrieveNotificationsResponse,
    type CustomerRetrieveCommunicationHistoryParams as CustomerRetrieveCommunicationHistoryParams,
    type CustomerRetrieveNotificationsParams as CustomerRetrieveNotificationsParams,
  };
}
