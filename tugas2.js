// Task Javascript Introduction
// Task 2
// Oct 24, 2023

const bahasaIndonesia = 95;
const mtk = 90;
const bahasaInggris = 90;
const ipa = 99;

let rataRata = (bahasaIndonesia + mtk + bahasaInggris + ipa) / 4;

if (rataRata >= 90) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = A`);
} else if (rataRata < 90 || rataRata >= 80) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = B`);
} else if (rataRata < 80 || rataRata >= 70) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = C`);
} else if (rataRata < 70 || rataRata >= 69) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = D`);
} else {
  console.log(`Rata-rata  = ${rataRata}
  Grade = E`);
}
