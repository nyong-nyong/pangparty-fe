import { atom } from "recoil";

const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

const searchResultsState = atom({
  key: "searchResultsState",
  default: [],
});

const searchTypeState = atom({
  key: "searchTypeState",
  default: "event",
});

const searchHistoryState = atom({
  key: "searchHistoryState",
  default: [],
});

const searchHistoryIdState = atom({
  key: "searchHistoryIdState",
  default: 0,
});

const lastSearchState = atom({
  key: "lastSearchState",
  default: "",
});

export {
  searchTextState,
  searchResultsState,
  searchTypeState,
  searchHistoryState,
  searchHistoryIdState,
  lastSearchState,
};
