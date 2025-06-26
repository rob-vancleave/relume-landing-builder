import EditableText from "../EditableText";

export default function FeaturesBlock({ data, onChange }) {
  const updateFeature = (idx, val) => {
    const newFeatures = [...data.features];
    newFeatures[idx] = val;
    onChange({ ...data, features: newFeatures });
  };

  return (
    <div className="bg-gray-50 rounded p-8 mb-8">
      <EditableText
        className="text-2xl font-bold mb-4"
        text={data.heading}
        onChange={(val) => onChange({ ...data, heading: val })}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.features.map((f, idx) => (
          <EditableText
            key={idx}
            className="bg-white p-4 rounded shadow text-center"
            text={f}
            onChange={(val) => updateFeature(idx, val)}
          />
        ))}
      </div>
    </div>
  );
}