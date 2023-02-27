// Percabangan SWITCH
// Digunakan jika kondisi/ ekspresinya hanya bernilai satu kondisi,
// TETAPI MEMPUNYAI BANYAK AKSI
// syntax
// switch(ekspresi){
// 	case 1:
// 		aksi1;
// 		break;
// 	case 2:
// 		aksi2;
// 		break;
// 	case 3:
// 		aksi3;
// 		break;

// 	default:
// 		aksi_default;
// 		break;
// }

// contoh program menampilkan menu makanan

var menu = prompt('pilih menu yang anda mau : \n1. Mie Ayam \n2. Bakso \n3. Sate \n4. Rujak \n5. Lele ');
var harga;
switch (menu){
	case '1':
		menu = 'Mie ayam';
		alert('Tersedia');
		harga = 12000;
		
		break;
	case '2':
		menu = 'Bakso';
		alert('Tersedia');
		harga = 15000;
		
		break;
	case '3':
	case '5' :
		menu = 'Sate';
		alert('Habis');
		
		break;

	case '4':
		menu = 'Rujak';
		alert('Tinggal Sedikit');
		
		harga = 8000;
		console.log(harga);

	default:
		console.log('Pilihan menu anda tidak tersedia ');
		break;
}

	alert('menu pilihan anda adalah : ' + menu + ' \nHarga : Rp. ' + harga);