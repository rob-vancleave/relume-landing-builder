import EditableText from "../EditableText";

export default function CTABlock({ data, onChange }) {
  return (
    <div className="bg-blue-600 text-white rounded p-8 flex flex-col items-center mb-8">
      <EditableText
        className="text-2xl font-bold mb-2"
        text={data.ctaHeading}
        onChange={(val) => onChange({ ...data, ctaHeading: val })}
      />
      <EditableText
        className="mb-4"
        text={data.ctaText}
        onChange={(val) => onChange({ ...data, ctaText: val })}
      />
      <EditableText
        className="bg-white text-blue-600 px-6 py-2 rounded shadow cursor-pointer"
        text={data.ctaButton}
        onChange={(val) => onChange({ ...data, ctaButton: val })}
      />
    </div>
  );
}