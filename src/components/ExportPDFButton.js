import html2pdf from "html2pdf.js";

export default function ExportPDFButton() {
  const handleExport = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().from(element).save("landing-page.pdf");
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Export as PDF
    </button>
  );
}