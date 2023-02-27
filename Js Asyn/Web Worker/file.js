function showLog(total){
    let nilaiAwal = 0;
    while(nilaiAwal < total){
        console.log(nilaiAwal)
        nilaiAwal++;
    }
}

// File web worker
addEventListener("message", function(event){
    // event.data akan mengambil nilai yg dikirim pd parameter postMessage (pada mai  thread)
    let total = event.data;
    showLog(total)
    // mengirim data ke main thread dengan mengirim parameter berupa string (parameter dapat diisi dengan apa saja,sesuaikan dengan kebutuhan)
    this.postMessage("proses web worker done")
})