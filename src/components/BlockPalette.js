import { useDrag } from "react-dnd";

function DraggableBlock({ type, label, defaultData }) {
  const [{ isDragging }, drag] = useDrag({
    type: "BLOCK",
    item: { type, defaultData },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  });

  return (
    <button
      ref={drag}
      className={`mb-4 px-4 py-2 border rounded bg-gray-50 hover:bg-gray-200 ${isDragging ? "opacity-50" : ""}`}
    >
      {label}
    </button>
  );
}

export default function BlockPalette() {
  return (
    <div>
      <h2 className="font-bold mb-4">Blocks</h2>
      <DraggableBlock
        type="hero"
        label="Hero"
        defaultData={{ heading: "Your Heading", subheading: "Your subheading" }}
      />
      {/* Add more DraggableBlock entries for different block types */}
    </div>
  );
}