import { formatDistance, subDays } from 'date-fns'

export function date() {
    let date = formatDistance(subDays(new Date(), 3), new Date());
    return date;
};