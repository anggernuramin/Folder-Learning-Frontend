// OBJECT pd Javascript
	// Object adalah variabel yang mempunyai banyak nilai dan memiliki nama & tidak memiliki index

// Anatomy (susunan) pada object
var mhs = {
	// PROPERTY = VARIABEL YANG ADA PADA OBJECT
  // nama : 'Angger',
  // nim : 2120187,
  // prodi : 'TekniK Informastika',
  // ips : [ 3.88 , 3.99 , 4.00 , 4.00],


  // METHOD = FUNCTION YANG ADA PADA OBJECT
  // ipk : function () {
  //   var total = 0;
  //   var ipSemester = this.ips;
  //   for ( var i = 0 ; i < ipSemester.length ; i++){
  //     total += ipSemester[i]
  //   }
  //   return total/ipSemester.length;
  // }


// DALAM OBJECT TIDAK BOLEH ADA FUNCTION DAN OBJECT BARU SECARA BERSAMAAN
  // alamat : {
  //   kota : 'Blitar',
  //   provinsi : 'Jawa Timur'
  // }
};


// CARA MEMBUAT OBJECT
// 1.	Object Literal
// 		syntax
	// 	var dosen = {
	// 		nama : 'Vindi',
	// 		umur : 35,

	// 		// object didalam object
	// 		alamat : {
	// 			jalan : 'Kedawung',
	// 			kota : 'Blitar',
	// 			provinsi : 'Jawa Timur'
	// 		}
	// 	}
	// dosen.alamat.kota;

	// 2. Function Deklaration
	function hitungPersegi(panjang , lebar){

		// membuat object;
			var hitung = {};
			hitung.panjang = panjang;
			hitung.lebar = lebar;
			// untuk menghitung
			// return panjang*lebar;

			// untuk mengembalikan nilai argumen,mengembalika variabel object
			return hitung;
		}
	var persegi1 = hitungPersegi(2,8)

	// 3. Construktor (denga keyword new)
	// 			Function yang digunakan untuk membuat object.konsepnya sama dengan function declaration tetapi pada Construktor tidak membutuhkan pembuatan object baru dan tida mereturn.
	// 		syntax
			function Barang(nama,jenis,berat){
				this.nama = nama;
				this.jenis = jenis;
				this.berat = berat;
				// konsep this pd constructor akan mengembalika object yang baru dibuat saat object dipanggil dengan keyword (new)
			}

	Barang1 = new Barang ('rokok', 'gudanggaram' , '21kg')
	Barang2 = new Barang ('beras', 'koi' , '50kg')


















































