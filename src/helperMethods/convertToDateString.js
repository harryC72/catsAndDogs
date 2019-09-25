const convertToDateString = input => {
  let event = new Date(input);

  let result = event.toDateString();

  return result;
};

export default convertToDateString;
