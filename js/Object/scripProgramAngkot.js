// membuat object menggunakan constructor

	function Angkot (sopir,penumpang,trayek,kas){
		// mengambil nilai parameter dengan this
		this.sopir = sopir;
		this.penumpang = penumpang;
		this.trayek = trayek;
		this.kas = kas;

	// function menambah penumpang
	this.penumpangNaik = function(namaPenumpang){
		if ( this.penumpang == 0){
		this.penumpang.push(namaPenumpang)
		return this.penumpang;

		}else{
				// telusuri
			for (var i = 0; i <this.penumpang.length ; i++){
				if ( this.penumpang[i] == undefined){
					this.penumpang[i] = namaPenumpang;
					return this.penumpang

				}else if ( this.penumpang[i] == namaPenumpang){
					alert( namaPenumpang +' Sudah diangkot')
					return this.penumpang
			// statement untuk menambah penumpang setelah penumpang tidak sama dengan 0
			} else if ( i == this.penumpang.length - 1){
				this.penumpang.push(namaPenumpang)
				return this.penumpang;


			}else if ( !namaPenumpang == this.penumpang){
				alert(namaPenumpang + ' tidak naik angkot ini')
			}
			}
			}  
		}

		// penumpang turun dan bayar
		this.penumpangTurun = function (namaPenumpang, bayar){
			if ( this.penumpang == 0){
				alert('Belum ada penumpang naik')
				return false;
			}else{

				// penumpang turun
				for (var i = 0 ; i < this.penumpang.length; i++){
					if ( this.penumpang[i] == namaPenumpang){
						this.penumpang[i] = undefined;
						this.kas += bayar;
						return this.penumpang;


						
					}else if ( i == this.penumpang.length-1){
						alert(namaPenumpang + " tidak naik angkot ini")
					}
				}
			}
		}



		
	};
var angkot1 =  new Angkot('Galih' , [] , ['nbdfbdf' ,'dfdf'], 0);
