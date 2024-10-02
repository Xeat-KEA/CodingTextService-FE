export interface ITopBar {
  isLoggedIn?: boolean;
  isCodingPage?: boolean;
  hasNewNotice?: boolean;
}

export interface ISearchBar {
  isSmall?: boolean;
}

export interface ITabBar {
  menuList: string[];
  dropDownList?: string[];
}

export interface IToggleBtn {
  content: string;
  state: boolean;
  onClick: () => void;
}

export interface IDropDown {
  isSmall?: boolean;
  selection: string;
  onSelectionClick: (selected: string) => void;
  list: string[];
}

// 전역 변수 관련 Interface
export interface ITabStore {
  tab: string;
  setTab: (newTab: string) => void;
  selection: string;
  setSelection: (newSelection: string) => void;
}

export interface IChatStore {
  checkAnswerOnly: boolean;
  setCheckAnswerOnly: () => void;
  sendWithCode: boolean;
  setSendWithCode: () => void;
}
