const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let backpackW = 0;
let count = 0;
let metals = [];

rl.on("line", (input) => {
  if (backpackW === 0 && count === 0) {
    backpackW = +input.split(" ")[0];
    count = +input.split(" ")[1];
  } else {
    metals.push(input);
  }

  if (count <= metals.length) {
    getMostExpensive();
  }
});

const getMostExpensive = () => {
  metals.sort(
    (a, b) =>
      b.split(" ")[1] / b.split(" ")[0] - a.split(" ")[1] / a.split(" ")[0]
  );

  let price = 0;
  let w = backpackW;

  for (let item of metals) {
    if (w <= 0) {
      return;
    }
    
    const itemW = +item.split(" ")[0];
    const itemPrice = +item.split(" ")[1];

    if (itemW > w) {
      price += w * itemPrice;
      w -= w;
    } else {
      price += itemW * itemPrice;
      w -= itemW;
    }

   
  }

  console.log(price);
};
