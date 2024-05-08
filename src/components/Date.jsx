// remove from this dir and into the utils dir
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1; // Add 1 because months are zero-based
const day = date.getDate();

// Extract hour and minute
const hour = date.getHours();
const minute = date.getMinutes();

const currentTime = hour + ":" + minute;
const currentDate = year + "/" + month + "/" + day;

export { year, currentDate, currentTime };
