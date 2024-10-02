import { create } from "zustand";
import { ICodingTestStore, ITabStore } from "./_interfaces/interfaces";

// 코딩테스트 관련 전역변수
export const useCodingTestStore = create<ICodingTestStore>((set) => ({
  // 채팅 관련 전역변수
  // 정답 여부만 확인 토글
  checkAnswerOnly: false,
  setCheckAnswerOnly: () =>
    set((state) => ({ checkAnswerOnly: !state.checkAnswerOnly })),
  // 코드와 함께 질문 토글
  sendWithCode: false,
  setSendWithCode: () =>
    set((state) => ({ sendWithCode: !state.sendWithCode })),

  // 코딩 관련 전역변수
  // 언어 설정
  language: "",
  setLanguage: (newLanguage) => set({ language: newLanguage }),
  // 정답 제출 여부
  hasSolved: false,
  setHasSolved: (isCorrect) => set({ hasSolved: isCorrect }),
  // 글 쓰기 여부
  isPosting: false,
  setIsPosting: (state) => set({ isPosting: state }),
}));

// 탭바 메뉴 관련 전역변수
export const useTabStore = create<ITabStore>((set) => ({
  tab: "", // 현재 선택된 탭
  setTab: (newTab) => set({ tab: newTab }),
}));
