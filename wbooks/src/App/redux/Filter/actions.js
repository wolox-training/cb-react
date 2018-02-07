export const SET_FILTER = 'FILTER@@ SET_FILTER';

export const setFilter = (selection, text) => ({
  type: SET_FILTER,
  selection,
  text
});
