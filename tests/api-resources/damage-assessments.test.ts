// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DetailingAgent from 'detailing_agent';

const client = new DetailingAgent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource damageAssessments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.damageAssessments.create({
      damage_items: [{ damage_type: 'scratch', location: 'driver_door', severity: 'minor' }],
      vehicle_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.damageAssessments.create({
      damage_items: [
        {
          damage_type: 'scratch',
          location: 'driver_door',
          severity: 'minor',
          description: 'description',
          estimated_repair_cost: 0,
          image_urls: ['string'],
        },
      ],
      vehicle_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      notes: 'notes',
      reported_by_customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.damageAssessments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
