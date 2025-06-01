// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DetailingAgent from 'detailing_agent';

const client = new DetailingAgent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notifications', () => {
  // skipped: tests are disabled for the time being
  test.skip('sendProactive: only required params', async () => {
    const responsePromise = client.notifications.sendProactive({
      delivery_channel: 'email',
      message_body: 'message_body',
      notification_type: 'service_reminder',
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
  test.skip('sendProactive: required and optional params', async () => {
    const response = await client.notifications.sendProactive({
      delivery_channel: 'email',
      message_body: 'message_body',
      notification_type: 'service_reminder',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      scheduled_send_time: '2019-12-27T18:11:19.117Z',
      segment_id: 'segment_id',
      subject: 'subject',
      template_id: 'template_id',
      template_variables: { foo: 'string' },
    });
  });
});
