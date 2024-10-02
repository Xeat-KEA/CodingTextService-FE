import { useState } from "react";
import { IDropDown } from "../_interfaces/interfaces";
import { ShowMoreIcon } from "./Icons";

export default function DropDown({
  isSmall,
  selection,
  list,
  onSelectionClick,
}: IDropDown) {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <div
      onClick={() => setIsListOpen((prev) => !prev)}
      className={`relative flex w-full bg-white border border-border-2 rounded-lg ${
        isSmall ? "px-2 py-[6px]" : "px-4 py-2"
      }`}
    >
      <div className={`${isListOpen && "rotate-180"}`}>
        <ShowMoreIcon />
      </div>
      <span className="grow flex justify-center text-xs text-black">
        {selection}
      </span>
      {isListOpen && (
        <ul className="absolute w-full left-0 top-[calc(100%+8px)] flex flex-col divide-y bg-white border border-border-2 rounded-lg shadow-1">
          {list.map((el, index) => (
            <li
              className={`w-full flex justify-center text-xs text-black ${
                isSmall ? "px-2 py-[6px]" : "px-4 py-2"
              }`}
              onClick={() => onSelectionClick(el)}
              key={index}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
