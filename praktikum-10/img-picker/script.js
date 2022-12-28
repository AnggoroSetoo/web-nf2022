function imgPicker() {
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "badak") {
        images.src = "gambar/badak.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar badak.jpg";
        alert("Ini adalah gambar badak.jpg");
    } else if (picker == "gajah") {
        images.src = "gambar/gajah.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar gajah.jpg";
        alert("Ini adalah gambar gajah.jpg");
    } else if (picker == "gorila") {
        images.src = "gambar/gorila.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar gorila.jpg";
        alert("Ini adalah gambar gorila.jpg");
    } else if (picker == "jerapah") {
        images.src = "gambar/jerapah.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar jerapah.jpg";
        alert("Ini adalah gambar jerapah.jpg");
    } else if (picker == "panda") {
        images.src = "gambar/panda.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar panda.jpg";
        alert("Ini adalah gambar panda.jpg");
    } else if (picker == "serigala") {
        images.src = "gambar/serigala.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar serigala.jpg";
        alert("Ini adalah gambar serigala.jpg");
    } else if (picker == "singa") {
        images.src = "gambar/singa.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar singa.jpg";
        alert("Ini adalah gambar singa.jpg");
    } else if (picker == "zebra") {
        images.src = "gambar/zebra.jpg";
        images.width = 400;
        images.height = 230;
        images.alt = "Ini adalah gambar zebra.jpg";
        alert("Ini adalah gambar zebra.jpg");
    } else {
        alert("Gagal");
    }
}