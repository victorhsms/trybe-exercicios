let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total/numbers.length);
