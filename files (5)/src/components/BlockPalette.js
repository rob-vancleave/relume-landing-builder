import React from "react";
import { useDrag } from "react-dnd";
import { Blog6Defaults } from "./blocks/Blog6";

function DraggableBlock({ type, label, defaultData }) {
  const [{ isDragging }, drag] = useDrag({
    type: "BLOCK",
    item: { type, defaultData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <button
      ref={drag}
      className={`mb-4 px-4 py-2 border rounded bg-gray-50 hover:bg-gray-200 block w-full text-left ${isDragging ? "opacity-50" : ""}`}
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
      <DraggableBlock
        type="cta"
        label="Call to Action"
        defaultData={{ ctaHeading: "Ready to start?", ctaText: "Sign up now to get instant access!", ctaButton: "Get Started" }}
      />
      <DraggableBlock
        type="features"
        label="Features"
        defaultData={{
          heading: "Our Features",
          features: ["Feature One", "Feature Two", "Feature Three"],
        }}
      />
      <DraggableBlock
        type="pricing"
        label="Pricing"
        defaultData={{
          heading: "Choose your plan",
          plans: [
            { name: "Basic", price: "$9/mo", description: "Basic features" },
            { name: "Pro", price: "$29/mo", description: "Advanced features" },
            { name: "Enterprise", price: "$99/mo", description: "All features" },
          ],
        }}
      />
      <DraggableBlock
        type="footer"
        label="Footer"
        defaultData={{ text: "© 2025 Your Company. All rights reserved." }}
      />
      <DraggableBlock
        type="blog6"
        label="Blog 6"
        defaultData={Blog6Defaults}
      />
    </div>
  );
}