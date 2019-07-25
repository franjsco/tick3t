
export const httpClient = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }).catch(err => {
      throw new Error(err);
    });

} 