/*
Menghitung dua buah kubus
Diket :
Kubus a = Sisinya 8 cm
Kubus b = 3
Rumus = Sisi * Sisi * Sisi



*/


let inputUser1 = prompt('Masukan Kubus 1 : ');
let inputUser2 = prompt('Masukan Kubus 2 : ');
function jumlahVolume2Kubus(a, b){
    let total;
    let volume = { A: a ** 3, B: b ** 3};
    total = volume.A + volume.B
    return total
}

 document.writeln(`<h2>Hasilnya adalah : ${jumlahVolume2Kubus(inputUser1, inputUser2)}</h2>`) 

