// memilih  pilihan baju

var pilihan = prompt('Masukkan pilihan : \n1. Pakaian Adat Jawa Barat\n2. Pakaian Adat Jawa Timur\n3. Pakaian Adat Jawa Tengah');
var kode = prompt('Masukkan kode : \n kode 213 untuk Pakaian Adat Jawa Barat\n kode 313 untuk Pakaian Adat Jawa Timur\n kode 413 untuk Pakaian Adat Jawa Tengah')
var uk = prompt('Masukkan ukuran baju :\nTersedia l , M, N , XL ,XXL');
var lamaSewa = parseInt(prompt('masukkan lama sewa : '));
var sewaPerhari = 150000;
var totalSewa ;
totalSewa = sewaPerhari * lamaSewa;
var jmlUang ; 
var byr ;

if ( pilihan == 1 && kode == 213){
	alert ('Nama Pakaian adat : Pakaian Adat Jawa Barat' + '\nUkuran Pakaian Adat : ' + uk +'\nHarga sewa perhari : ' +  sewaPerhari + '\nTotal Sewa Pakaian Adat : Rp.'+totalSewa );
	jmlUang = parseInt(prompt('Silahkan bayar : '));
	if (jmlUang < totalSewa){
		alert('mohon maaf uang anda kurang')
	}else{
		byr = jmlUang - totalSewa;
	alert('Kembalian anda : ' + byr + ' Rupiah');
	}
	

}else if( pilihan == 2 && kode == 313){
	alert ('Nama Pakaian adat : Pakaian Adat Jawa Timur' + '\nUkuran Pakaian Adat : ' + uk +'\nHarga sewa perhari : ' +  sewaPerhari + '\nTotal Sewa Pakaian Adat : Rp.'+totalSewa );
	jmlUang = parseInt(prompt('Silahkan bayar : '));
	if (jmlUang < totalSewa){
		alert('mohon maaf uang anda kurang')
	}else{
		byr = jmlUang - totalSewa;
	alert('Kembalian anda : ' + byr + ' Rupiah');
	}

}else if( pilihan == 3 && kode == 413){
	alert ('Nama Pakaian adat : Pakaian Adat Jawa Tengah' + '\nUkuran Pakaian Adat : ' + uk +'\nHarga sewa perhari : ' +  sewaPerhari + '\nTotal Sewa Pakaian Adat : Rp.'+totalSewa );
	jmlUang = parseInt(prompt('Silahkan bayar : '));
	if (jmlUang < totalSewa){
		alert('mohon maaf uang anda kurang')
		
	}else{
		byr = jmlUang - totalSewa;
	alert('Kembalian anda : ' + byr + ' Rupiah');
	}
}else{
	alert('Mohon maaf pilihan baju tidak tersedia');

}






// input ukuran pakaia padat


// masukkan lama sewa

// result persewaan

// jumlah uang yang dibayarkan

// kembalian