// Rekursif
// 	Adalah sebuah fungsi yagng memanggil dirinya sendiri,
// 	Jika menggunakan rekursif pastikanhurus berakhir dan menghasilkan
// 	nilai (agar tida terjadi infinite loop/penglangan terus-menerus)

// 1. Base case
// 	kondisi akhir dari rekursif yang menghasilkan nilai
// 	Biasa menggunakan pengkondisian dan return
// 2. Implementasi rekursif
// 	a. menggatikan looping
// 	b. pencarian dan penelusuran datalist  dan tree

// contoh program rekursif menampilkan angka 1 - 10

var tampilAngka = function (n){

	// membuat base case
	if (n === 11) return;

	// agar setiap pengulanga menampilkan angka
	console.log(n)

	// memanggil rekursif
	return tampilAngka(n+1)
}

tampilAngka(1);

var n = 10;
for (i = n ; i > 0 ; i--){
	console.log(i)
}


// menghitung faktorial

var angka = function(n){
	var hasil = 1;
	for(i = n ;  i > 0 ; i-- ){
		hasil *= i;
	}
	return hasil;
}

console.log(angka(5))


var faktorial = function (angka){
	if ( angka === 0) return 1;
	// rekursif
	return angka * faktorial(angka-1);
}


console.log(faktorial(5))



















