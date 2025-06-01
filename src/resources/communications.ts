// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Communications extends APIResource {
  /**
   * Send a communication message to a customer
   */
  send(body: CommunicationSendParams, options?: RequestOptions): APIPromise<CommunicationLog> {
    return this._client.post('/communications/send', { body, ...options });
  }
}

export type CommunicationChannel = 'email' | 'sms' | 'in_app_notification' | 'phone_call';

export interface CommunicationLog extends CommunicationRequest {
  id?: string;

  error_message?: string | null;

  sent_at?: string;

  status?: 'pending' | 'sent' | 'delivered' | 'failed' | 'read';
}

export interface CommunicationRequest {
  channel: CommunicationChannel;

  communication_type:
    | 'appointment_confirmation'
    | 'appointment_reminder'
    | 'service_update'
    | 'service_completion'
    | 'feedback_request'
    | 'promotional_offer'
    | 'general_information';

  customer_id: string;

  message_body: string;

  subject?: string | null;

  template_id?: string | null;

  template_variables?: Record<string, string> | null;
}

export interface CommunicationSendParams {
  channel: CommunicationChannel;

  communication_type:
    | 'appointment_confirmation'
    | 'appointment_reminder'
    | 'service_update'
    | 'service_completion'
    | 'feedback_request'
    | 'promotional_offer'
    | 'general_information';

  customer_id: string;

  message_body: string;

  subject?: string | null;

  template_id?: string | null;

  template_variables?: Record<string, string> | null;
}

export declare namespace Communications {
  export {
    type CommunicationChannel as CommunicationChannel,
    type CommunicationLog as CommunicationLog,
    type CommunicationRequest as CommunicationRequest,
    type CommunicationSendParams as CommunicationSendParams,
  };
}
