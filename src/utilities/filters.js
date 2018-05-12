import moment from 'moment'

export function formatDateFromNow (date) {
  return moment(date).fromNow()
}