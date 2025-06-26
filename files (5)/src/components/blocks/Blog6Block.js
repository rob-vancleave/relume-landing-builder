import React from "react";
import { Blog6, Blog6Defaults } from "./Blog6";
import EditableText from "../EditableText";

export default function Blog6Block({ data, onChange }) {
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
      description={
        <EditableText
          text={data.description ?? Blog6Defaults.description}
          onChange={(val) => onChange({ ...data, description: val })}
          className="md:text-md"
        />
      }
      tagline={
        <EditableText
          text={data.tagline ?? Blog6Defaults.tagline}
          onChange={(val) => onChange({ ...data, tagline: val })}
          className="mb-3 font-semibold md:mb-4"
        />
      }
    />
  );
}