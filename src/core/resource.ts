// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DetailingAgent } from '../client';

export abstract class APIResource {
  protected _client: DetailingAgent;

  constructor(client: DetailingAgent) {
    this._client = client;
  }
}
