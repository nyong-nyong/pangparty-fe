import { atom } from 'recoil';

const searchTextState = atom({
  key: 'searchTextState',
  default: '',
});

const searchResultsState = atom({
  key: 'searchResultsState',
  default: {},
})

export { searchTextState, searchResultsState };