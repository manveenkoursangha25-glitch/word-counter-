const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", function () {
    let text = textInput.value;

    // Character count (including spaces)
    charCount.textContent = text.length;

    // Word count logic
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
});