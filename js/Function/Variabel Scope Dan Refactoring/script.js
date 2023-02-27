// Refactoring 
// 	Adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa
// 	mengubah fungsionalisnya
// ==> Refactoring biasa digunakan ketika kita sudah selesai membuat program,
// 	kita menelusuri peogram yang sudah kita buat apakah sudah efisiens
// misal :penggunaan variabel,Pengulangan,function dll

// variabel SCOPE
// 	Yaitu lingkup variabel dalam program
// 	terdapat dua jenis variabel
// 1. block scope
// 	Yaitu variabel yang hanya bisa digunakan dalam block scope{}
// 	tidak bisa digunakan/dipanggil diluar,
// misal : pada bahasa pemrograman java,c,c++

// 2. Function scope
// 	Yaitu variabel (global) yang bisa dipanggil pada saat kita membuat function,
// 	tetapi variabel global tidak dapat memanggil variabel yang ada diadalam function
// misal : a. variabel global / window scope
// 			Var a = 1;
// 			Artinya variabel global yang dibuat didalam main program,yang bisa diakses
// 			oleh siapapun,misal bisa diakses dalam function.
// 			Sedangkan untuk memanggil window scape adalah window.a (window.namaVariabelGlobal)
// 		b. Function scape (variabel local)
// 			Artinya variabel yang dideklarasikan didalam function,tdk bisa diakses diluar
// 			function tersebut,HANYA BERLAKU DIDALAM FUNCTION 
// 			TETAPI DIDALAM FUNCTION KITA DAPAT MENGAKSES VARIABEL GLOBAL 
// 		c. variabel local
// 			 variabel yg ada didalam function,variabel yang ada didalam parameter.
// 			 PASTIKAN SAAT PENDEKLARASIAN VARIABEL LOCAL MENULISKAN VAR (variabel terlebih dahulu)
// 			 JIKA tidak maka variabel local akan memanggil variabel global.

// variabel global
var a = 3

// function scope / variabel local
 function tes(){
	var b = 6;
	console.log(a);
}

// agar program yang ada didalam function bisa diakses,maka harus dipanggil terlebih dahulu
tes()

// console.log(a) 
// variabel b tdak bisa dipanggil dari luar function
console.log(b);



















