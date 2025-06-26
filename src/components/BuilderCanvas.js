import { useDrop } from "react-dnd";
import HeroBlock from "./blocks/HeroBlock";

export default function BuilderCanvas({ blocks, setBlocks, editBlock }) {
  const [{ isOver }, drop] = useDrop({
    accept: "BLOCK",
    drop: (item) => {
      setBlocks([...blocks, { type: item.type, data: item.defaultData }]);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div
      ref={drop}
      className={`min-h-[500px] bg-white border-2 border-dashed p-8 rounded ${isOver ? "border-blue-400" : ""}`}
      id="pdf-content"
    >
      {blocks.map((block, idx) => {
        if (block.type === "hero")
          return (
            <HeroBlock
              key={idx}
              data={block.data}
              onChange={data => editBlock(idx, data)}
            />
          );
        // Add more block types here
        return null;
      })}
    </div>
  );
}