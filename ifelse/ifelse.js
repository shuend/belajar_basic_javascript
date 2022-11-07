var lagi = true;

while(lagi === true) {
    var angka = prompt('masukan angka:');

    if(angka % 2 == 0) {
        alert(angka + ' adalah bilangan genap');
    } else {
        alert(angka + ' adalah bilangan ganjil');
        lagi = confirm('coba lagi?');
    }
}