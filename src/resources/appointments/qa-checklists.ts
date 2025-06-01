// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class QaChecklists extends APIResource {
  /**
   * Get QA checklist for an appointment
   */
  retrieve(appointmentID: string, options?: RequestOptions): APIPromise<QaChecklist> {
    return this._client.get(path`/appointments/${appointmentID}/qa-checklists`, options);
  }

  /**
   * Submit or update QA checklist for an appointment
   */
  submit(
    appointmentID: string,
    body: QaChecklistSubmitParams,
    options?: RequestOptions,
  ): APIPromise<QaChecklist> {
    return this._client.post(path`/appointments/${appointmentID}/qa-checklists`, { body, ...options });
  }
}

export interface QaChecklist extends QaChecklistRequest {
  id?: string;

  appointment_id?: string;

  inspection_date?: string;

  overall_status?: 'pass' | 'fail_requires_rework' | 'pending_review';
}

export interface QaChecklistRequest {
  inspector_technician_id: string;

  items: Array<QaChecklistRequest.Item>;

  overall_comments?: string | null;
}

export namespace QaChecklistRequest {
  export interface Item {
    item_description: string;

    status: 'pass' | 'fail' | 'not_applicable' | 'pending';

    id?: string;

    comments?: string | null;

    image_urls?: Array<string> | null;
  }
}

export interface QaChecklistSubmitParams {
  inspector_technician_id: string;

  items: Array<QaChecklistSubmitParams.Item>;

  overall_comments?: string | null;
}

export namespace QaChecklistSubmitParams {
  export interface Item {
    item_description: string;

    status: 'pass' | 'fail' | 'not_applicable' | 'pending';

    comments?: string | null;

    image_urls?: Array<string> | null;
  }
}

export declare namespace QaChecklists {
  export {
    type QaChecklist as QaChecklist,
    type QaChecklistRequest as QaChecklistRequest,
    type QaChecklistSubmitParams as QaChecklistSubmitParams,
  };
}
