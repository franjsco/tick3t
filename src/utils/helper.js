import moment from 'moment';

export const formatDate = (dateString) => {

  if (dateString) {
    const date = moment(dateString);
    return date.format('DD-MM-YYYY HH:mm');
  }

  return '';
} 

export const decode = (value) => {
  return value.replace(/_/g, " ");
}
