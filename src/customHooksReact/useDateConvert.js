const useDateConvert = (dateString) => {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export default useDateConvert;
