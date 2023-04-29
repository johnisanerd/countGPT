const textInput = document.getElementById("text-input");
const tokenRatio = document.getElementById("token-ratio");
const toggleModel = document.getElementById("toggle-model");
const copyButton = document.getElementById("copy-button");
const clipButton = document.getElementById("clip-button");
const removeExcessButton = document.getElementById("remove-whitespace-button");
let model = "GPT-3.5";
let maxTokens = 500;

toggleModel.addEventListener("click", function() {
  if (model === "GPT-3.5") {
    model = "GPT-4";
    toggleModel.innerHTML = "GPT-4";
    maxTokens = 3000;
  } else {
    model = "GPT-3.5";
    toggleModel.innerHTML = "GPT-3.5";
    maxTokens = 500;
  }
  updateTokenRatio();
});

textInput.addEventListener("input", function() {
  updateTokenRatio();
});

copyButton.innerHTML = "Copy to Clipboard";
copyButton.addEventListener("click", function() {
  textInput.select();
  document.execCommand("copy");
});

clipButton.innerHTML = "Clip Text";
clipButton.addEventListener("click", function() {
  const text = textInput.value;
  const tokens = text.split(" ");
  if (tokens.length > maxTokens) {
    textInput.value = tokens.slice(0, maxTokens).join(" ");
  }
  updateTokenRatio();
});

removeExcessButton.innerHTML = "Remove Excess Whitespace";
removeExcessButton.addEventListener("click", function() {
  let text = textInput.value;
  text = text.replace(/(?<!\n)\s+/g, " "); // Replace multiple spaces with single space, excluding new lines
  text = text.replace(/\n\s+/g, "\n"); // Replace spaces followed by new line with just a new line
  textInput.value = text;
  updateTokenRatio();
});

function updateTokenRatio() {
  const text = textInput.value;
  const tokens = text.split(" ");
  tokenRatio.innerHTML = `Token Ratio: ${tokens.length}/${maxTokens}`;
}
