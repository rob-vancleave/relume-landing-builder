import React from "react";
import html2pdf from "html2pdf.js";

export default function ExportPDFButton() {
  const handleExport = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().from(element).save("page.pdf");
  };

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={handleExport}
    >
      Export as PDF
    </button>
  );
}