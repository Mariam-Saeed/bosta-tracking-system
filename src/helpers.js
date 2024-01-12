const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date(date);

  const month = months[d.getMonth()];
  const day = days[d.getDay()];

  const dayNo = d.getDate();
  const monthNo = d.getMonth() + 1;
  const yearNo = d.getFullYear();

  const formatedDate = `${dayNo < 10 ? '0' + dayNo : '' + dayNo}/${
    monthNo < 10 ? '0' + monthNo : '' + monthNo
  }/${yearNo}`;

  return { month, day, formatedDate };
};

export { formatDate };
