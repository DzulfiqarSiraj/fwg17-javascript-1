// Task Javascript Introduction
// Task 2
// Oct 24, 2023

const bahasaIndonesia = 95;
const mtk = 90;
const bahasaInggris = 85;
const ipa = 100;

let mataPelajaran = [bahasaIndonesia, mtk, bahasaInggris, ipa];
let nilai = 0;
for (let i = 0; i < mataPelajaran.length; i++) {
  if(typeof mataPelajaran[i] !== "number"){
    console.log(`nilai ke-${i+1} bukan berupa angka. Input harus berupa angka`)
    return
  }

  if(mataPelajaran[i] > 100 || mataPelajaran[i] < 0){
    console.log(`Input nilai ke-${i+1} melewati batas tertinggi atau batas terendah (batas tertinggi = 100, batas terendah = 0)`)
    return
  }

  nilai += mataPelajaran[i];
}

let rataRata = nilai / mataPelajaran.length;


if (rataRata <= 100 && rataRata >= 90) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = A`);
} else if (rataRata < 90 && rataRata >= 80) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = B`);
} else if (rataRata < 80 && rataRata >= 70) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = C`);
} else if (rataRata < 70 && rataRata >= 69) {
  console.log(`Rata-rata  = ${rataRata}
  Grade = D`);
} else {
  console.log(`Rata-rata  = ${rataRata}
  Grade = E`);
}
