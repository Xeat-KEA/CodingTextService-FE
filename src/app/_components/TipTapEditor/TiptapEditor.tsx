import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useTiptapStore } from "@/app/stores";

export default function TiptapEditor() {
  const { setContent } = useTiptapStore();
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose px-5 py-4 focus:outline-none",
      },
    },
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Image.configure({ inline: true, allowBase64: true }),
    ],
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
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
