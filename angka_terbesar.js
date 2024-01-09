let data = [1, 4, 5, 12, 3, 4, 19];
let terbesar = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] > terbesar) {
    terbesar = data[i];
  }
}
console.log("Nilai Terbesar:", terbesar);
