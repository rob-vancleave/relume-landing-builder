import React from "react";
import { Blog6, Blog6Defaults, Blog6Props } from "./Blog6"; // Adjust import path as needed

// Optionally, make certain fields editable (for inline editing, see below)
import EditableText from "../EditableText";

// This wrapper allows you to plug Blog6 into your builder logic
export default function Blog6Block({
  data,
  onChange,
}: {
  data: Partial<Blog6Props>;
  onChange: (newData: Partial<Blog6Props>) => void;
}) {
  // Example: Make heading editable. You can expand this pattern for other fields.
  return (
    <Blog6
      {...Blog6Defaults}
      {...data}
      heading={
        <EditableText
          text={data.heading ?? Blog6Defaults.heading}
          onChange={(val) => onChange({ ...data, heading: val })}
          className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl"
        />
      }
      // You can make other fields editable using similar pattern
    />
  );
}