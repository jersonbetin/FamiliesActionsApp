export const OPEN_SNACK = 'OPEN_SNACK';
export const CLOSE_SNACK = 'CLOSE_SNACK';

export const openSnack = (message = '', type = 'success') => {
  return {
    type: OPEN_SNACK,
    payload: {
      type,
      message
    }
  };
}

export const closeSnack = () => {
  return {
    type: CLOSE_SNACK
  };
}