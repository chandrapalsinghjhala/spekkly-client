import diff from "datetime-diff";
import dateFormat from "dateformat";

export const formatMessageTimeStamp = (messageTimeStamp) => {
  const dateFromMessage = new Date(messageTimeStamp);
  const days = getDaysDiff(Date.now(), dateFromMessage);
  const hourMinute = "h:MM TT";
  if (days > 365) {
    return dateFormat(dateFromMessage, `d/m/yy, ${hourMinute}`);
  } else if (days > 7) {
    return dateFormat(dateFromMessage, `mmm dd, yyyy, ${hourMinute}`);
  } else if (days > 1) {
    return dateFormat(dateFromMessage, `ddd ${hourMinute}`);
  } else {
    return dateFormat(dateFromMessage, `${hourMinute}`);
  }
};

export const getDaysDiff = (firstTimestamp, secondTimestamp) =>
  diff(new Date(firstTimestamp), new Date(secondTimestamp)).days;
