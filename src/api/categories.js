import { config } from '../config';

export const getAllTicketStatus = () => {
  const header = new Headers({
    'Content-Type': 'application/json'
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return fetch(`${config.baseURL}categories?type=TicketStatus`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        throw new Error('Categories not found.');
      } else {
        throw new Error('Ops,problem');
      };
    });
}


export const getAllTicketType = () => {
  const header = new Headers({
    'Content-Type': 'application/json'
  });

  const options = {
    method: 'GET',
    headers: header
  };


  return fetch(`${config.baseURL}categories?type=TicketType`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        throw new Error('Categories not found.');
      } else {
        throw new Error('Ops,problem');
      };
    });
}