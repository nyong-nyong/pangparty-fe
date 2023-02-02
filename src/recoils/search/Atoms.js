import { atom } from 'recoil';

const searchTextState = atom({
  key: 'searchTextState',
  default: '',
});

const searchResultsState = atom({
  key: 'searchResultsState',
  default: [],
})

const searchTypeState = atom({
  key: 'searchTypeState',
  default: 'event',
})

export { searchTextState, searchResultsState, searchTypeState };