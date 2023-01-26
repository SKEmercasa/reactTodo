import { formatDistanceToNow } from 'date-fns';

export function date(dates) {
  const result = formatDistanceToNow(dates, { includeSeconds: true });
  return result;
}
