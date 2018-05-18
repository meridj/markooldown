/**
 * Actions Types
 */
import { ADD_MARKDOWN_FILENAME } from '../actions/types';

export default (
  state = localStorage.getItem('markdownFilename') || 'markooldown.md',
  action
) => {
  switch (action.type) {
    case ADD_MARKDOWN_FILENAME:
      return action.payload;
    default:
      return state;
  }
};
