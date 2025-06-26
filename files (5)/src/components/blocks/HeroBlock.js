import EditableText from "../EditableText";

export default function HeroBlock({ data, onChange }) {
  return (
    <section className="bg-blue-100 rounded p-8 mb-8 text-center">
      <EditableText
        className="text-4xl font-bold mb-2"
        text={data.heading}
        onChange={(val) => onChange({ ...data, heading: val })}
      />
      <EditableText
        className="text-lg text-gray-700"
        text={data.subheading}
        onChange={(val) => onChange({ ...data, subheading: val })}
      />
    </section>
  );
}