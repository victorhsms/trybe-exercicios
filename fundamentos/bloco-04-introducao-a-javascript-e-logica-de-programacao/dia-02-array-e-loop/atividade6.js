let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let primo = 0;

for (let number of numbers) {
  if (number % 2 === 0) {
    primo += 1;
  }
}

if (primo === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(`${primo} valores primos encontrados!`);
}
