import { useState } from "react";
import { LgCheckBoxIcon } from "./Icons";
import TiptapEditor from "./TipTapEditor/TiptapEditor";

export default function PostEditor() {
  // 비밀글 여부 state
  const [isSecret, setIsSecret] = useState(false);

  return (
    <form className="w-full h-full flex flex-col gap-4">
      <div className="flex gap-4">
        {/* 제목 입력 */}
        <input className="grow post-input" placeholder="제목을 입력해주세요" />
        {/* 비밀글 여부 설정 */}
        <div className="flex w-[256px] items-center gap-4">
          <div
            onClick={() => setIsSecret((prev) => !prev)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <LgCheckBoxIcon isActive={isSecret} />
            <span className="text-sm text-black whitespace-nowrap">비밀글</span>
          </div>
          <input
            className="grow w-full post-input"
            placeholder="비밀번호를 입력해주세요"
            disabled={!isSecret}
          />
        </div>
      </div>
      {/* 텍스트 에디터 */}
      <TiptapEditor />
    </form>
  );
}
