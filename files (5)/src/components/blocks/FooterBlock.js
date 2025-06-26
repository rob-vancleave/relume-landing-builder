import EditableText from "../EditableText";

export default function FooterBlock({ data, onChange }) {
  return (
    <footer className="bg-gray-900 text-gray-200 p-6 rounded mt-8 text-center">
      <EditableText
        className="text-sm"
        text={data.text}
        onChange={(val) => onChange({ ...data, text: val })}
      />
    </footer>
  );
}