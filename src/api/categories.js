import { config } from '../config';
import { httpClient } from './httpClient';

export const getAllTicketStatus = () => {

  const header = new Headers({
    'Content-Type': 'application/json'
  });

    const options = {
      method: 'GET',
      headers: header
    };

    return httpClient(`${config.baseURL}categories?type=TicketStatus`, options)
}