let huruf = "aaaaabbbcccddd";
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (let i = 0; i < huruf.length; i++) {
  if (huruf[i] == "a") {
    a++;
  } else if (huruf[i] == "b") {
    b++;
  } else if (huruf[i] == "c") {
    c++;
  } else if (huruf[i] == "d") {
    d++;
  }
}
console.log("jumlah huruf: " + "a" + a + "b" + b + "c" + c + "d" + d);
