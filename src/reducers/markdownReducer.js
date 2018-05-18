/*
** Datas
*/
import defaultValueMd from '../datas/defaultValueMd';

/**
 * Actions Types
 */
import { ADD_MARKDOWN_DATA } from '../actions/types';

export default (
  state = localStorage.getItem('markdown') || defaultValueMd,
  action
) => {
  switch (action.type) {
    case ADD_MARKDOWN_DATA:
      return action.payload || '';
    default:
      return state;
  }
};
