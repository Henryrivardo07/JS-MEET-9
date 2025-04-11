"use strict";

/*
Promise di JavaScript
🧠 Penjelasan:
Promise itu cara JavaScript buat ngatur proses async (yang butuh waktu), kayak ambil data dari API, baca file, atau delay pakai timer.

Promise adalah objek yang punya 3 keadaan:
pending – lagi jalan
fulfilled – berhasil
rejected – gagal/error
*/

//struktur dasar

const promise = new Promise((resolve, reject) => {
  const berhasil = true;
  if (berhasil) {
    const hasil = "hasil sukses";
    resolve(hasil); // resolve untuk mengembalikan nilai kalo berhasil
  } else {
    reject(error); // reject kalo gagal
  }
});

console.log(promise);

// contoh simulasi asynchronous
const janji = new Promise((resolve, reject) => {
  const sukses = true;

  setTimeout(() => {
    if (sukses) {
      resolve("Data berhasil diambil");
    } else {
      reject("Gagal Ambil data!");
    }
  }, 2000);
});

console.log("Mulai...");

janji
  .then((hasil) => {
    console.log("Berhasil mengambil data", hasil);
  })
  .catch((err) => {
    console.log("Error nih", err);
  });

console.log("code setelah janji dibuat");

/*
🧠 Penjelasan:
setTimeout simulasi delay ambil data
janji.then() akan jalan kalau resolve() dipanggil
janji.catch() akan jalan kalau reject() dipanggil
"Kode setelah janji dibuat" muncul duluan → karena promise itu async!

📌 Tips Tambahan:
Promise bikin kode lebih terstruktur daripada callback hell.
Lo bisa pakai .then() dan .catch() berkali-kali buat chaining (nanti kita bahas di next topic).
Promise gak langsung jalan hasilnya. Lo perlu .then() buat nangkep hasilnya.
*/

//incase promise gagal

const janjiError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server error: gagal ambil data");
  }, 1000);
});

janjiError
  .then((res) => {
    console.log("Sukses", res);
  })
  .catch((err) => {
    console.log("Terjadi Error", err);
  });

//Promise dengan kondisi dinamis
function cekNilai(nilai) {
  return new Promise((resolve, reject) => {
    if (nilai >= 75) {
      resolve("Lulus ✅");
    } else {
      reject("Tidak lulus ❌");
    }
  });
}

cekNilai(80)
  .then((pesan) => console.log(pesan))
  .catch((err) => console.log(err));

//Simulasi Fetch API dengan Promise (tanpa fetch beneran)

function fakeFetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "henry" });
    }, 1500);
  });
}

console.log("Mulai ambil data");
fakeFetchData()
  .then((data) => {
    console.log("Data diterima", data);
  })
  .catch((err) => {
    console.log(err.message);
  });
