import { formatDistanceToNow } from 'date-fns';

export function date(date) {
    const result = formatDistanceToNow(
        date,
        { includeSeconds: true }
    );
    return result;
};