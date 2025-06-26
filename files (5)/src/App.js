import React, { useState } from "react";
import BlockPalette from "./components/BlockPalette";
import BuilderCanvas from "./components/BuilderCanvas";
import ExportPDFButton from "./components/ExportPDFButton";

export default function App() {
  const [blocks, setBlocks] = useState([]);
  const editBlock = (idx, data) => {
    setBlocks((prev) => prev.map((b, i) => (i === idx ? { ...b, data } : b)));
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white shadow p-6">
        <BlockPalette />
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <BuilderCanvas blocks={blocks} setBlocks={setBlocks} editBlock={editBlock} />
          <div className="mt-8 flex justify-end">
            <ExportPDFButton />
          </div>
        </div>
      </main>
    </div>
  );
}