// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommunicationsAPI from './communications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Send a proactive notification
   */
  sendProactive(
    body: NotificationSendProactiveParams,
    options?: RequestOptions,
  ): APIPromise<NotificationLog> {
    return this._client.post('/notifications/send-proactive', { body, ...options });
  }
}

export interface NotificationLog extends CommunicationsAPI.CommunicationLog {
  notification_type?: NotificationType;
}

export type NotificationType =
  | 'service_reminder'
  | 'special_offer'
  | 'personalized_recommendation'
  | 'loyalty_update'
  | 'upcoming_appointment_preparation';

export interface NotificationSendProactiveParams {
  delivery_channel: CommunicationsAPI.CommunicationChannel;

  message_body: string;

  notification_type: NotificationType;

  customer_id?: string | null;

  scheduled_send_time?: string | null;

  segment_id?: string | null;

  subject?: string | null;

  template_id?: string | null;

  template_variables?: Record<string, string> | null;
}

export declare namespace Notifications {
  export {
    type NotificationLog as NotificationLog,
    type NotificationType as NotificationType,
    type NotificationSendProactiveParams as NotificationSendProactiveParams,
  };
}
