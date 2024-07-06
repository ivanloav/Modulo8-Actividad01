function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function longitud(str) {
  return str.length;
}

function suma(a, b) {
  return a + b;
}

function elementoEnArray(arr, el) {
  return arr.includes(el);
}

module.exports = {
  isUpperCase,
  isLowerCase,
  longitud,
  suma,
  elementoEnArray,
};
