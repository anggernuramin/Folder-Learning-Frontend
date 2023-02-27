
var ulang = true;
// membuat pengulangan

while( ulang == true){





	// membuat pilihan 

	var player = prompt('Masukkan pilihan hewan : \n1. gajah \n2. semut \n3. orang');

	// mengambil class math.random
	// batasan fungsi Math.random() adalah 0 sampai 1.
	var computer = Math.random();

	// membuat aturan fungsi 
	if(computer < 0.34){
		computer = 'gajah';
	}else if( computer >= 0.35 && computer < 0.65){
		computer = 'semut';
	}else{
		computer = 'orang';
	}


	// rules permainan
	var hasil = '';
		// untuk kondisi seri
		if( player == computer){
			hasil = 'SERI';

		}else if( player == 'gajah'){
			if(computer == 'orang'){
				hasil = 'Menang';
			}else{
				hasil = 'Kalah';
			}

		}else if( player == 'semut'){
			if( computer == 'orang'){
				hasil =  'Kalah';
			}else{
				hasil = 'Menang';
			}

		}else if( player == 'orang'){
		// 	if( computer == 'semut'){
		// 		hasil = 'Menang';
		// 	}else{
		// 		hasil = 'Kalah';
		// 	}
		// }

		// menggunakan operator ternary
		hasil = ( computer == 'semut') ? 'Menang' : 'Kalah';

		}else{
			hasil = 'hewan yang anda pilih tidak ada';
		}

	// hasil permainan
		alert('player memilih : ' + player + '\ncomputer memilih : ' + computer + '\nhasil : ' + hasil);



		ulang = confirm('Apakah anda ingin mengulang permainan : ');
}
	alert('Terimakasih telah bermai game suit');






