const getFormattedDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleString();
};

export { getFormattedDate };
