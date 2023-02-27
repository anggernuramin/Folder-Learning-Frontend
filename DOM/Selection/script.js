// DOM SELECTION
// 		Digunakan untuk 
// 	a. memilih elemen-elemen yang akan digunakan saat menyeleksi DOM pd javascript
// 	b. Representasi elemen HTML pada dokumen menjadi sebuah object
// 	c. Antarmuka pemrograman bebrbasis objek dengan merepresentasikan dokumen pada web
// 	d. DOM membuat seluruh komponen dari halaman web dapat diakses dan dimaanipulasi
// 	e. Dom dapat diubah dibuat,dihapus menggunakan js
// 1.komponen pada DOM
// 	a. Elemen HTML
// 	b. Atribut
// 	c. Textd
// 	d. dll
// 2. DOM Tree
// 	Yaitu urutan  node/simpul pada saat menentukan/menyeleksi  DOM yg akan digunakan
// 	A. urutan DOM tree
// 		1. Root node (simpul paling atas ) defaultnya adalah document
// 		2. parent node (node yang berada 1 tingkat diatas node yang lainnya)
// 		3. child node (node yang berada 1 tingkat dibawah node yang lainnya)
// 	B. Tipe-Tipe node/simpul
// 		1. Element (HTML)
// 		2. Atribut (MISAL Href)
// 		3. Text (isi dari tag html)
// 		4. document
// 	C. Nodelist & html collection
// 		1. Keduanya merupakan kumpulan Nodelist
// 		2. struktur datanya mirip array ( yang mempunyai index)
// 		3. HTML collection bersifat LIVE sedangka Nodelist tidak
// 	3. DOM SELECTION
// 		Digunakan untuk menseleksi elemen/tag pada html yang akan dimanipulation DOM pd javascript
// 		1. menseleksi elemen berdasarkan ID-NYA
// 			syntax
// 		const namaVARIABEL = getElementById('namaID');
// 		// pada tag ini menghasilkan/mereturn hasil 1 element ( yang artinya tidak bisa menseleksi elemen yang mempunya indeks/lebih dari 1 elemen) 

// 		2. menseleksi elemen berdasarkan tagname
// 		const namaVARIABEL = getElementsByTagName('namaTagnya');
// 		pada tagname menghasilkan/mereturn hasil berupa HTML collection (yang artinya jika mengaksesnya maka perlu memanggil indeknya / membuat looping)

// 		3. menseleksi elemen berdasarkan className
// 		syntax
// 		const namaVARIABEL = document.getElementByClassName('namaClass');
// 		pada tag ini menghasilkan/mereturn hasil berupa HTML collection(yang artinya jika ingin maengakses isinya perlu memanggil index secara ,anual/menggunakan looping)

// 		4. menseleksi elemen menggunakan selector
// 		syntax
// 		const namaVARIABEL = document.querySelector('NamaSelector');
// 		// pada tag ini menghasilkan/mereturn hasil 1 element ( yang artinya tidak bisa menseleksi elemen yang mempunya indeks/lebih dari 1 elemen) 

// 		5. menseleksi elemen berdasarkan selector (tetapi bisa mengakses banyak selector)

// 		const namaVARIABEL = document.querySelectorAll('NamaSelector');
// 		pada tag ini menghasilkan/mereturn hasil berupa  nodelist (yang artinya jika ingin maengakses isinya perlu memanggil index secara manual/menggunakan looping)


// 1.Menseleksi dengan berdasarkan idnya
// const judul = document.getElementById('judul');
// judul.style.color = 'red';

// 2. Menseleksi dengan berdasarkan tagname
// const paragraf = document.getElementsByTagName('p');
// // menggunakan index
// paragraf[2].style.backgroundColor = 'green'
// // menggunakan looping
// for (let i = 0 ; i < paragraf.length ; i++){
// 	paragraf[i].style.backgroundColor = "orange"
// }

// 3. menseleksi dengan berdasarkan className

//jika menuliskan index disebelah nama clas p1 
// 	const p1 = document.getElementsByClassName('p1' [0]);
// // akan secara otomatis menmbahkan inline css
// const p1 = document.getElementsByClassName('p1');
// // index 0 ,karena element yang mempunyai clas p1 ,cuma ada satu
// p1[0].style.color = 'red'


// 4. menseleksi menggunakan selectorAll & mengubah root default
// memanggil root parent
const section = document.getElementById('b');
// memanggil child parent
const listItem = section.querySelectorAll('ul li');
for ( let i = 0 ; i < listItem.length ; i++){
	if ( i % 2 == 0){
		listItem[i].style.backgroundColor = ' green'
		// berfungsi untuk mengganti teks yg ada dihtml
		
	}else {
		listItem[i].style.backgroundColor = ' red'
		listItem[i].innerHTML = 'Ini dirubah menggunakan javascript'
	}
}

// 5. menseleksi menggunakan selector
// mereturn/menghasilkan 1 element
// jika selectornya ternyata terdapat banyak,maka elemen yang terseleksi adalah elemen yang pertama kali ditemuka,karena pada selector menghasilkan 1 element saja






















