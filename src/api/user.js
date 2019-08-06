import { config } from '../config';
import { authHeader } from '../_helpers';


export const userAPI = {
  login,
  logout,
  changePassword,
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
      sessionStorage.setItem('user', JSON.stringify(user));
      return user;
    });
};


function logout() {
  sessionStorage.removeItem('user');
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


function changePassword(user) {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': authHeader()
  });

  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      newPassword: user.newPassword,
    })
  };

  return fetch(`${config.baseURL}users/changePassword`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Ops,problem');
      }
    });
}