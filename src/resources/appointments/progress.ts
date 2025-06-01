// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Progress extends APIResource {
  /**
   * Get the current progress of an appointment
   */
  retrieve(appointmentID: string, options?: RequestOptions): APIPromise<ProgressUpdate> {
    return this._client.get(path`/appointments/${appointmentID}/progress`, options);
  }

  /**
   * Update the progress of an appointment
   */
  update(
    appointmentID: string,
    body: ProgressUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProgressUpdate> {
    return this._client.put(path`/appointments/${appointmentID}/progress`, { body, ...options });
  }
}

export interface ProgressUpdate extends ProgressUpdateRequest {
  id?: string;

  appointment_id?: string;

  percentage_complete?: number | null;

  timestamp?: string;
}

export interface ProgressUpdateRequest {
  current_stage:
    | 'vehicle_check_in'
    | 'pre_wash'
    | 'washing'
    | 'drying'
    | 'clay_bar'
    | 'polishing'
    | 'waxing_sealing'
    | 'interior_vacuuming'
    | 'interior_detailing'
    | 'window_cleaning'
    | 'tire_dressing'
    | 'quality_check'
    | 'vehicle_ready'
    | 'completed';

  estimated_completion_time?: string | null;

  reported_by_technician_id?: string;

  status_notes?: string | null;
}

export interface ProgressUpdateParams {
  current_stage:
    | 'vehicle_check_in'
    | 'pre_wash'
    | 'washing'
    | 'drying'
    | 'clay_bar'
    | 'polishing'
    | 'waxing_sealing'
    | 'interior_vacuuming'
    | 'interior_detailing'
    | 'window_cleaning'
    | 'tire_dressing'
    | 'quality_check'
    | 'vehicle_ready'
    | 'completed';

  estimated_completion_time?: string | null;

  reported_by_technician_id?: string;

  status_notes?: string | null;
}

export declare namespace Progress {
  export {
    type ProgressUpdate as ProgressUpdate,
    type ProgressUpdateRequest as ProgressUpdateRequest,
    type ProgressUpdateParams as ProgressUpdateParams,
  };
}
