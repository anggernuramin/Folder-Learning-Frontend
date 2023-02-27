// mengubah background color BODY dengan event click,dengan mengambil elemen html button

// dengan mengambil elemen html button
// seleksi tombol button
const btnUbahWarna = document.querySelector('#btnUbahWarna');
// membuat event click dengan event handler (function expression)
btnUbahWarna.onclick = function(){
	// // dengan aksi akan mewarnai background pada body
	// // jika ingin mengambil object body maka tidak perlu menyimpan di variabel,bisa mengambil dari document secara langsung
	// document.body.style.backgroundColor = 'darkblue';

	// // menggunakan setAttribute;
	// // tidak bisa feedback event
	// document.body.setAttribute('class', 'biru')

	// menggunakan classList.toggle()
	document.body.classList.toggle('biru');
	document.body.style.transition = '.3s'
};

// WARNA RANDOM
// Tanpa membuat elemen HTML
// create element
const btnBaru = document.createElement('button');
const isibtnBaru = document.createTextNode('Change Color');
// rangkai
btnBaru.appendChild(isibtnBaru);
// tambah attribte type=button
btnBaru.setAttribute('type','button')
btnBaru.style.marginLeft = '4em';
// select elemen sebelum
// masukkan ke document html menggunakan method after
btnUbahWarna.after(btnBaru);
// membuat event
btnBaru.addEventListener('click', function(){
	// mengambil nilai random
	// membatasi 0 - 255 (sesuai dengan nilai kadar rgb)
	// math.round(mengubah desima ke integer)
	const red = Math.round(Math.random() * 255 + 1);
	const green = Math.round(Math.random() * 255 + 1);
	const blue = Math.round(Math.random() * 255 + 1);
	// menggabungkan dengan konket string
	document.body.style.backgroundColor = 'rgb(' + red + ',' + green +', '+ blue+')';
});

// WARNA RANDOM DENGAN INPUT SLIDER
// select input red
const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

// mode gelap
const sliderModeGelap = document.querySelector('input[name=sliderModeGelap]')
sliderModeGelap.addEventListener('click', function(){
	const klik = sliderModeGelap.value;
	if ( klik == 0){
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white'
		document.body.style.transition = '.5s';
	}else{
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black'
		document.body.style.transition = '.5s';

	}
})




sliderRed.addEventListener('input' , function(){
	const red = sliderRed.value;
	const green = sliderGreen.value;
	const blue = sliderBlue.value;
	const transparent = Math.random();
	console.log(transparent);
	document.body.style.backgroundColor = 'rgba('+ red +',' + green +',' + blue +','+ transparent+')';

});

sliderGreen.addEventListener('input' , function(){
	const red = sliderRed.value;
	const green = sliderGreen.value;
	const blue = sliderBlue.value;
	const transparent = Math.random();
	console.log(transparent);
	document.body.style.backgroundColor = 'rgba('+ red +',' + green +',' + blue +','+ transparent+')';


});

sliderBlue.addEventListener('input' , function(){
	const red = sliderRed.value;
	const green = sliderGreen.value;
	const blue = sliderBlue.value;
	const transparent = Math.random();
	console.log(transparent);
	document.body.style.backgroundColor = 'rgba('+ red +',' + green +',' + blue +','+ transparent+')';

});














































