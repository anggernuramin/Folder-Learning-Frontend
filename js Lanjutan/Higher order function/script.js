// Latihan soal dengan menerapkan konsep higher order functiond dengan bantuan method array(map,filter,reduce,split)

// Algoritma
    // seleksi semua elemen li dan ubah menjadi array agar nantinya elemen li dapat mempunyao method pada array
    const videos =Array.from(document.querySelectorAll("[data-duration]"));
  //  const arrayVideo = [];
  //  arrayVideo.push(videos);
    // artinya adalah
        // 1. seleksi elemen pada html yg mempunya atribute data-durasiWaktu
        // 2. ubah menjadi Array(Array from()),karena pada saat mengunakan .querySelectorAll akan mengembalika NodeList
    

    // filter elemen li yang mempunya text content JAVASCRIPT LANJUTAN
    const hitung = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))
   
        // arti sinyak diatas adalah memfilter(menseleksi pada elemen li html yang text content nya bersisi "JAVASCRIPT LANJUTAN")
        // metod .includes() method ini digunakan untuk mengecek apakah sebuah data ada didalam array atau tidak,biasanya digunakan untuk melakukan pencarian dan memastikan data yang ada didalam array ada atau tidaknya
      

    // AMBIL DURASI dari masing-masing video
    .map(item => item.dataset.duration)
          // arti syntax diatas adalah mengambil value dari attribute data-duration SAATMEMBUAT ATTRIBUTE GUNAKAN DATA-DURATION="" JIKA NANTINYA INGIN MENGAMBIL DATA VALUENYA

    // UBAH DURASI MENJADI FLOAT DAN JUMLAHKAN (menit* 60 dan tambahkan dengan detik) UNTUK MENCARI totalDETIK
    .map(waktu => {
      let arrayBaru = waktu.split(':')
        .map(ubahTipeData => parseFloat(ubahTipeData))
        return (arrayBaru[0] * 60) + arrayBaru[1]
    })
        // method split() digunakan untuk membagi elemen array("") tanda kurung didalmnya adalah delimeternya atau tanda : yg berada dalam pembatas array yang berguna untuk mengganti tanda (:) menjadi format array yaitu (,)


        // arti syntax diatas adalah
        // 1. memetakkan dgn .map() untuk dijadikan array baru dan gunakan method array split() yg mengembalikan array baru untuk mengambil 1 li html,
        // karena saat menggunakan map akan mengambil semua li dalam satu array

        // 2. saat sudah displit kita mapkan kan lagi untuk merubah tipe data string array menjadi Float32Array,agar bisa diassign untuk menghitung jam

        // 3. menjumlahkan setiap array yg sudah UNTUK MENCARI DETIK displit() dengan index yang ke 0 *60 dan ditambah dengan index ke 1, dimana index ke 0 adalah menit dan index ke 1 adalah detik


    // jumlahkan semua detik
    .reduce((total,detik) => total + detik);
        // arti syntax diatas adalah menjumlahkan semua detik yg sudah diperoleh pada tahap seblumnya


    // ubah formatnya menjadi jam menit detik
    // menghitung jam dengan cara detik yg sudah dicari dibagi dengan 1jam dalam detik (yaitu 3600 detik)
    const jam =Math.floor(hitung / 3600);
      // setelah itu,karena jam kita bulatkan,maka kita menghitung menit,harus mengetahui sisa menit dari jam yang kita bulatkan diatas
    const sisaMenit = hitung - (jam * 3600);
      // arti syntax diatas adalah = hitung (berupa detik) maka untuk mngetahui sisa menit adalah (jumlah detik keseluruhan - (2 jam(2 jam karena jam sudah dubulatkan kebawah) * 1 detik dalam 1 jam)) maka hasilnya adalah detik
    const menit = Math.floor(sisaMenit / 60);
      // dibagi dengan jumlah detik dalam 1 menit
    const detik = sisaMenit - menit * 60;

    
    // simpan didalam dom
    // jumlah video
          const jmlhVideo = document.querySelector('.jumlah-video');

          const jmlh = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

          jmlhVideo.innerHTML = (jmlh + ' video');
    // tampilkan durasi video
          const total_durasi = document.querySelector('.total-durasi');
          total_durasi.textContent = (jam+' jam' + menit +' menit '+ detik+' detik');
    console.log(jmlh);
