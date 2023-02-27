// pada sesi latihan DESTRUCTURING VARIABLE INI adalah menapilkan sebuah data pelanggan yang dibungkus dengan array dyg didalmanya terdapat objek(array of object),dari beberapa data pelanggan kita hanya menampilkan  nama,id nya saja dan simpan  hasilnya simpan kedalam table

const pelanggan = [
                  {
                    id: '001',
                    nama:'Riski Biadama',
                    noHp: 085234531210,
                    pembelian: 'Buku',
                    alamat:[
                      kota =  'Blitar',
                      kecamatan = 'Nglegok',

                    ]
                  },
                  {
                    id: '002',
                    nama:'Fathkur Ridho rohman',
                    noHp: 098123456123,
                    pembelian: 'Sepatu Converse',
                    alamat:[
                      kota =  'Jakpus',
                      kecamatan = 'Cengkareng',

                    ]
                  },
                  {
                    id: '003',
                    nama:'Velintika Febrianti',
                    noHp: 085432987654,
                    pembelian: 'Majalah Dinding',
                    alamat:[
                      kota =  'Blitar',
                      kecamatan = 'Kedawung',

                    ]
                  },
                  {
                    id: '004',
                    nama:'Yayayk Zabara',
                    noHp: 085456789,
                    pembelian:'Laptop Asus 14sr',
                    alamat:[
                      kota =  'Tulung Agung',
                      kecamatan = 'Ngantru',

                    ]
                  },
                  {
                    id: '005',
                    nama:'Rimadani',
                    noHp: 085430987451,
                    pembelian: 'Kitab buluqul-marom',
                    alamat:[
                      kota =  'Bandung',
                      kecamatan = 'Rawa Bebek',

                    ]
                  },
                  {
                    id: '006',
                    nama:'M.nur kholis',
                    noHp: 08675490871,
                    pembelian: 'Headset Fetech',
                    alamat:[
                      kota =  'Blitar',
                      kecamatan = 'Nglegok',

                    ]
                  },
]
const data = document.querySelector('.data');
console.log(data);


// langkah untuk menampilkan data array yg ada didalam object ke table 
// 1. buat elemen pembungkus pada html tag <table></table>
// 2. variable array dispatchEvent.map untuk mengambil setiap objeck yang ada didalamnya
// 3. tentukan property apa saja yang akan diambil
// 4. untuk elemen html buat <thead></thead> diluar proses mapping
// 5. saat mapping gunakan backtik lagi untuk membungkus proses pengambilan data arraynya
// 6. bungkus dengan tag html <tbody></tbody>
// 7. set width dan height dengan CSS
// 8. set property table pada html langsung dengan (border="1" cellspacing="0" cellpadding="15")
// 9. JANGAN LUPA gunakan method join diakhir proses mapping,yaitu diakhir tanda (),untuk menghilangkan tanda , saat membuat object pada array
// 10. semua proses diatas dibungkus backtik saat assignment ke variable penapung


// membuat array untuk menggabungkan alamat
function joinArray(array){
  console.log(array);
  return array.reduce((acc,curr) => acc+ ', ' + curr);
  
}

const dataPelanggan =  `<div>
                         <thead>
                          <tr>
                            <th>Id Pelanggan</th>
                            <th>Nama Pelanggan</th>
                            <th>Daftar Pembelian</th>
                            <th>Alamat Pembelian</th>
                          </tr>
                         </thead>
                        <tbody>
                          ${pelanggan.map(item => 
                            `<tr>
                                <td>${item.id}</td>
                                <td>${item.nama}</li>
                                <td>${item.pembelian}</li>
                          
                                <td>${joinArray(item.alamat)}  </li>
                            </tr>`
                            
                            ).join('')}
                            </tbody>                  
                        </div>`;



data.innerHTML = dataPelanggan


