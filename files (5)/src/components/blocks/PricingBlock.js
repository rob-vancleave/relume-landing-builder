import EditableText from "../EditableText";

export default function PricingBlock({ data, onChange }) {
  const updatePlan = (idx, key, val) => {
    const newPlans = [...data.plans];
    newPlans[idx][key] = val;
    onChange({ ...data, plans: newPlans });
  };

  return (
    <div className="bg-white rounded p-8 mb-8">
      <EditableText
        className="text-2xl font-bold mb-4"
        text={data.heading}
        onChange={(val) => onChange({ ...data, heading: val })}
      />
      <div className="flex flex-wrap gap-4 justify-center">
        {data.plans.map((plan, idx) => (
          <div key={idx} className="border rounded shadow p-6 w-64">
            <EditableText
              className="text-lg font-semibold"
              text={plan.name}
              onChange={(val) => updatePlan(idx, "name", val)}
            />
            <EditableText
              className="text-3xl font-bold my-2"
              text={plan.price}
              onChange={(val) => updatePlan(idx, "price", val)}
            />
            <EditableText
              className="text-sm text-gray-600"
              text={plan.description}
              onChange={(val) => updatePlan(idx, "description", val)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}