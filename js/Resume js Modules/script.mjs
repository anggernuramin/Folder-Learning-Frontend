//  Tentukan function ,variable,class yg kita mau expore dengan kata kunci tambahkan export didepannya
 export function showNama(...value) {
  console.log(value);
  return value.map(n => `<ul>
                            <li>${n}</li>
                          </ul>`).join('')
  // return `<ol> ${value.forEach(nama => ` <li>${nama}</li> `) } </ol>`
}

export const name = 'Angger Nur Amin';

function tambah(a,b){
  return a+b
}


