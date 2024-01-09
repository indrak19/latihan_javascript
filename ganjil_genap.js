let data = [1, 2, 3, 4, 5, 6, 7, 8];
let genap = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    genap.push("Genap");
  } else if (data[i] % 2 == 1) {
    genap.push(data[i]);
  }
}
console.log(genap);
