// // TRAVERSAL
// 		Artinya penelusuran pada dom,biasa digunakan jika melakukan event pada element childnya maka kita mengakses element parent/ataupun element blink(saudara kandungnya).
// 	DOM TRAVERSAL METHOD 
// 	a. parent node ==> mengembalikan node
// 			digunakan untuk mengambil parent 
// 	b. parentElement ==> mengembalikan element
// 			digunakan untuk mengambil elemen parent,yang element parent nya adalah elemen html
// 	c. nextSibling ==> mengembalikan node
// 			mengambil element setelahnya ,mengambil element ari saudara kandung dari element yang kita pilih
// 		jika element setelahnya berada dibawah maka element selanjutnya adalah (charakter enter),jika ingin mengembil elemen setelahnya menggunakan nextSibling ini pastikan elemen setelahnya berada disampingnya atau berada sejajar
// 	d. nextElementSibling ==> mengembalikan element
// 			mengambil element setelahnya berupa element
// 	e. preveousSibling ==> mengembalikan node
// 			mengambil element setelahnya ,mengambil element ari saudara kandung dari element yang kita pilih
// 		jika element setelahnya berada dibawah maka element selanjutnya adalah (charakter enter),jika ingin mengembil elemen setelahnya menggunakan nextSibling ini pastikan elemen setelahnya berada disampingnya atau berada sejajar
// 	f. preveousElement ==> mengembalikan element
// 			mengambil element sebelumnya



// Cara 1 (cara yang salah)
	// KARENA jika elemennya banyak maka akan kerepotan,karena syntax ini menggunakan selection dengan mengembalikan 1 elemen saja
// const close = document.querySelector('.close')
// const card = document.querySelector('.card');

// 	close.addEventListener('click', function(){
// 			card.style.display = 'none';

// });

// cara 2 menggunakan DOM TRAVERSAL
// menggunakan selection mengembalikan array karena elemen yg didalmnya bnyak
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// for ( let i = 0 ; i < close.length; i++){
// 	close[i].addEventListener('click', function(){
// 		// meneyeleksi card yang ke ( karena card juga mengembalikan nilai array)
// 		// card[i].style.display = 'none';

// 		// artinya jika element close ke i saya click,maka element parentnya akan menghilang.
// 		close[i].parentElement.style.display = 'none';
// 	});

// }

// cara 3 menggunakan target pada object event
// object even adalah parameter yang ada didalam fungsi pada saat membuat event
// const close = document.querySelectorAll('.close');

// // artinya variabel close akan diganti dengan nama_variabel array yang baru,yang diidikan didalam parameter function forEach
// close.forEach(function(elemenbaru){

// 	// sedangkan parameter e akan memberi informasi berupa object apa saja yang muncul saat event klik terjadi.
// 	elemenbaru.addEventListener('click', function(e){

// 		e.target.parentElement.style.display = 'none'
// 	});
// })


// 4 menselesksi elemen parent nya,Agar saat kita merubah diconsole browser,browser tetap akan menjalankan atau merecord perubahan yang kita ubah secara real time;

// seleksi elemen pembungkus paling luar
const container = document.querySelector('.container');
container.addEventListener('click',function(e){
	console.log(e.target)
	if(e.target.className == 'close'){
		e.target.parentElement.style.display = 'none'
	} 
});







// latihan soal
let tampil = function(angka){
let nilai_awal = 0;
while ( nilai_awal < 10){
  
let s = '';
for ( let i = angka ; i > 0 ; i--){
	for ( let j = i ; j > 0 ; j--){
		s += j;
	}
		s += '\n';
}

	nilai_awal++;
    // nilai_awal += '\n';
	console.log(nilai_awal)
	console.log(s)

	}
	return angka;
}

tampil(10)
