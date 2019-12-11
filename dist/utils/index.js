export var spongeBobText = function spongeBobText(text) {
  var newText = '';
  text.split('').forEach(function (str, index) {
    newText += index % 2 === 0 ? str.toLowerCase() : str.toUpperCase();
  });
  return newText;
};