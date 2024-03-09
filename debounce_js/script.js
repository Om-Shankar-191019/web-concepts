const input = document.getElementById("getInput");
const output = document.getElementById("showOutput");

let displayDebouncedResult = debounce(function (e) {
  output.innerHTML = e.target.value;
}, 1000);

input.addEventListener("keyup", displayDebouncedResult);
// input.addEventListener(
//   "keyup",
//   debounce(function (e) {
//     output.innerHTML = e.target.value;
//   }, 1000)
// );

function debounce(fx, debounceTime) {
  let id = null;
  return function (e) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(fx, debounceTime, e);
  };
}
