import React, { useState } from "react";

export default function EditableText({ text, onChange, className }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  return editing ? (
    <input
      className={className + " border rounded px-2 py-1"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        setEditing(false);
        onChange(value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setEditing(false);
          onChange(value);
        }
      }}
      autoFocus
    />
  ) : (
    <span
      className={className + " cursor-pointer"}
      onClick={() => setEditing(true)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") setEditing(true);
      }}
      style={{ outline: "none" }}
    >
      {text}
    </span>
  );
}