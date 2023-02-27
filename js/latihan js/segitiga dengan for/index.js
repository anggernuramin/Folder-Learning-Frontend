var s = '';

// untuk menampilkan baris 
for( var i = 0; i < 10 ; i++){
	
	// pengulangan untuk mendapatka nilai disetiap kolom
	for (var j = 0 ; j <5 ; j++){

	// artinya s = s + '*'; penggabungan dua buah string
		s += '*';
	}
	
	// artinya setelah perulangan satu akan turun kebawah(ngenter)
	s += '\n';
}
console.log (s);


// untuk memperoleh segitiga,maka jumlah kolom harus menyesuaikan dengan jumlah baris-NYA
for ( var k = 0; k < 5 ; k++){

	for(var l = 0; l <= k ; l++){
		s += '#';
	}
	s+='\n';
}
console.log(s);