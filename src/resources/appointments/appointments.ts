// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProgressAPI from './progress';
import { Progress, ProgressUpdate, ProgressUpdateParams, ProgressUpdateRequest } from './progress';
import * as QaChecklistsAPI from './qa-checklists';
import { QaChecklist, QaChecklistRequest, QaChecklistSubmitParams, QaChecklists } from './qa-checklists';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Appointments extends APIResource {
  progress: ProgressAPI.Progress = new ProgressAPI.Progress(this._client);
  qaChecklists: QaChecklistsAPI.QaChecklists = new QaChecklistsAPI.QaChecklists(this._client);

  /**
   * Get details of a specific appointment
   */
  retrieve(appointmentID: string, options?: RequestOptions): APIPromise<Appointment> {
    return this._client.get(path`/appointments/${appointmentID}`, options);
  }

  /**
   * Update an existing appointment
   */
  update(
    appointmentID: string,
    body: AppointmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Appointment> {
    return this._client.put(path`/appointments/${appointmentID}`, { body, ...options });
  }

  /**
   * List all appointments
   */
  list(
    query: AppointmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppointmentListResponse> {
    return this._client.get('/appointments', { query, ...options });
  }

  /**
   * Assign a technician to an appointment
   */
  assignTechnician(
    appointmentID: string,
    body: AppointmentAssignTechnicianParams,
    options?: RequestOptions,
  ): APIPromise<Appointment> {
    return this._client.post(path`/appointments/${appointmentID}/assign-technician`, { body, ...options });
  }

  /**
   * Schedule a new appointment
   */
  schedule(body: AppointmentScheduleParams, options?: RequestOptions): APIPromise<Appointment> {
    return this._client.post('/appointments', { body, ...options });
  }
}

export interface Appointment extends AppointmentRequest {
  id?: string;

  actual_end_time?: string | null;

  actual_start_time?: string | null;

  created_at?: string;

  quote_id?: string | null;

  status?:
    | 'pending_confirmation'
    | 'scheduled'
    | 'rescheduled'
    | 'in_progress'
    | 'completed'
    | 'cancelled'
    | 'no_show';

  technician_id?: string | null;

  updated_at?: string;
}

export interface AppointmentRequest {
  customer_id: string;

  requested_start_time: string;

  service_package_ids: Array<string>;

  vehicle_id: string;

  notes?: string | null;

  preferred_technician_id?: string | null;

  requested_end_time?: string | null;
}

export type AppointmentListResponse = Array<Appointment>;

export interface AppointmentUpdateParams {
  notes?: string | null;

  requested_end_time?: string | null;

  requested_start_time?: string | null;

  service_package_ids?: Array<string> | null;

  status?: 'scheduled' | 'rescheduled' | 'in_progress' | 'completed' | 'cancelled' | 'no_show' | null;

  technician_id?: string | null;
}

export interface AppointmentListParams {
  /**
   * Maximum number of items to return.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Filter appointments by status
   */
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'pending_confirmation';
}

export interface AppointmentAssignTechnicianParams {
  technician_id: string;
}

export interface AppointmentScheduleParams {
  customer_id: string;

  requested_start_time: string;

  service_package_ids: Array<string>;

  vehicle_id: string;

  notes?: string | null;

  preferred_technician_id?: string | null;

  requested_end_time?: string | null;
}

Appointments.Progress = Progress;
Appointments.QaChecklists = QaChecklists;

export declare namespace Appointments {
  export {
    type Appointment as Appointment,
    type AppointmentRequest as AppointmentRequest,
    type AppointmentListResponse as AppointmentListResponse,
    type AppointmentUpdateParams as AppointmentUpdateParams,
    type AppointmentListParams as AppointmentListParams,
    type AppointmentAssignTechnicianParams as AppointmentAssignTechnicianParams,
    type AppointmentScheduleParams as AppointmentScheduleParams,
  };

  export {
    Progress as Progress,
    type ProgressUpdate as ProgressUpdate,
    type ProgressUpdateRequest as ProgressUpdateRequest,
    type ProgressUpdateParams as ProgressUpdateParams,
  };

  export {
    QaChecklists as QaChecklists,
    type QaChecklist as QaChecklist,
    type QaChecklistRequest as QaChecklistRequest,
    type QaChecklistSubmitParams as QaChecklistSubmitParams,
  };
}
