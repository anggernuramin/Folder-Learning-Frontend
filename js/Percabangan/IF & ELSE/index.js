// percabangan if & else
// syntax
// //  if (kondisi){
// 	// aksi 1 <-- Lakukan aksi 1 jika kondisi bernilai true

// }else {
// 	aksi 2 <-- Lakuka aksi 2 jika kondisi pertama bernilai false
// }
// JIKA KONDISI SATU TERPENUHI MAKAN AKAN KELUAR DARI PERCABANGANNYA.

// program mencetak nilai ganjil dan genap dengan bantuan inputan dari user

// var angka = prompt('masukkan angka : ');
// // menggunakan prompt karena prompt mengembalikan nilai apapun

// if (angka % 2 === 0){
// 	alert(angka + ' adalah bilangan GENAP')
// }else{
// 	alert(angka + ' adalah bilangan GANJIL')
// }

// PROGRAM UNTUK MENAMPILKAN DATA ANGKOT
var noAngkot = 1;
var jmlAngkot = 15;
var angkotBeroperasi = 10

for ( noAngkot = noAngkot ; noAngkot <= jmlAngkot; noAngkot++){

	if ( noAngkot <= angkotBeroperasi){
		console.log('Angkot NO. ' + noAngkot + ' beroperasi dengan baik');

	}else {
		console.log('Angkot NO. ' + noAngkot + ' sedang tidak beroperasi');
	}
}



for (var i = 1; i <= 5; i++){
	console.log(i);
}
