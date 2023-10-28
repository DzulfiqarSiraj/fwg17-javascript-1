// Task Javascript Introduction
// Task 3
// Oct 24, 2023

let printSegitiga = 5;
if(typeof printSegitiga != 'number'){
  console.log('Input harus berupa angka')
}

for (let i = printSegitiga; i > 0; i--) {
  let result = ""; //concatenation
  for (let j = 1; j <= i; j++) {
    result += j;
  }
  console.log(result);
}
