import EditableText from "../EditableText";

export default function HeroBlock({ data, onChange }) {
  return (
    <div className="bg-gray-100 p-8 rounded text-center">
      <EditableText
        className="text-4xl font-bold"
        text={data.heading}
        onChange={val => onChange({ ...data, heading: val })}
      />
      <EditableText
        className="block mt-4 text-lg"
        text={data.subheading}
        onChange={val => onChange({ ...data, subheading: val })}
      />
    </div>
  );
}