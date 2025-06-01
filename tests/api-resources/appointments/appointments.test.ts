// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DetailingAgent from 'detailing_agent';

const client = new DetailingAgent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appointments', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appointments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.appointments.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.appointments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appointments.list(
        { limit: 1, offset: 0, status: 'scheduled' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DetailingAgent.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('assignTechnician: only required params', async () => {
    const responsePromise = client.appointments.assignTechnician('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      technician_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('assignTechnician: required and optional params', async () => {
    const response = await client.appointments.assignTechnician('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      technician_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.appointments.schedule({
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      requested_start_time: '2019-12-27T18:11:19.117Z',
      service_package_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
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
  test.skip('schedule: required and optional params', async () => {
    const response = await client.appointments.schedule({
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      requested_start_time: '2019-12-27T18:11:19.117Z',
      service_package_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      vehicle_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      notes: 'notes',
      preferred_technician_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      requested_end_time: '2019-12-27T18:11:19.117Z',
    });
  });
});
