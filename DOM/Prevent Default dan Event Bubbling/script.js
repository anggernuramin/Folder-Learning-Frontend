// mengubah warna dan background menggunakan js
const icon = document.getElementsByTagName('i');
const card = document.querySelectorAll('.card')
console.log(icon);
icon[1].style.backgroundColor = 'blue'
card[1].style.borderLeft = '2px solid blue';

icon[2].style.backgroundColor = 'red'
card[2].style.borderLeft = '2px solid red';

icon[3].style.backgroundColor = 'orange'
card[3].style.borderLeft = '2px solid orange';


// preventDefault()
// 	Digunakan untuk memberhetikan aksi default yang dilakukan oleh web kita.
// 	preventDefault() adalah sebuah elemen method yang ada didalam OBJECT EVENT (parameteryang ada didalam function saat kita menggunakan event).tujuannya adalah menghentika aksi default yang dilakukan oleh sebuah elemen.
// ==> biasa terjadi pada element html ( a , input),elemen tersebut tidak bisa dihilangkan pada halaman,karena setelah diklik otomatis akan merefresh halaman(sebenarnyaterjadi tetapi hanay dilakukan sebentar saja)

// // 1. contoh penggunaan prevent default dengan menggunakan foreach
// const close = document.querySelectorAll('.close');
// console.log(close)
// close.forEach(function(elemenBaru){
// 	elemenBaru.addEventListener('click', function(e){
		

// 		// elemen a tidak bisa dihilangkan jika kita tidak memeberi preventDefault(),syaratnya kita harus memberi nilai pada parameter function event(yang biasanya ditulis dengan e / event)

// 		e.preventDefault();

// 		elemenBaru.parentElement.style.display = 'none';
// // 	})
// });



// EVENT BUBLING
// 	Ketika kita punya sebuah eventdielemen child dan kita punya event dielement parentnya,maka ketika kita menjalankan event yang ada didalam element childnya,event pada element parent nya juga ikut terpanggil.
// 	Jika kitaingin menghentikan event pada element parent saat event pada elemen child ingin dijalankan,maka gunakan stopProgpagation() dan event ini bisa dipakek jika kita mempunyai OBJECT EVENt.
// syntax ketik eventBubling pada element childnya


// card.forEach(function(elemenBaru){
// 	elemenBaru.addEventListener('click',function(){
// 		alert('okeyyyyyyy	')
// 	})
// })

// const close = document.querySelectorAll('.close');
// close.forEach(function(closeBaru){
// 	closeBaru.addEventListener('click',function(e){
// 		// agar tag a yidak melakukan refresh secara otomatis jika event dijalankan
// 		e.preventDefault();
// 		closeBaru.parentElement.style.display = 'none'


// 		// // agar saat kita menjankan event elemnt child(close) tidak mengakses event pada element parent (card) kita memebutuhkan event stopProgpagation() untuk memberhentikan event pada element parentnya
// 		// syntax ==> objectEvent.stopPropagation()
// 		e.stopPropagation();
// 	})
// })



// SYNTAX YANG PALING POWERFULL
// yaitu kita seleksi pada elementparent paling terluar(container),setelah kita mencari target dengan objectEvent ,lalu menseleksi dengan namaClasnya dan melakukan event pada aclas tersebut dengan menggunakan dom traversal (menelusuri elemen parentnya)

// seleksi elemen paling luar
const container = document.querySelector('.container');

// membuat event
container.addEventListener('click',function (event) {
	// mengambil elemeen apapun yang diclick dengan memanfaatkan object event.target;
	console.log(event.target);


	// membuat pengkondisian untuk mendapatkan elemen yang dituju dengan nama className : ;

	if (event.target.className == 'close'){

		// jika element yg mempunyai classname diklik maka element parentnya akan menghilang.tetap menggunakan bantuan TARGET
		event.target.parentElement.style.display = 'none';

		// event untuk memberhentikan aksi default tag a
		event.preventDefault();
	}
})

// PROGRAM DIATAS AKAN TETAP BERJALAN WALAU KITA MENAMBAH CARD PADA BROWSER



















