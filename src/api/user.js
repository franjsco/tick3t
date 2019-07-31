import { config } from '../config';


export const userAPI = {
  login,
  logout,
};

function login(email, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(`${config.baseURL}users/login`, options)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
};


function logout() {
  localStorage.removeItem('user');
}


function handleResponse(response) {
  return response.text()
    .then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
          if (response.status === 401) {
            logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        return data;
      }
    );
};