// src/__tests__/integration/api.test.js

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: 200, data: { message: 'Success' } }), 100);
  });
}

test('fetchData returns success response', async () => {
  const response = await fetchData();
  expect(response.status).toBe(200);
  expect(response.data.message).toBe('Success');
});
