document.getElementById("run-button").addEventListener("click", runCode);

// Ctrl + Enter key functionality
document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      runCode();
    }
  });

// Tab key functionality
document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault();
      var textarea = event.target;
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      textarea.value =
        textarea.value.substring(0, start) +
        "\t" +
        textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  });

// Function to run the code
function runCode() {
  var code = document.getElementById("code-input").value;
  var iframe = document.getElementById("output-frame");
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  // Clear previous content
  iframeDocument.body.innerHTML = "";

  // Create a new HTML document inside the iframe
  var newDoc = iframeDocument.open();
  newDoc.write(code);
  newDoc.close();
}
