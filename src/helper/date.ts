import { formatDistanceToNow } from "date-fns";

export const timeAgo = (timestamp: number): string => {
    const date = new Date(timestamp);
    
    return formatDistanceToNow(date, { addSuffix: true });
  }