export default async function request(config) {
  return fetch(config.url, {
    method: config.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 401) {
        return Promise.reject(new Error('未登录!'));
      }
      return response;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
