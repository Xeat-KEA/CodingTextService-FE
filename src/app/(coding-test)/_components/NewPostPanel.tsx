import TabBar from "@/app/_components/TabBar";
import { POSTING_TAB_BAR_MENU } from "../_constants/constants";
import { useTabStore } from "@/app/stores";
import PostEditor from "@/app/_components/PostEditor";

export default function NewPostPanel() {
  const { tab } = useTabStore();
  return (
    <div className="w-full flex flex-col px-6 pt-4 pb-8 gap-4">
      {/* 탭바 */}
      <TabBar menuList={POSTING_TAB_BAR_MENU} />
      {/* 컴파일러 / 메모장 */}
      <div className="w-full grow flex shrink-0 border border-border-2 rounded-2xl overflow-hidden">
        {/* 컴파일러 */}
        <div></div>
        {/* 메모장 */}
        <textarea
          className={`${
            tab === "메모장" ? "block" : "hidden"
          } w-full h-full px-4 py-3 text-black`}
        />
      </div>
      <div className="division" />
      {/* 새 게시글 내용 작성 */}
      <PostEditor />
      <div className="division" />
      {/* 하단 버튼 */}
      <div className="flex gap-4 self-end">
        <button onClick={() => {}} className="btn-default">
          취소
        </button>
        <button onClick={() => {}} className="btn-primary">
          새 게시글 등록
        </button>
      </div>
    </div>
  );
}
