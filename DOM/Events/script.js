// // EVENTS PADA CSS
// EVENTS pada Java script merepresentasikan sebuah kejadian yang terjadi didalam DOM,kejadian tersebut biasa dilakukan oleh user (mouse event,keyboard event) ataupun dilakukan secara otomatis oleh API
// Cara menjalankan event ada dua
// 1. event handler
// 	a. inline html attribute
// 		Yaitu menambahkan method javascript pada element html (tidak disarankan menggunaka ini,karena mencampur elemen html dengan javascript)
// 		- membuat function
// 		sybtax pada html
// 			on<event> = 'namafunction()'
// 	b. element method
// 		membuat function dexlaration
// 		syntax
// 		-seleksi elemen html
// 		-membuat function (kejadian)
// 		-namaVariabel.on<event> = namaFunction();
// 2. addEventsListener()
// 		-seleksi element yg akan digunakan untuk aksi eventnya(tombol)
// 		-namaVariabel.addEventsListener('namaEvent', function(){

// 			aksi(kejadian) setelah elemen dikasih event

// 			});

// 3. perbedaan event handler dan addEventsListener()
// 	PERBEDAAN TERJADI JIKA KITA MEMBERIKAN LEBIH DARI SATU PERUBAHAN EVENT PADA SEBUAH ELEMEN
// 	a. event handler
// 		maka perubahan YANG TERAKHIR aka MENIMPA/MENGGANTI perubahan sebelumnya
// 	b. addEventsListener()
// 		maka ia akan menambahkan perubahannya

// 4. Daftar event
// 	1. mouse event
// 		-click
// 		-dblclick
// 		-mouseover
// 		-mouseenter (event saat kursor ada diatas elemen)
// 		-mouseleave (event saat kursor meninggalkan elemen)
// 	2. keyboard event
// 		-keydown
// 		-keypress
// 		-keyup
// 	3. form event
// 		-reset
// 		-submit


// // event handler
// 1. element method
// seleksi element
//  const button = document.querySelector(' nav ul .tambahItem')
// //  // membuat function
//  function ubahBackground(){
//  	button.style.backgroundColor = 'green'
//  }
//  // pengunaan event
// button.onClick = ubahBackground();

// 2.addEventsListener()

// const button = document.querySelector('nav ul .tambahItem');
// button.addEventListener('click', function(){


// 	button.style.color = 'red'
// });

// MENAMBAHKA ITEM BARU MENGGUNAKAN EVENT DCLCLIk

// menangkap elemen button
const button = document.querySelector('nav ul .tambahItem');
button.addEventListener('click',function(){
	// membuat item baru
	const liBaru = document.createElement('li');
	const isiLiBaru = document.createTextNode('item baru');
	// memasukka isitext node ke element baru
	liBaru.appendChild(isiLiBaru);
	// menangkap elemen parent
	const ul = document.querySelector('nav ul');
	ul.appendChild(liBaru)
});


// mengambil elemen ul saat menubar diclick
const menu = document.querySelector('.menu-bar i');
menu.addEventListener('click',function(){
	
	menu.classList.toggle('biru')
	
	// alert('oke')
})















































