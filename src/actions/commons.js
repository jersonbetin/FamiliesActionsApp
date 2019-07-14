import { FILLIN_MOTHER_LEADER } from './types'

export const fillInMotherLeader = (data) => {
  return {
    type: FILLIN_MOTHER_LEADER,
    payload: data
  };
}