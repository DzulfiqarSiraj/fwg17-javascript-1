// Task Javascript Introduction
// Task 2
// Oct 24, 2023

const bahasaIndonesia = 95;
const mtk = 80;
const bahasaInggris = 85;
const ipa = 80;

let mataPelajaran = [bahasaIndonesia, mtk, bahasaInggris, ipa];
let nilai = 0;
for (let i = 0; i < mataPelajaran.length; i++) {
  nilai += mataPelajaran[i];
}

let rataRata = nilai / mataPelajaran.length;

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
