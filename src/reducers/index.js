/**
 * Packages
 */
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import markdownReducer from './markdownReducer';
import modalReducer from './modalReducer';
import markdownFileNameReducer from './markdownFileNameReducer';

export default combineReducers({
  markdown: markdownReducer,
  isModalOpen: modalReducer,
  markdownFileName: markdownFileNameReducer
});
