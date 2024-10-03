import { FONT_SIZE } from "../_constants/constants";

export default function ToolBar() {
  return (
    <div id="toolbar-container" className="ql-toolbar">
      <span className="ql-formats w-16">
        <select className="ql-size" defaultValue="default">
          <option value="small">작게</option>
          <option value="default">보통</option>
          <option value="large">크게</option>
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-link"></button>
        <button className="ql-image"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
      </span>
    </div>
  );
}
