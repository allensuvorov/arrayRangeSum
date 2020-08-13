// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

function range(a, b, s=1) {
    let arr = [];
    arr.push(a);
    do {
      a = a + s;
      arr.push(a);
    } while (Math.abs(a-b) >= Math.abs(s));
    return arr;
  };
  
  // console.log(range(1, 10, 2));
  
  function sum(arr){
    return arr.reduce((total, item) => total + item, 0)
  }
  
  function fastSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    };
    return total;
  };
  
  function superFastSum(arr){
    let total = 0;
    for (let elem of arr){
      total += elem;
    }
    return total;
  }
  
  // arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  arr = range(1,10000000);
  console.time('method');
  console.log(sum(arr));
  console.timeEnd('method');
  
  console.time('fast sum');
  console.log(fastSum(arr));
  console.timeEnd('fast sum');
  
  console.time('super fast sum');
  console.log(superFastSum(arr));
  console.timeEnd('super fast sum');
  
  