// Percabagan ELSE IF
// syntax

// if(kondisi1){
// 	// aksi1 <-Aksi 1 diajalankan jika kondisi 1 terpenuhi
// }else if(kondisi2){
// 	// aksi 2 <-- Aksi 2 dijalankan jika kondisi 2 terpenuhi
// }else{
// 	aksi3 <-- Aksi 3 dijalankan jika aksi1 da aksi2 bernilai false
// }

// // program mencari jenis kelamin
// var nama = prompt('masukkan nama :')
// var pil = prompt('masukkan jenis kelamin : \n1. laki-laki \n2. perempuan');
// var jkel1 = 'laki-laki';
// var jkel2 = 'perempuan';

// if (pil == 1){
// 	alert('jenis kelamin ' + nama + ' adalah : ' + jkel1);
// }else if ( pil == 2){
// 	alert('jenis kelamin ' + nama + ' adalah : ' + jkel2);
// }else {
// 	alert('Pilihan yang anda masukkan salah');
// }

// program angkot dengan menggunakan else if
var jmlAngkot = 15; 
var angkotBeroperasi = 9 ;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

	// menggunkaan operator && agar noANGKOT yg kedelapan tidak dieksekusi pada aksi1,
	// karena pada operator logika (&&) maka kedua kondisi harus bernilai TRUE
	if (noAngkot <= angkotBeroperasi && noAngkot !== 8){
		console.log('angkot No.' + noAngkot + ' beroperasi dengan baik');

	// Pada operator (||) OR,jika kondisi salah satu bernilai false, hasilnya tetap bernilai TRUE
	}else if (noAngkot === 8 || noAngkot === 12){
		console.log('angkot No. '+ noAngkot + ' sedang lembur');

	}else {
		console.log('angkot.' + noAngkot + ' sedang tidak beroperasi');
	}




}