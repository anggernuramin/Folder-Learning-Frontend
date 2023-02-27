function getUrl(keyword){
  return  'http://www.omdbapi.com/?apikey=3f628086&s=' + keyword;
}

function getUrlInfo(imdbid){
  return  'http://www.omdbapi.com/?apikey=3f628086&i=' + imdbid;
}

function getData(keyword){
  url = getUrl(keyword)

  // code promise
  const promise = new Promise(function(resolve,reject){
    const ajax = new XMLHttpRequest();
    // code asyn
    ajax.onload = function(){
      if(ajax.status === 200){
        const response = JSON.parse(ajax.responseText);
        resolve(response)
      }else{
       reject(ajax.status);
        
      }
      
    }
    ajax.open('GET',url)
    ajax.send()
  })
  return promise;
}
function getDataInfo(keyword){
  url = getUrlInfo(keyword)

  // code promise
  const promise = new Promise(function(resolve,reject){
    const ajax = new XMLHttpRequest();
    // code asyn
    ajax.onload = function(){
      if(ajax.status === 200){
        const response = JSON.parse(ajax.responseText);
        resolve(response)
      }else{
       reject(ajax.status);
        
      }
      
    }
    ajax.open('GET',url)
    ajax.send()
  })
  return promise;
}
function displayCard(data){
  return `<div class="col-md-4  my-5">
  <div class="card">
    <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
    <div class="card-body">
      <h5 class="card-title">${data.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
      <a href="#" class="btn btn-primary showDetailInfo" data-bs-toggle="modal" data-bs-target="#detailInfo" data-imdbid=${data.imdbID} >Show Detail </a>
    </div>
  </div>
</div>`
}

function displayError(Error){
  return  `<div class="alert alert-danger" role="alert">
 ${Error}
  </div>`
}

function displayModalBox(data){
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${data.Poster}" alt="" class="img-fluid">
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${data.Title} (${data.Year})</h4></li>
        <li class="list-group-item"><strong>Rated : </strong>${data.Rated}</li>
        <li class="list-group-item"><strong>Actor : </strong>${data.Actors}</li>
        <li class="list-group-item"><strong>Released : </strong>${data.Released}</li>
        <li class="list-group-item"><strong>plot <br></strong>${data.Plot}</li>
      </ul>
    </div>
  </div>
</div>`
}
const btnSearch = document.getElementsByClassName('button-Search')[0];

btnSearch.addEventListener('click',function(){
    const promise = getData(document.getElementById('search').value)
    promise
      .then(function(value){
        return value.Search;
      })
      .then(function(movies){
       return movies.map(data => displayCard(data)) 
      }).then(function(detail){
        const wrapperBox = document.querySelector('.wrapper-movie')
        wrapperBox.innerHTML = detail;
        
        // karena btn show detail info bnyak,mak kita buttuh meloopingnya
        const detailInfo = document.querySelectorAll('.showDetailInfo');
        detailInfo.forEach(btn => {
          
          btn.addEventListener('click',function(){
            const imdbID = this.dataset.imdbid;
            const promiseInfo =  getDataInfo(imdbID)
            promiseInfo
                .then(function(value){
                  const modalBody = document.querySelector('.modal-body')
                  modalBody.innerHTML = displayModalBox(value)
                })
          })
        })
        
      })
      .catch(function(Error){
        const wrapperBox = document.querySelector('.wrapper-movie')
        wrapperBox.innerHTML =  displayError("Ups!!! Gagal mengambil data," + Error);
      })
})

