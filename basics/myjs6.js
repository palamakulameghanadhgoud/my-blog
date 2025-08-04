let a1 = [['a', 'b', 'c'], ['A', 'B', 'C']];
let a = a1;
a1[0][0] = 'yash';
a3 = Object.assign([], a1);
a3 = structuredClone(a1);
a3[0][0] = 'yashwanth';
console.log(a1); 
console.log(a3);
