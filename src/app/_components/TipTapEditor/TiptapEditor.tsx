import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

export default function TiptapEditor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose px-5 py-4 focus:outline-none",
      },
    },
    extensions: [StarterKit],
    immediatelyRender: false,
  });

  return (
    <div className="flex flex-col w-full h-full border border-border-2 rounded-lg overflow-hidden">
      <ToolBar editor={editor} />
      <EditorContent
        className="w-full h-full overflow-y-scroll break-all"
        editor={editor}
        // 텍스트 에디터 내 공간 클릭 시 에디터로 focus 되게 설정
        onClick={() => editor?.commands.focus()}
      />
    </div>
  );
}
