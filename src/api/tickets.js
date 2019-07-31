import { config } from '../config';
import { authHeader } from '../_helpers';

export const getTickets = (page = 1, status = '') => {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': authHeader()
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return fetch(`${config.baseURL}tickets?page=${page}&status=${status}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Ops,problem')
      }
    });;
}

export const viewTicket = (ticketId) => {
  const header = new Headers({
    'Content-Type': 'application/json'
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return fetch(`${config.baseURL}tickets/${ticketId}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        throw new Error('Ticket not found.');
      } else {
        throw new Error('Ops,problem');
      }
    });
}

export const findTicket = (ticketId) => {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': authHeader()
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return fetch(`${config.baseURL}tickets?id=${ticketId}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Ops,problem');
      }
    });
}

export const updateTicket = (ticket) => {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': authHeader()
  });

  const options = {
    method: 'PUT',
    headers: header,
    body: JSON.stringify({
      status: ticket.status,
      note: ticket.note
    })
  };

  return fetch(`${config.baseURL}tickets/${ticket.ticketId}`, options)
    .then(res => {
      console.log(res.status)
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Ops,problem');
      }
    });
}


export const createTicket = (ticket) => {
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify(ticket)
  };

  return fetch(`${config.baseURL}tickets`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Ops, prolem');
      }
    });
}