// Function adalah
//  1. Sebuah sub program yang dapat dipanggil dibagian lain pada sebuah program
//  2. Disebut juga procedur (kumpulan statement untuk melakukan tugas atau menghitung
//     sebuah nilai)
// 3. Untuk dapat menggunakannya kita harus membuat function terlebih dahulu lalu memanggilnya

// // Fungction terdapat 2 kategori
//   1. build-in function ( fungction yang sudah disediakan oleh javascript)
//   misal : prompt,alert.random,confirm,log.
//   2. user-defined function (fungsi yang kita buat sendiri)

// contoh FUNGCTION DEKLARASI
// Yaitu fungsi yang kita buat dengan mendeklarasikan terlebih dahulu
function hitungPersegiPanjang (p,l,t){
  var hasil;
  hasil = p*l*t;
  return hasil;
}
console.log(hitungPersegiPanjang(3,3,3));

// contoh FUNGCTION EXPRESSION
// Yaitu fungsi yang disimpan dalam variabel.
var perkalian = function (a,b){
  var total ;
  total = a*b;
  return total;
}
console.log(perkalian(2,3,));

// membuat fungction dengan inputan user
function gajiPokok (gajiPerbulan , bonus){
  var gapok;
  gapok = gajiPerbulan + bonus;
  return gapok;
}

// VARIABEL PADA PROGRAM DAN FUNGCTION BERBEDA(JIKA PENULISAN VARIABEL SAMA SAAT PENDEKLARASIAN
    // PROGRAM TETAP BERJALAN);
var gajiPerbulan = parseInt(prompt('masukkan gaji per bulan : Rp. '));
var bonus = parseInt(prompt('masukkan bonus per bulan : Rp. '));

alert('Gaji yang anda peroleh selama satu bulan : Rp.' + gajiPokok(gajiPerbulan,bonus));

