import { create } from "zustand";
import { IChatStore, ITabStore } from "./_interfaces/interfaces";

// 채팅 설정 관련 전역변수
export const useChatStore = create<IChatStore>((set) => ({
  // 정답 여부만 확인 토글
  checkAnswerOnly: false,
  setCheckAnswerOnly: () =>
    set((state) => ({ checkAnswerOnly: !state.checkAnswerOnly })),
  // 코드와 함께 질문 토글
  sendWithCode: false,
  setSendWithCode: () =>
    set((state) => ({ sendWithCode: !state.sendWithCode })),
}));

// 탭바 메뉴 관련 전역변수
export const useTabStore = create<ITabStore>((set) => ({
  tab: "", // 현재 선택된 탭
  setTab: (newTab) => set({ tab: newTab }),
  selection: "", // 현재 선택된 Dropdown 항목,
  setSelection: (newSelection) => set({ selection: newSelection }),
}));
