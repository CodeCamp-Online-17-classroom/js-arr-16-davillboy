// write code here
function convertToCamelCase(text) {
  let words = text.split('-');

  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  return words.join('');
}

const dashedText = "background-color";
console.log(convertToCamelCase(dashedText)); // "backgroundColor"
