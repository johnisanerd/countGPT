const textInput = document.getElementById("text-input");
const tokenCount = document.getElementById("token-count");
const tokenRatio = document.getElementById("token-ratio");
const toggleModel = document.getElementById("toggle-model");
const copyButton = document.createElement("button");
const clipButton = document.createElement("button");
const removeExcessButton = document.createElement("button");
let model = "GPT-3.5";
let maxTokens = 0;

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
  updateTokenCount();
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
  updateTokenCount();
  updateTokenRatio();
});

removeExcessButton.innerHTML = "Remove Excess Whitespace";
removeExcessButton.addEventListener("click", function() {
  let text = textInput.value;
  text = text.replace(/\s{2,}/g, " ");
  text = text.replace(/\n{2,}/g, "\n");
  textInput.value = text;
  updateTokenCount();
  updateTokenRatio();
});

document.body.appendChild(copyButton);
document.body.appendChild(clipButton);
document.body.appendChild(removeExcessButton);

function updateTokenCount() {
  const text = textInput.value;
  const tokens = text.split(" ");
  tokenCount.innerHTML = `Token Count: ${tokens.length}`;
}

function updateTokenRatio() {
  const text = textInput.value;
  const tokens = text.split(" ");
  tokenRatio.innerHTML = `Token Ratio: ${tokens.length}/${maxTokens}`;
}
