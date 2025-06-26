import React from "react";
import { useDrop } from "react-dnd";
import HeroBlock from "./blocks/HeroBlock";
import CTABlock from "./blocks/CTABlock";
import FeaturesBlock from "./blocks/FeaturesBlock";
import PricingBlock from "./blocks/PricingBlock";
import FooterBlock from "./blocks/FooterBlock";
import Blog6Block from "./blocks/Blog6Block";

export default function BuilderCanvas({ blocks, setBlocks, editBlock }) {
  const [{ isOver }, drop] = useDrop({
    accept: "BLOCK",
    drop: (item) => {
      setBlocks([...blocks, { type: item.type, data: item.defaultData }]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`min-h-[500px] bg-white border-2 border-dashed p-8 rounded ${isOver ? "border-blue-400" : ""}`}
      id="pdf-content"
    >
      {blocks.length === 0 && (
        <div className="text-gray-400 text-center">Drag blocks here to start building…</div>
      )}
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "hero":
            return (
              <HeroBlock
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          case "cta":
            return (
              <CTABlock
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          case "features":
            return (
              <FeaturesBlock
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          case "pricing":
            return (
              <PricingBlock
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          case "footer":
            return (
              <FooterBlock
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          case "blog6":
            return (
              <Blog6Block
                key={idx}
                data={block.data}
                onChange={(data) => editBlock(idx, data)}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}