export const convertDate = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
};
