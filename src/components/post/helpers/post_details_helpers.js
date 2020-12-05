import dateFormat from "dateformat";

export const formatAuthoredDate = (createdAt) =>
  dateFormat(createdAt, "mmm d, yyyy");
