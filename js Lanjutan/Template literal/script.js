// HTML FRAGMENTS
  // Dengan membuat html fragmen kita dapat membuat template html menggunakan JSON, yang didalamnya bisaterdapat expression
// 1. misal menampilkan sebuah constructor function dan ditampilkan pada halaman html(body)
    const wrapperConstruktor = document.querySelector('.wrapper-construktor')
          const Mahasiswa = function(){
            this.nama = 'Angger';
            this.umur = 21;
            this.nim = 21101087;
            wrapperConstruktor.innerHTML = (`<div class="mahasiswa">
                          <h3>Data Mahasiswa</h3>
                          <ul>
                            <li>nama : ${this.nama}</li>
                            <li>nama : ${this.umur}</li>
                            <li>nama : ${this.nim}</li>
                          </ul>

            </div>`);
          }

          const mhs1 = new Mahasiswa();
    // 2. menampilkan sebuah data array of object dan ditampilkan dalam div,yg merepresentasikan data yg diambil dari API,dengan menggunakan higher order function map untuk mengambil data objectnya,kenapa array ? agar bisa diberi method map kalau object tidak  bisa
    const wrapperBarang = document.querySelector('.wrapper-barang')
          const namaBarang = [
                              {
                                nama:'Bola',
                                harga: 12000
                              },
                              {
                                nama:'Sepatu',
                                harga: 300000
                              },
                              {
                                nama:'Kaos kaki',
                                harga: 6000
                              },
                              {
                                nama:'Jacket Hoodie',
                                harga:130000
                              }
                              ]
      	
      // method join() diatas digunakan untuk menghilangkan tanda (,) yg sebelumnya digunakan untuk memisah antar object yg ada didalam array namaBarang
      
      wrapperBarang.innerHTML = daftarBarang;

      // 3. pengkondisian dalam template literal
              // dengan studi kasus mengecek apakah barang tersedia atau tidak dalam toko
          // menggunakan object literal;
          // dan bandingkan dengan operator ternery jika ada tampilkan itemnya,jika tidak maka tampilkan string bernilai(0)
          const wrapperTable = document.querySelector('.wrapper-table')
          const barangTersedia = {
            nama:'bola',
            harga: 12000,
            status:'tersedia',
            item: 5
            
          }

          const tampil = `<table border="2">
                       <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Status</th>
                          </tr>
                       </thead>
                      
                       <tbody>
                       <tr>
                          <td>${barangTersedia.nama}</td>
                          <td>${barangTersedia.harga}</td>
                          <td>${barangTersedia.status}  ${(barangTersedia.item) ? `${barangTersedia.item} item` : ' (0) item'}</td>
                        </tr>
                       </tbody>
                       
                        
          </table>`;
          // arti dari operator ternary diatas adalah JIKA BARANGTERSEDIA ADA ITEMNYA MAKA TAMPILKAN ITEM BARANGNYA, JIKA TIDAK MAKA TAPILKAN NILAI 0
          wrapperTable.innerHTML = tampil;

          // 4. Nested
          // Html fragments bersarang ,
          // misal mencetak suati data yang didalam string literal terdapat function
          const wrapperMhs = document.querySelector('.wrapper-dataMhs')
          const DataMhs = {
            nama: 'vindi',
            semester: 3,
            matakuliah: [
                        'Pemrograman web',
                        'Data Analis',
                        'Pemrograman Mobile',
                        'Matematika Diskrit'
                         ]
          };
          // membuat function
          // dengan parameter yg menerima argument dari DataMhs.matakuliah;
          // dan tampilkan dengan method map untuk setiap datanya
          function tampilMK(matakuliah){
            return `<ol>
                       ${matakuliah.map(mk => `
                       <li>${mk}</li>
                       `).join('')}
                    </ol>
            `
          }

          const dataVindi = `<div class="wrapperData">
                              <table border="2" cell-padding="6" cell-spacing="6">
                              <thead>
                                <tr>
                                  <th>Nama Mahasiswa</th>
                                  <th>Semester</th>
                                  <th>Mata Kuliah </th>
                                </tr>
                              </thead>
                              <tbody> 
                                <tr>
                                  <td>${DataMhs.nama}</td>
                                  <td>${DataMhs.semester}</td>
                                  <td>${tampilMK(DataMhs.matakuliah)}</td>
                                </tr>
                              </tbody>
                              </table>
          </div>`;

          wrapperMhs.innerHTML = dataVindi;

          console.table(dataVindi)

