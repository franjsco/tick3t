import { config } from '../config';
import { getAuthHeader } from '../utils/auth';
import { httpClient } from './httpClient';

export const getTickets = (page = 1, status='') => {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': getAuthHeader()
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return httpClient(`${config.baseURL}tickets?page=${page}&status=${status}`, options);
}

export const findTicket = (ticketId) => {
  const header = new Headers({
    'Content-Type': 'application/json',
    'authorization': getAuthHeader()
  });

  const options = {
    method: 'GET',
    headers: header
  };

  return httpClient(`${config.baseURL}tickets?id=${ticketId}`, options);
}
