function checkAvailability(){

    let buku = [
        {"nama": "sherlock", "jumlah":2},
        {"nama": "lupin", "jumlah":2},
        {"nama": "aladin", "jumlah":2},
      ]
    
    let jumlahInput = document.getElementById("jumlah").value;

    let bukuSelect = document.getElementById("buku").value;

    if (jumlahInput === ""){
        alert("Please enter the quantity.")
        return;
    }
    else{
        let found = false;

        for (let i = 0; i < buku.length; i++) {
            if (buku[i].nama === bukuSelect){
                found = true;
                if(parseInt(jumlahInput) > buku[i].jumlah){
                    alert("Jumlah buku tidak tersedia")
                    return;
                }
                alert("Silahkan ambil buku anda")
                return;
            }
            
        }
        if (!found){
            alert("Buku tidak ditemukan");
            return;
        }
    }
}



