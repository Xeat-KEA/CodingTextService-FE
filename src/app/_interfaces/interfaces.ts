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
}

// 코딩테스트 관련 Interface
export interface ICodingTestStore {
  // 채팅 관련 state
  checkAnswerOnly: boolean;
  setCheckAnswerOnly: () => void;
  sendWithCode: boolean;
  setSendWithCode: () => void;
  // 코딩 관련 state
  language: string;
  setLanguage: (newLanguage: string) => void;
  hasSolved: boolean;
  setHasSolved: (isCorrect: boolean) => void;
  isPosting: boolean;
  setIsPosting: (state: boolean) => void;
}

export interface ICheckBoxIcon {
  isActive?: boolean;
}
