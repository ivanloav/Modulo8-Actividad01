function fetchData(callback) {
  setTimeout(() => {
    callback("datos");
  }, 1000);
}

function fetchPromiseData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("datos");
    }, 1000);
  });
}

module.exports = { fetchData, fetchPromiseData };
