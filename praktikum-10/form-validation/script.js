//fungsi reset data form
function reload() {
    window.location.reload();
}

// fungsi pesan error
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// fungsi validasi
function validateForm() {
    // get value dari form name="contactform"
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let jam = document.contactForm.jam.value;
    let tujuan = document.contactForm.tujuanKeberangkatan.value;
    let jumlah = document.contactForm.jumlahTiket.value;


    let hasil;

    let nameErr = emailErr = jamErr = tujuanErr = jumlahErr = true;

    // Validasi nama
    if (name == "") {
        printError("nameErr", "Nama tidak boleh kosong");
    } else if (name.length > 30) {
        printError("nameErr", "maksimal 30 karakter");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Nama tidak boleh ada angka dan karakter spesial");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validasi email
    if (email == "") {
        printError("emailErr", "Email tidak boleh kosong");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Email harus valid");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate jam Keberangaktan
    if (jam == "") {
        printError("jamErr", "Jam tidak boleh kosong!");
    } else {
        printError("jamErr", "");
        jamErr = false;
    }


    // Validasi Tujuan Keberangkatan
    if (tujuan == "") {
        printError("tujuanErr", "Kota tidak boleh kosong!");
    } else {
        printError("tujuanErr", "");
        tujuanErr = false;
    }

    // Validasi jumlah Tiket
    if (jumlah == "") {
        printError("jumlahErr", "Jumlah tiket tidak boleh kosong");
    } else if (jumlah < 1) {
        printError("jumlahErr", "Jumlah tiket tidak boleh kurang dari 1");
    } else if (jumlah > 10) {
        printError("jumlahErr", "Tidak boleh lebih dari 10 tiket");
    } else {
        printError("jumlahErr", "");
        jumlahErr = false;
    }

    if ((nameErr || emailErr || jamErr || tujuanErr || jumlahErr) == true) {
        return false;
    } else {

        hasil = 0
        document.getElementById("hasil").innerHTML = "Data Pemesanan";

        document.getElementById("hasilNama").innerHTML = name;
        document.getElementById("hasilEmail").innerHTML = email;
        document.getElementById("hasilJam").innerHTML = jam;
        document.getElementById("hasilTujuan").innerHTML = tujuan;
        document.getElementById("hasilTiket").innerHTML = jumlah;
    }

};