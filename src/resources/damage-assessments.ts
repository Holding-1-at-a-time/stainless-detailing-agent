// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DamageAssessments extends APIResource {
  /**
   * Submit a new damage assessment request
   */
  create(body: DamageAssessmentCreateParams, options?: RequestOptions): APIPromise<DamageAssessment> {
    return this._client.post('/damage-assessments', { body, ...options });
  }

  /**
   * Get details of a specific damage assessment
   */
  retrieve(assessmentID: string, options?: RequestOptions): APIPromise<DamageAssessment> {
    return this._client.get(path`/damage-assessments/${assessmentID}`, options);
  }
}

export interface DamageAssessment extends DamageAssessmentRequest {
  id?: string;

  assessed_by_technician_id?: string | null;

  assessment_date?: string;

  status?: 'pending_review' | 'reviewed' | 'quote_generated';

  total_estimated_repair_cost?: number;
}

export interface DamageAssessmentRequest {
  damage_items: Array<DamageAssessmentRequest.DamageItem>;

  vehicle_id: string;

  notes?: string | null;

  reported_by_customer_id?: string | null;
}

export namespace DamageAssessmentRequest {
  export interface DamageItem {
    damage_type: 'scratch' | 'dent' | 'paint_chip' | 'crack' | 'discoloration' | 'rust' | 'other';

    /**
     * e.g., front_bumper, driver_door, hood
     */
    location: string;

    severity: 'minor' | 'moderate' | 'severe' | 'critical';

    id?: string;

    description?: string | null;

    estimated_repair_cost?: number | null;

    image_urls?: Array<string> | null;
  }
}

export interface DamageAssessmentCreateParams {
  damage_items: Array<DamageAssessmentCreateParams.DamageItem>;

  vehicle_id: string;

  notes?: string | null;

  reported_by_customer_id?: string | null;
}

export namespace DamageAssessmentCreateParams {
  export interface DamageItem {
    damage_type: 'scratch' | 'dent' | 'paint_chip' | 'crack' | 'discoloration' | 'rust' | 'other';

    /**
     * e.g., front_bumper, driver_door, hood
     */
    location: string;

    severity: 'minor' | 'moderate' | 'severe' | 'critical';

    description?: string | null;

    estimated_repair_cost?: number | null;

    image_urls?: Array<string> | null;
  }
}

export declare namespace DamageAssessments {
  export {
    type DamageAssessment as DamageAssessment,
    type DamageAssessmentRequest as DamageAssessmentRequest,
    type DamageAssessmentCreateParams as DamageAssessmentCreateParams,
  };
}
