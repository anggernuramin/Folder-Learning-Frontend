export function createClose(){
  let span = document.createElement('span')
 const close = document.createTextNode('\u00D7');
 span.appendChild(close);
 span.className = 'close';
 span.appendChild(close)
 span.classList.add('center')
 return span;
}

export function hidden(span){
  return span.addEventListener('click',function(e){
    e.target.parentElement.style.display = 'none'
    localStorage.removeItem('todo')
})
}

export const card = document.querySelector('.card')

export function insertClose(){
  const textList = document.getElementsByTagName("li");
  for (let i = 0 ; i < textList.length ; i++){
  const close = createClose()
  textList[i].appendChild(close)
  }
}
insertClose()

const btnAddWednesday = document.querySelector('.btn-add-Wednesday')
const ulListWednesday = document.querySelector('.list-Wednesday')
btnAddWednesday.addEventListener('click', function (e) {
  const li = document.createElement('LI');
  const input = document.querySelector('#input-Wednesday').value;
  const text = document.createTextNode(input);
    li.appendChild(text)

    if (input === '') {
        alert('Masukkan To Do List dahulu ...')
    } else {
        ulListWednesday.appendChild(li)
    }
      console.log(input);
      document.querySelector('#input-Wednesday').value = "";
      e.preventDefault()
      const close = createClose()
      li.appendChild(close)
      hidden(close)
})

   
    const btnAddThursday = document.querySelector('.btn-add-Thursday')
    const ulListThursday = document.querySelector('.list-Thursday')
    btnAddThursday.addEventListener('click', function (e) {
          const li = document.createElement('LI');
          const input = document.querySelector('#input-Thursday').value;
          const text = document.createTextNode(input);
          li.appendChild(text)
    
          if (input === '') {
            alert('Masukkan To Do List dahulu ...')
          } else {
            ulListThursday.appendChild(li)
          }
          console.log(input);
          document.querySelector('#input-Thursday').value = "";
          e.preventDefault()
          const close = createClose()
          li.appendChild(close)
          hidden(close)
        })

        const btnAddFriday = document.querySelector('.btn-add-Friday')
        const ulListFriday = document.querySelector('.list-Friday')
        btnAddFriday.addEventListener('click', function (e) {
              const li = document.createElement('LI');
              const input = document.querySelector('#input-Friday').value;
              const text = document.createTextNode(input);
              li.appendChild(text)
        
              if (input === '') {
                alert('Masukkan To Do List dahulu ...')
              } else {
                ulListFriday.appendChild(li)
              }
              console.log(input);
              document.querySelector('#input-Friday').value = "";
              e.preventDefault()
              const close = createClose()
              li.appendChild(close)
              hidden(close)
})
            const btnAddSaturday = document.querySelector('.btn-add-Saturday')
            const ulListSaturday = document.querySelector('.list-Saturday')
            btnAddSaturday.addEventListener('click', function (e) {
                  const li = document.createElement('LI');
                  const input = document.querySelector('#input-Saturday').value;
                  const text = document.createTextNode(input);
                  li.appendChild(text)
            
                  if (input === '') {
                    alert('Masukkan To Do List dahulu ...')
                  } else {
                    ulListSaturday.appendChild(li)
                  }
                  console.log(input);
                  document.querySelector('#input-Saturday').value = "";
                  e.preventDefault()
                  const close = createClose()
                  li.appendChild(close)
                  hidden(close)
                })

