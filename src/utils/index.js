export const convertDate = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
};

export const getRelativeTimeString = (timestamp) => {
  const now = new Date();
  const targetDate = new Date(timestamp);

  const diffTime = now - targetDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "today";
  } else if (diffDays === 1) {
    return "yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
};

export const classUtils = (classObj) => {
  let className = "";

  Object.keys(classObj).forEach((key) => {
    const value = !!classObj[key];
    if (value) className += ` ${key}`;
  });

  return className;
};

export const getTime = (timeStamp) => {
  const date = new Date(timeStamp);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + strMinutes + " " + ampm;
};

export const debounceFn = (fn, time) => {
  let timeout;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, time);
  };
};
