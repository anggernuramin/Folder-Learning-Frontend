// // DOM MANIPULATION
// 	Pastikan seleksi element html,sebelum memanipulasinya
// 	ELEMENT == ELEMENT HTML
// A. manipulation element
// 	memanipulasi dari elemen-element yang sudah kita seleksi(misal mengubah isi,menghilangka,menambahkan)
// 	metho pada manipulation element
// 	1. element.innerHTML()
// 		Digunakan untuk merubah isi dari sebuah element,(biasaya merubah teks,merubah tag html,atau bahka mengganti tag-tag nya)

// 	2. element.style.propertyCss
// 		Digunakan untuk memeberi style pada elemen(id,class,tag html) yang sudah diseleksi

// 	3. ManipulationAttribute
// 		Attribute adalah sesuatu yang menempel pada elemen html ( misa id,class,href,src)

// 	a. element.setAttribute ('jenis attribute(misal id,class', 'nama attribute(nama terserah)')
// 		Digunakan unruk menambhakan attribute,Tetapi jika terdapat attribute yang sama didalamnya maka Attribute yang lama akan tertimpa/tergantika oleh Attribute yang baru
// 	b. element.getAttribute('jenis attribute');
// 		Digunakan untuk menegetahui ada attribute apa didalam elementh
// 		nya
// 	c. element.removeAttribute('jenis attribute');
// 		Digunakan untuk menghapus attribute.

// 	4. element.classList()
// 		Digunakan untuk memanipulati KHUSUS ATTRIBUTE YG MEMPUNYAI CLASS
// 	a. element.classList.add('namaClassBaru')
// 			jika kita menambahkan class maka class yang baru akan ditambahkan,tidak akan menimpa kelas yang sudah ada
// 	b. element.classList.remove('namaClassYangMauDiHapus');

// 	c. element.classList.toggle('namaClass')
// 			Artinya jika pada element yang diseleksi sudah mempunyai class yang dibuat pada parameter toggle akan dihapus (false),jika belum maka akan secara otomatis akan ditambahkan(true)
// 			biasaya digunaka untuk aki pada button
// 	d. element.classList.item('angka')angka dimulai dari index ke 0
// 			Digunakan untuk mencari class item ada pada index ke berapa
// 	e. element.classList.contains('classYangDiCari')
// 			Jika kelas yang dicari ada maka akan mengembalikan nilai(true),jika tidak ada maka (false)
// 	f. element.classList.replace('classLama', 'classBaru')
// 			Harus menselaksi kelas lama terlebih dahulu


// B. MANIPULATION NODE
// 	Digunakan untuk menambahkan Node Baru (node = elemen html,atribute,text,dokument)
// 		method 
// 		pastikan menseleksi element html nya terlebih dahulu

// 	a. document.createElement('namaEelemntHtml')
// 		Digunakan untuk membuat element baru

// 	b. document.createTextNode('isi teks')
// 		Digunakan untuk mengisi teks pada element yang telah dibuat

// 	c. node.appendChild ()
// 		node = variabel yang menyimpan (elemen html baru)
// 		isiappenChild (variabel yang menyimpan (teks pada elemen baru))
// 		Digunakan untuk menambakkan element pada akhir childnya

// 	d. node.insertBefore('elementBaru' ,'elementSetelahnya')
// 		perlu untuk menseleksi element setelahnya dan membuat element barunya,
// 		Digunakan untuk menyisipkan element baru ditengah element childnya
// 	e. parentNode.removeChild('nama elemen')
// 			-Digunakan untuk menhapus element
// 			-seleksi dulu element parentnya
// 	f. parentNode.replaceChild('element baru' , 'element yg akan direplace');
// 			-Seleksi element parent parentNode
// 			-seleksi element yang akan dihapus
// 			-memebuat elemen baru
// 			-membuat text node barunya
// 			-masukkan createTextNode menggunaka appendChild

// 1.MANIPULATION ELEMENT
// const container = document.querySelector('.container');
// container.innerHTML = '<p>hallo</p>';
// jika kita menuliskan inner html pada element parentnya maka akan menggantika semua isi dari element parentnya

//usahakan menyeleksi denga method yang sama jika iningin menseleksi element paret da childny
// const judul = container.querySelector('#judul')
// judul.innerHTML = '<div><p>paragraf</p></div>';

// 2. element.style.propertyCss
// const p2 = document.querySelector('#satu .p2');
// p2.style.backgroundColor = 'magenta';

// 3. memanipulasi attribute
// const ul = document.querySelector('#dua ul');
// ul.setAttribute('class', 'unorderlist')

// // 4. memanipulasi attribute class
// const p3 = document.querySelector('#satu .p3');
// p3.classList.add('paragraf')



// MANIPULATION NODE
// 1. menambahkan element baru menggunakan appendChild (diletakkan diakhir child)

// membuat element baru
const liBaru = document.createElement('li');
// membuat isi pada element
const isiLiBaru = document.createTextNode('item baru');

// menambahkan isitextNode kedalam elemen baru
liBaru.appendChild(isiLiBaru);

// mengambil element parentnya yang akan diisi dengan element baru
const ul = document.querySelector('#dua ul');
ul.appendChild(liBaru);


// 2. menyisipkan element baru ditengah-tengah child (insertBefore())
// membuat element paragraf baru
const pBaru = document.createElement('p');
// mengisi element
const isipBaru = document.createTextNode('paragraf baru');

// menambahkan isi ke dlam elemen baru
pBaru.appendChild(isipBaru);

// menyeleksi elemen parentnya
const sectionSatu = document.querySelector('#satu');

// menyelesi elemen setelah childnya 
const p2 = sectionSatu.querySelector('.p2');
sectionSatu.insertBefore(pBaru,p2)


// 3. remove.child
// // seleksi element  parentnya
// const sectionSatu = document.querySelector('#satu');
// seleksi element yg kaa dihapus
const link = sectionSatu.querySelector('a')
sectionSatu.removeChild(link)


// 4.ReplaceChild
const paragrafBaru = document.createElement('h2')
// membuat isi text node
const isiparagrafBaru = document.createTextNode('judul baru');
// memasukkan text node ke element baru
paragrafBaru.appendChild(isiparagrafBaru);

// seleksi element parent node
const sectionDua = document.querySelector('#dua');
// seleksi element yang akan direplace
const p4 = sectionDua.querySelector('.p4');

sectionDua.replaceChild(paragrafBaru,p4)


liBaru.style.backgroundColor = 'magenta';
pBaru.style.backgroundColor = 'magenta';
paragrafBaru.style.backgroundColor = 'magenta'





























































































