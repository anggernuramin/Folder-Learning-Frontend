// searching infomormation movie
$('.button-Search').on('click',function(){

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=3f628086&s=' + $('.user-Searching').val(),
    success: (result) =>{
     
      // untuk mengambil data arraynya maka kita perlu variable untuk menapungnya
      // karena result didalmnya ada Searchnya (karen pada url kita mencari data dengan keywoard s)
      const movies = result.Search;
      console.log(movies);
  
      // buat variabel card untuk menampung isi dari movies yg dilooping dengan forEach
      let card = '';
  
      movies.map(m => 
                        // tambah card untuk mendapatkan disetiap elemen movies yang tampil
                        card += cetakCard(m)
                   
    );
  
    console.log(card);
    // isi dari card kita masukkan ke element parentnya (yaitu .wrapper-movie)
    $('.wrapper-movie').html(card)
    
    // MEMBUAT AKSI JIKA SHOW DETAIL DIKLIK
    // REQUEST AJAX LAGI
    // UNTUK MENAMPILKAN DATA YG DIBUTUHKA PADA MODAL BOX
    // YANG DATANYA MENGAMBIL DARI property data YANG ISINYA ADALAH "imdbID
    // dimana Setiap card mempunyai data imdbID nya masing-masing(data uniq)
  
    // buat event klik jika tombol show detail diklik menggunakan jquery
    $('.showDetailInfo').on('click',function(){
      // cara untuk mengambil data-imdbnya saja sesuai dengan tombol yg diklik dengan bntuan jquer
     let dataUniq = $(this).data('imdbid');
  
      // jika data imdbid nya sudah kerecord maka jalankan ajax
      $.ajax({
        url: 'http://www.omdbapi.com/?apikey=3f628086&i=' + dataUniq,
        success: a =>{
          
          const modalBox = `<div class="container-fluid">
                            <div class="row">
                              <div class="col-md-3">
                                <img src="${a.Poster}" alt="" class="img-fluid">
                              </div>
                              <div class="col-md">
                                <ul class="list-group">
                                  <li class="list-group-item"><h4>${a.Title} (${a.Year})</h4></li>
                                  <li class="list-group-item"><strong>Rated : </strong>${a.Rated}</li>
                                  <li class="list-group-item"><strong>Actor : </strong>${a.Actors}</li>
                                  <li class="list-group-item"><strong>Released : </strong>${a.Released}</li>
                                  <li class="list-group-item"><strong>plot <br></strong>${a.Plot}</li>
                                </ul>
                              </div>
                            </div>
                          </div>`;
                          $('.modal-body').html(modalBox);
        },
        error: (e) =>{
          console.log(e.responsText);
        }
      })
     
  
    })
    },
        error: (e)=>{
           console.log(e.responsText);
    }
  })

})

function cetakCard(m){
  return `<div class="col-md-4  my-5">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
      <a href="#" class="btn btn-primary showDetailInfo" data-bs-toggle="modal" data-bs-target="#detailInfo" data-imdbid=${m.imdbID} >Show Detail </a>
    </div>
  </div>
</div>`
}






// request ajax menggunakan jquery
