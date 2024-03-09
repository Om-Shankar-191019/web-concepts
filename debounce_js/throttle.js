function showNum(num) {
  console.log("my num : ", num);
}

function throttle(fx, throttleTime) {
  let args = [];
  let id = null;
  return function (num) {
    args[0] = num;
    if (!id) {
      id = setTimeout(() => {
        fx(args[0]);
        id = null;
      }, throttleTime);
    }
  };
}

// let throttleNum = throttle(showNum, 2000);
// setTimeout(throttleNum, 1000, 1);
// setTimeout(throttleNum, 2200, 2);
// setTimeout(throttleNum, 2800, 3);
// setTimeout(throttleNum, 4000, 4);

document.addEventListener(
  "scroll",
  throttle(function (e) {
    console.log("1");
  }, 600)
);
