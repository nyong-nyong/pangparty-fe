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

export {
  searchTextState,
  searchResultsState,
  searchTypeState,
  searchHistoryState,
};
