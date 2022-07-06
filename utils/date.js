export const formatDate = (d, forDisplay = false) => {
    let date = new Date(d);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (forDisplay) return dd + "." + mm + "." + yyyy;
    return yyyy + "-" + mm + "-" + dd;
};

//Today
export const todayDate = () => {
    return formatDate(new Date());
};

export const addMonths = (value, d = "") => {
    if (!d) d = new Date();
    else d = new Date(d);
    let n = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + value);
    let res = d.setDate(Math.min(n, getDaysInMonth(d.getFullYear(), d.getMonth())));
    return res;
};

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = (year, month) => {
    return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

const daysBetween = (startDate, endDate) => {
    return Math.abs(new Date(endDate) - new Date(startDate)) / (24 * 60 * 60 * 1000);
};
