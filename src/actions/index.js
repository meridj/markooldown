/**
 * Actions Types
 */
import {
  ADD_MARKDOWN_DATA,
  ADD_MARKDOWN_FILENAME,
  TOGGLE_MODAL
} from './types';

export const addMarkdownData = data => {
  localStorage.setItem('markdown', data);
  return {
    type: ADD_MARKDOWN_DATA,
    payload: data
  };
};

export const addMarkdownFileName = fileName => {
  localStorage.setItem('markdownFilename', fileName);
  return { type: ADD_MARKDOWN_FILENAME, payload: fileName };
};

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};
