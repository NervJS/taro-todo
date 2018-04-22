import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../constants/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  }
}, {
  num: 0
})
