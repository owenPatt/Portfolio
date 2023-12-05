const downloadPDF = () => {
  const filename = "Resume.pdf";

  const link = document.createElement("a");
  link.href = "./Resume.pdf";
  link.download = filename;

  document.body.appendChild(link);

  link.click();
  console.log("Downloaded");
};

export default downloadPDF;
