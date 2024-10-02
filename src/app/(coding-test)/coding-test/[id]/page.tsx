"use client";

import { useTabStore } from "@/app/stores";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useState } from "react";
import {
  CODING_BUTTONS,
  CODING_TAB_BAR_MENU,
  dummyChats,
} from "../../_constants/constants";
import ChatInput from "../../_components/ChatInput";
import CodeEditor from "../../_components/CodeEditor";
import TabBar from "@/app/_components/TabBar";
import { PROGRAMMING_LANGUAGES } from "@/app/_constants/constants";

export default function CodingTestPage() {
  // 현재 탭 전역 변수
  const { tab } = useTabStore();

  // 문제 정답 여부
  const [hasSolved, setHasSolved] = useState(false);

  return (
    <Splitter
      className="w-full h-screen pt-16 flex"
      onResizeEnd={(event) => console.log("hi")}
    >
      {/* 채팅창 공간 */}
      <SplitterPanel className="bg-bg-1 flex flex-col">
        {/* 메세지 표시 공간 */}
        <div className="grow flex flex-col px-6 py-8 gap-6 overflow-y-scroll">
          {dummyChats.map((chat, index) => (
            <div
              key={index}
              className={`bubble ${
                chat.role === "gpt"
                  ? "bg-white text-black"
                  : "bg-primary text-white font-bold self-end"
              }`}
            >
              {chat.content}
            </div>
          ))}
        </div>
        {/* 채팅 입력칸 */}
        <div className="px-6 pb-8">
          <ChatInput />
        </div>
      </SplitterPanel>
      {/* 코드 관련 공간 */}
      <SplitterPanel className="flex flex-col px-6 py-8 gap-4">
        {/* 코드 에디터 */}
        <div className="flex h-full rounded-2xl overflow-hidden">
          <CodeEditor />
        </div>
        {/* 탭바 */}
        <TabBar
          menuList={CODING_TAB_BAR_MENU}
          dropDownList={PROGRAMMING_LANGUAGES}
        />
        {/* 컴파일러 / 메모장 */}
        <div className="w-full h-[200px] flex shrink-0 border border-border-2 rounded-2xl overflow-hidden">
          {/* 컴파일러 */}
          <div></div>
          {/* 메모장 */}
          <textarea
            className={`${
              tab === "메모장" ? "block" : "hidden"
            } w-full h-full px-4 py-3 text-black`}
          />
        </div>
        {/* 구분선 */}
        <div className="division" />
        {/* 하단 버튼 */}
        <div className="flex gap-4 self-end">
          {CODING_BUTTONS.map((btn, index) => (
            <button
              key={index}
              disabled={index === 0 && !hasSolved}
              className={`${
                index === CODING_BUTTONS.length - 1
                  ? "btn-primary"
                  : index !== 0
                  ? "btn-default"
                  : hasSolved
                  ? "btn-default"
                  : "btn-disabled"
              }`}
            >
              {btn.content}
            </button>
          ))}
        </div>
      </SplitterPanel>
    </Splitter>
  );
}
