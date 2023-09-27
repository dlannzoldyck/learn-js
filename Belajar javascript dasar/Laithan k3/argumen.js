let args = [2,3,3,4];
function jumlahkanSemua(...args) {
    let hasil = 0;
    for (let i = 0; i < args.length; i++) {
        console.log(`Ini adalah variabel I : ${i}`)
      hasil += args[i];
    }
    return hasil;
  }

  console.log(jumlahkanSemua(...args))
  console.log(args.length)

  /* Angka dalam array args dijumlahkan secara sederhana dengan cara menjalankan perulangan for yang mengiterasi melalui setiap elemen dalam array dan menambahkan nilainya ke dalam variabel hasil. Berikut adalah langkah-langkahnya secara sederhana:

Inisialisasi variabel hasil dengan nilai awal 0.
Mulai perulangan dari indeks 0 hingga indeks terakhir dalam array args.
Di setiap iterasi perulangan, ambil nilai angka dari elemen array yang sedang diiterasi (misalnya, args[0], args[1], dll.).
Tambahkan nilai angka tersebut ke dalam variabel hasil.
Lanjutkan iterasi ke elemen berikutnya dalam array dan ulangi langkah 3 dan 4.
Setelah semua elemen dalam array telah dijumlahkan, nilai akhirnya akan disimpan dalam variabel hasil.
Kembalikan nilai hasil sebagai hasil penjumlahan.
Ini adalah langkah-langkah yang dilakukan oleh fungsi jumlahkanSemua dalam kode Anda. Dengan melakukan iterasi melalui semua angka dalam array args dan menambahkannya satu per satu, Anda mendapatkan hasil akhir, yang dalam kasus ini adalah 12 (2 + 3 + 3 + 4).
*/