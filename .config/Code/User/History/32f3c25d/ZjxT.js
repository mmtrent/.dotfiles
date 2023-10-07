function pow(x,n) {
  for (let i = 0; i < n; i++) {
    x = x * x;
  }
  console.log(x);
}

pow(3,2);
