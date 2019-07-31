import moment from 'moment';

export const formatDate = (dateString) => {

  if (dateString) {
    if (dateString) {
      const date = moment(dateString);
      return date.format('DD-MM-YYYY HH:mm');
    }
  }

  return '';
} 

export const formatStatus = (value) => {
  if (value) return value.replace(/_/g, " ");
}
