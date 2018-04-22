import {
  INCREMENT,
  DECREMENT
} from '../constants/counter'

import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

export function asyncInc () {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, 2000)
  }
}
