function pow(x,n) {
  for (let i = 0; i < n; i++) {
    x = x * x;
  }
  console.log(x);
}

let x = prompt("x:", '');
let n = prompt("pow:", '');

alert(pow(3,2));
