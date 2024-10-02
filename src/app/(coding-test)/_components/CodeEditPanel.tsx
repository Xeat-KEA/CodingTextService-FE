import TabBar from "@/app/_components/TabBar";
import CodeEditor from "./CodeEditor";
import { CODING_BUTTONS, CODING_TAB_BAR_MENU } from "../_constants/constants";
import { PROGRAMMING_LANGUAGES } from "@/app/_constants/constants";
import { useCodingTestStore, useTabStore } from "@/app/stores";

export default function CodeEditPanel() {
  // 현재 탭 전역 변수
  const { tab } = useTabStore();
  const { hasSolved, setHasSolved, setIsPosting } = useCodingTestStore();

  return (
    <div className="w-full flex flex-col px-6 py-8 gap-4">
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
        <button
          onClick={() => setIsPosting(true)}
          className={`${!hasSolved ? "btn-disabled" : "btn-default"}`}
          disabled={!hasSolved}
        >
          {CODING_BUTTONS[0].content}
        </button>
        <button onClick={() => {}} className="btn-default">
          {CODING_BUTTONS[1].content}
        </button>
        <button onClick={() => {}} className="btn-default">
          {CODING_BUTTONS[2].content}
        </button>
        <button onClick={() => setHasSolved(true)} className="btn-primary">
          {CODING_BUTTONS[3].content}
        </button>
      </div>
    </div>
  );
}
