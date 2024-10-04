import { IToolBar } from "@/app/_interfaces/interfaces";
import {
  BoldIcon,
  BulletListIcon,
  CodeBlockIcon,
  CodeIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  HorizontalRuleIcon,
  ItalicIcon,
  OrderedListIcon,
  StrikeIcon,
} from "./icons";

export default function ToolBar({ editor }: IToolBar) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-border-2 w-full h-[44px] shrink-0 overflow-x-auto relative">
      <div className="absolute top-0 left-0 flex items-center gap-4 p-2">
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`toolbar-btn ${editor.isActive("bold") && "is-active"}`}
          >
            <BoldIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`toolbar-btn ${
              editor.isActive("italic") && "is-active"
            }`}
          >
            <ItalicIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`toolbar-btn ${
              editor.isActive("strike") && "is-active"
            }`}
          >
            <StrikeIcon />
          </button>
        </div>
        <div className="w-[1px] h-[24px] bg-border-2" />
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleCode().run();
            }}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={`toolbar-btn ${editor.isActive("code") && "is-active"}`}
          >
            <CodeIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleCodeBlock().run();
            }}
            className={`toolbar-btn ${
              editor.isActive("codeBlock") && "is-active"
            }`}
          >
            <CodeBlockIcon />
          </button>
        </div>
        <div className="w-[1px] h-[24px] bg-border-2" />
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={`toolbar-btn ${
              editor.isActive("heading", { level: 1 }) && "is-active"
            }`}
          >
            <H1Icon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={`toolbar-btn ${
              editor.isActive("heading", { level: 2 }) && "is-active"
            }`}
          >
            <H2Icon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={`toolbar-btn ${
              editor.isActive("heading", { level: 3 }) && "is-active"
            }`}
          >
            <H3Icon />
          </button>
        </div>
        <div className="w-[1px] h-[24px] bg-border-2" />
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={`toolbar-btn ${
              editor.isActive("bulletList") && "is-active"
            }`}
          >
            <BulletListIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={`toolbar-btn ${
              editor.isActive("orderedList") && "is-active"
            }`}
          >
            <OrderedListIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setHorizontalRule().run();
            }}
            className="toolbar-btn"
          >
            <HorizontalRuleIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
