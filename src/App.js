import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BlockPalette from "./components/BlockPalette";
import BuilderCanvas from "./components/BuilderCanvas";
import ExportPDFButton from "./components/ExportPDFButton";

function App() {
  const [blocks, setBlocks] = useState([]);

  const editBlock = (idx, newData) => {
    setBlocks(blocks.map((b, i) => (i === idx ? { ...b, data: newData } : b)));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-200 p-6">
          <BlockPalette />
        </aside>
        <main className="flex-1 flex flex-col items-center justify-start p-8">
          <ExportPDFButton />
          <BuilderCanvas blocks={blocks} setBlocks={setBlocks} editBlock={editBlock} />
        </main>
      </div>
    </DndProvider>
  );
}

export default App;