document.getElementById("exportHtml").addEventListener("click", function () {
    const scanResults = document.body.innerHTML; // Capture all results
    const blob = new Blob([scanResults], { type: "text/html" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "scan-results.html";
    link.click();
});
