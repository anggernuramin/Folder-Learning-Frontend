// TIMING EVENT
// 	EVENT pada js yang digunakan untuk mengatur/menjalankan kode pada program yang kita dapat memanipulasi waktunya kapan  program dijalankan.
// 	Terdapat dua fungsi pada timing event ( keduanya merupakan object window.)
// 1. setTimeout()
// 	Digunakan saat kita menjalankan kode program tetapi kita tidak menampilkan hasil ke layar secara langsung,Akan tetapi kita menunggu beberapa waktu tertentu
// 2. setInteval()
// 	Digunakan untuk melakukan sesuatu secara berulang-ulang,dengan interval waktu tertentu

// 	setInterval() dan setTimeout() KEDUANYA MEMPUNYA SATUAN MILISECOND PADA SAAT MENENTUKAN WAKTU.
// 3. clearTimeout()
// 	Digunakan untuk memberhentikan setTimeout() ditengah-tengah dan aksi pada fungsi timeout() tidak dijalankan.
// 4.clearInterval()
// 	Digunakan untuk memberhentikan setInteval() agar setInterval() tidak melakukan terus menerus.

// 1. contoh penggunaa setTimeout().
// const tes =  setTimeout(function(){
// 	console.log('okey')
// }, 5000) 
// // artinya program akan dijalankan setelah menunggu dua detik lamanya.

// // 1a. penggunaan clearTimeout();
// // biasanya menggunakan bantuan button untuk memberhentikannya.

// const button = document.getElementById('button');
// button.addEventListener('click', function(){

// 	clearTimeout(tes);
// 	// jika menggunakan method ini,maka aksi pada setTimeout() tidak akan dijalankan.
// 	console.log('tes dihentikan')
// });

// 2. setInterval()
// const tes = setInterval(function(){
// 	console.log('say hii');
// },1000);

// const button = document.getElementById('button');
// button.addEventListener('click', function(){
// 	clearInterval(tes);
// 	// jika menggunakan method ini,maka aksi pada setInterval() tidak akan dijalankan.
// 	console.log('tes dihentikan');
// });

	// 2. tentukan waktu tujuan dengan memberi format string pada new Date
		const waktuTujuan = new Date('Nov 21,2022 12:02:20').getTime();


// gunakan setInterval untuk menjalankan terus menerus dalam waktu 1 detik,agar detik dalam waktu (layar) akan ikut berubah.



const hitungWaktu = setInterval(function(){
			// Program hitung hari jam menit detik secara mundur
		// 1. tentukan hari sekarang dengan bantuan fungsi new date() dan .getTime () untuk memperole angka
		const waktuSekarang = new Date().getTime();
	
	
		// 3. hitung selisih waktu tujuan - waktu sekarang untuk mengetahui kurang berapa jam dari waktu sekarang ke waktu tujuan
		const selisih = waktuTujuan - waktuSekarang;



		// hitung hari format hari ( 1000 ( 1 detik) * 60 ( 1 menit) * 60 ( 1 jam) * 24 ( 24 jam dalam sehari));
		// gunakan fungsi Math.floor() untuk membulatka nilai desimal ke bulat dengan kebawah.
		const hari = Math.floor(selisih / ( 1000 * 60 * 60 * 24));

		// hitung jam dengan modulus sisa bagi antara 1 hari / 1 jam
		const jam =Math.floor(selisih % (1000 * 60 * 60 * 24) / ( 1000 * 60 *60));

		// hitung menit dalam satu jam / dengan 1 menit
		const menit =Math.floor( selisih % (1000 * 60 * 60 ) / ( 1000 * 60));

		// hitung detik dalam satu menit / 1 detik
		const detik =Math.floor( selisih % ( 1000 * 60) / 1000);

		// 4. tangkap elemen html
		const teks = document.querySelector('.teks');
		teks.innerHTML = ('Waktu anda tersisa : ' + hari + ' hari ' + jam +' jam ' + menit +' menit ' + detik +' detik lagi');



		// memberhentikan set interval dengan clearInterval dengan detik == 0 ,
		if (hari == -1 && jam == -1 && menit== -1 && detik == 0){
			clearInterval(hitungWaktu)
			teks.innerHTML = 'Waktu anda habis';
		}

		// untuk menghentikan jika halaman diload ulang
		if ( hari == -1 && jam  == eth-1 && menit == -1 && detik == -1){
			clearInterval(hitungWaktu)
			teks.innerHTML = 'Waktu anda sudah terlewat'
		}
		if ( hari == 0 && jam  == 0 && menit == -1 && detik == -1){
			clearInterval(hitungWaktu)
			teks.innerHTML = 'Waktu anda sudah terlewat'
		}

},1000);














