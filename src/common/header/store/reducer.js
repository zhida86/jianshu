import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable 库
// 帮助生成 immutable 对象

const defaultState = fromJS({
  focused: false
});

const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state;
}

export default reducer;