const week = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado'
};

const months = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre'
};

export function getFullDate(date = new Date()) {
  const day = week[date.getDay()];
  const month = months[date.getMonth() + 1];
  return `${day} ${date.getDate()} de ${month} del ${date.getFullYear()}`;
}

export function formatDate(date, format = 'dd/mm/yyyy', separator = '/') {
  const dateArray = date.split(separator);
  if (dateArray.length === 3) {
    const [one, two, three] = dateArray;
    switch (format) {
      case 'dd/mm/yyyy':
        return `${two}/${one}/${three}`;
      case 'mm/dd/yyyy':
        return `${one}/${two}/${three}`;
      default:
        return `${two}/${one}/${three}`;
    }
  }
  return getDate(new Date(), 'mm/dd/yyyy');
}

export function getDate(date = new Date(), format = 'dd/mm/yyyy', separator = '/') {
  switch (format) {
    case 'mm/dd/yyyy':
      return `${date.getMonth() + 1}${separator}${date.getDate()}${separator}${date.getFullYear()}`;
    case 'dd/mm/yyyy':
      return `${date.getDate()}${separator}${date.getMonth() + 1}${separator}${date.getFullYear()}`;
    default:
      return `${date.getMonth() + 1}${separator}${date.getDate()}${separator}${date.getFullYear()}`;
  }
}

export const getHour = (date = new Date()) => {
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
};

/*export default {
  getFullDate,
  getDate,
  getHour,
  formatDate
};*/