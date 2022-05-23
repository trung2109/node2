const array = ['chủ nhật', 'thứ 2', 'thứ 3', 'thứ 4', 'thứ 5', 'thứ 6', 'thứ 7'];

const currentDay = new Date();

const dayIndex = currentDay.getDay();

console.log("Hôm nay là " + array[dayIndex]);