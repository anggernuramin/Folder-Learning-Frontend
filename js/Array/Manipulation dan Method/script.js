// ARRAY
// 	ARRAY adalah sebuah variabel yang bisa menampung banyak nilai
// A. Kelebihan Array
//  a. Mempermudah pengelolaan nilai/value/data
//  b. Penelusuran dan pencarian
//  c. Manajemen memory
// B. Karakteristik Array
//   a. Variabel jamak,yang mempunyai banyak elemen dan diacu dengan nama variabel yang sama
//   b. kumpulan pasanga key (kunci) dan nilai
//   c. key adalah index pd array dengan tipe data integer yang dimulai dengan 0
//   d. array pada js bertipe OBJECT
//   e. array pd js memiliki fungsi/method.length untuk menghitung jumlah elemen array didalamnya
//   f. elemen pada array boleh memiliki tipe data yang berbeda
// syntax
//  var nama_array = [ elemen1, eleme2, elemen3, ..... elemenN];

// ELEMEN PADA ARRAY

// 1.Tipe data string
// var nama = ['ANGGER', 'Sandika', 'Nur' , 'Galih'];
// // output masih berbentuk object
// console.log(nama);

// // 2. Tipe data int
// var angka = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(angka)

// // 3. Tipe data berbeda
// var tes = ['teks', 1 , true];
// console.log(tes)

// // 4. Memasukkan function pada array
// // misal dengan function expression
// var tampil = function(nama){
// 	alert('Hello ' + nama);
// }
// var array = [1 , 'test', tampil('Angger')]
// console.log(array)

// // 5. Array Multidimensi (Array didalam Array)
// var ArrayMultidimensi = [1, 2 , 'test' , true , [1,2,3]];
// // memanggil angka 3
// console.log(ArrayMultidimensi[4] [2])
// console.log([array luar] [array didalam])


// MANIPULASI ARRAY
// A. Secara Manual (tdk menggunakan method)

// 1. Menambah isi array
	// var nama = [];
	// nama[0] = 'Azis';
	// nama[1] = 'Dahlan';
	// nama[2] = 'Kahfi';
	// nama[4] = 'Gua';
// jika kita salah memasukkan urutan index/ada index yang kelewat maka akan terjadi deklarasi undifined(variabel kosong).
//  console.log(nama);

// // 2. Menghapus isi Array ( index diset undifined)
// 	var nim = [21222 , 13323 ,2323 ,231];
// 	// menghapus nim 2323
// 	nim[2] = undefined;
// 	console.log(nim)

// // 3. Meanmpilka isi array ( dengan bantuan looping)
	// var hari =  ['Senin' ,'Selasa', 'Rabu' ,'Kamis', "Jum'at", 'Sabtu'];
	// for (var i = 0; i < hari.length ; i++){
	// 	console.log(hari[i]);
	// }

	// // menggunakan function expression
	// var tampil = function(hari = []){
	// 	return hari;
	// }

	// console.log(tampil(['Senin' ,'Selasa', 'Rabu' ,'Kamis', "Jum'at", 'Sabtu']));

// rekursif 1 -10
// var cetak = function(n){
// 	if (n == 11) return;
// 	console.log(n);
// 	return n + cetak(n+1);
// }
// cetak(1);



// METHOD PADA ARRAY 
// METHOD adalah function yang disediakan pd library js

// 1. length ==> untuk mengetahui panjang elemen pada sebuah array
// 2. join()
	// Menggabungka seluruh isi array dan mengubah menjadi STRING
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// // pegawai.join( isi character );
// console.log(pegawai.join( ' - '));

// 	3. Push
// 		Digunakan untuk menambah elemen terakhir pada array
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// pegawai.push (elment1, element2,......, elementN)
// pegawai.push('Angger' , 'Nur' , 'Amin')
// console.log(pegawai.join( ' - '));

 	// 4. pop
 	// 	Digunakan untuk menghapus/menghilangkan elemen terakhir pada sebuah array (secara permanent).
 // var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
 // // menghapus satu elemen
 // pegawai.pop();
 // console.log(pegawai.join(' - '))

 	// 5. unshift
 	// 	Digunakan untuk menambah elemen array diawal 
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// // pegawai.('namaElement1, namaElement2, .... N');
// pegawai.unshift('Sandhika' , 'Galih');
// console.log(pegawai.join(' - '))

// 	6. unshif
// 		Digunakan untk menghapus atau menghilangkan elemen awal pada array(secara permanent)
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// pegawai.shift();
// console.log(pegawai.join(' - '))

// 	7. slice
// 		Digunakan jika kita mengambil bebrapa bagian/element pada array,untuk menjadi array yang baru
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// console.log(pegawai.join(' . '))

// pegawaiBaru.slice(index awal , index akhir)
// var pegawaiBaru = pegawai.slice(0,3);
// console.log(pegawaiBaru.join(' . '))

	// 8. splice
	// 	Digunakan untuk menyisipkan element array ditengah
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// pegawai.splice(index awal (awal index untuk menyisipkan elemen baru) , mau dihapus berapa elemen, elementbaru1, elementbaru2, ..... n);
// pegawai.splice(1, 0 ,'Bahar' , 'Kamal' ,'Komar');
// console.log(pegawai.join(' - '))

// menghapus element lalu mengganti dengan elemen baru
// jika mengahpus maka,element setelahnya yag akan dihapus
// pegawai.splice(2,2, 'Adi' , 'Azaru,' ,'Kiron')
// console.log(pegawai.join(' - '))
	
	// 10. forEach()
	// 	Digunakan untuk melooping/mengulang pada element array
// var pegawai = ['Adam' ,'Nizam' ,'Zidat' ,'Rendi'];
// cara bacanya adalah : untuk setiap (forEach) elemen pada array lakukan fungsi berikut ini
// parameter e digunakan untuk mengambil element pd array
// parameter i digunakan untuk mengambil indexnya
// element pegawai akan otomatis diambil secara satu persatu
// var cetak = pegawai.forEach(function ( e ,i  ){
// 	console.log( e + ' Mahasiswa ke- : ' + (i+1));
// })   
// cetak(pegawai)

	// 11. map
	// 	Digunakan untuk looping pd elemen Array ,TETAPI MENGEMBALIKAN ARRAY(dpt mengakses return)

// membutuhkan variabel baru untuk menampung return dari method map()
// var angka = [ 1 , 2, 3 , 4, 5, 6];
// var angka1 = angka.map(function (e ){
	// setiap pengulangan akan dikalikan 2
// 	return e * 2;
// })
// console.log(angka1.join(' - '))

	// 11. sort()
	// 	Digunakan untuk mengurutkan elemen array
// var angka = [ 1, 5, 100, 2, 300, 6, 4, 8, 3, 10, 9,7];
// tidak membutuhkan variabel baru
// angka.sort( function (a,b){ 
// 	return b-a;
// 	// return a-b (digunakan untuk urutan ascending (kecil - besar))
// 	// return b-a (digunakan untuk discanding (besar - kecil))
// });

// console.log(angka.join(' - '))

	// 12. filter()
	// 	Digunakan untuk mencari element pada array dan MENGEMBALIKAN BANYAK NILAI ke dalam BENTUK ARRAY
// var angka = [ 1, 5, 100, 2, 300, 6, 4, 8, 3, 10, 9,7];
// // membutuhkan variabel baru untuk menampung nilai array yang baru
// var angkaBaru = angka.filter(function ( e ){
// 	return e > 7;
// })

// // sorting
// angkaBaru.sort( function (a,b){
// 		return a-b;
// 	})
// console.log(angkaBaru.join(' - '))

	// 13. find()
	// 	Digunakan untuk mencari elemen pada array tetapi HANYA MENGEMBALIKAN 1 NILAI YANG PERTAMA KALI DITEMUKAN dan method find( tifa menghasilkan array )

var angka = [ 1, 5, 100, 2, 300, 6, 4, 8, 3, 10, 9,7];
var angkaBaru = angka.find( function ( e ){
	return e > 7;
})

// tidak bisa menggunakan method join() karena hasilnya bukan array,TETAPI NUMBER
console.log(angkaBaru)
// MAKA output-nya adalah 100,karena angka yang lebih besar dari 7 YANG PERTAMA KALI DITEMUKAN ADALAH ANGKA 100

var kolom = prompt('input jumlah kolom : ');
var baris = prompt('input jumlah baris : ')
var s = '';
for (var i = 0 ; i < kolom ; i++){
	for(var j = 0 ; j < baris ; j++){
		// s += ' * ' ;
		if ( j % 2 == 0){
			s += ' X '
		}else{
			s = s + ' 0 '
		}
	}
	// kolom
		s += '\n';
}
  alert(s);



































































































































































