// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DetailingAgent from 'detailing_agent';

const client = new DetailingAgent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  // skipped: tests are disabled for the time being
  test.skip('submit: only required params', async () => {
    const responsePromise = client.feedback.submit({
      appointment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rating: 1,
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.feedback.submit({
      appointment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rating: 1,
      comments: 'comments',
      service_aspect_ratings: { quality_of_work: 5, customer_service: 4, timeliness: 5 },
    });
  });
});
