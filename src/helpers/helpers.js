export const getRandomId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

export const parseDate = (date) => {
  const options = {
    timeZone: 'Europe/Moscow',
    hourCycle: 'h23',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleString('ru-Ru', options);
};

export const getBackgroundColor = (value) => {
  const color = {
    низкий: 'green',
    средний: 'gold',
    высокий: 'red',
    done: 'light-orange',
    '': 'light',
  };
  return color[value];
};

export const getDuration = (start, end) => {
  const startMsec = +new Date(start);
  const endMsec = +new Date(end);
  const result = endMsec - startMsec;

  let mins = Math.round(result / 60000);
  const hours = Math.floor(mins / 60);
  mins %= 60;
  return hours > 0 ? `${hours} ч. ${mins} мин.` : `${mins} мин.`;
};
