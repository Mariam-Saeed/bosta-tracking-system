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
    'WednesDay',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date(date);

  let month = months[d.getMonth()];
  let day = days[d.getDay()];

  const formatedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  return { month, day, formatedDate };
};

export { formatDate };
