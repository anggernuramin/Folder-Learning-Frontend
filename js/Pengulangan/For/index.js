// Pengulangan for lebih rekomendasi,karena penulisan nilai
// 		awal,kondisi,dan (increment / decrement ) ditulis dalam satu baris

// program perulangan untuk membuat kondisi mobil angkot
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// jika menggunakan while
// while(noAngkot <= angkotBeroperasi){
	

// 	noAngkot++;
// }

// // for (noAngkot = noAngkot; noAngkot <= angkotBeroperasi; noAngkot++){
// // 	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
// // }

// // agar noAngkot mengikuti sisa dari angkot yang beroperasi,maka
// // angkoBeroperasi + 1, agar mendapatkan nilai setelahnya
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
	
// }

for(noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++){

	// noAngkot !== 5 agar statement dibawahnya terbaca
	// karena, 5 === 5 .
	// pada operator logika && maka statement-nya harus bernilai true semua
	if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');

	}else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
		console.log('Angkot No. ' + noAngkot +' sedang lembur');

	}else{
		console.log('Angkot No. ' + noAngkot +' sedang tidak beroperasi');
	}
}