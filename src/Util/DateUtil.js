/** @format */

export const getDateObj = (dateSelected) => {
  let dateString = new Date(dateSelected).toDateString();
  let dateArr = dateString.split(" ");

  return {
    day: dateArr[0],
    month: dateArr[1],
    date: dateArr[2],
    year: dateArr[3],
  };
};
