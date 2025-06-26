import React, { useState } from "react";

export default function EditableText({ text, onChange, className }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleBlur = () => {
    setEditing(false);
    onChange(value);
  };

  return editing ? (
    <input
      className={className}
      value={value}
      autoFocus
      onChange={e => setValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={e => { if (e.key === "Enter") handleBlur(); }}
    />
  ) : (
    <span className={className} onClick={() => setEditing(true)}>
      {value}
    </span>
  );
}