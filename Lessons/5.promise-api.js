/*
Promise API
Ini fitur built-in dari JavaScript buat ngatur banyak promise sekaligus. Cocok banget kalau lo punya banyak proses async yang bisa jalan bareng.

🧰 API yang Paling Penting:
Promise.all()
Promise.race()
Promise.allSettled()
Promise.any()
*/

/*
1. Promise.all()
Menjalankan semua promise sekaligus, dan lanjut kalau SEMUANYA berhasil.
Kalau salah satu gagal → langsung reject.
*/
// const p1 = Promise.resolve("✅ Data 1");
// const p2 = Promise.resolve("✅ Data 2");
// const p3 = Promise.resolve("✅ Data 3");

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log("Hasil semua:", results); // Array of results
//   })
//   .catch((err) => {
//     console.log("Ada yang error:", err);
//   });

//   Gunakan saat semua data dibutuhkan, dan kalau salah satu gagal harus dihentikan.

// Contoh Promise.all() Gagal
// const p4 = Promise.resolve("Data OK");
// const p5 = Promise.reject("Gagal ambil data");

// Promise.all([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error:", err));
//gagal karena di kalo all harus resolve semua

//Promise.race()
//Jalanin semua promise, dan ambil hasil dari yang paling CEPAT selesai, baik resolve atau reject.
// const fast = new Promise((resolve) => setTimeout(() => resolve("Fast ✅"), 1000));
// const slow = new Promise((resolve) => setTimeout(() => resolve("Slow 🐢"), 3000));

// Promise.race([fast, slow]).then((res) => console.log("Yang tercepat:", res));
// Cocok buat fallback (misal: ambil dari 2 server, siapa cepat dia dapet).

//Promise.allSettled()
/*
Menunggu SEMUA selesai, apapun hasilnya (sukses/gagal).
Hasilnya berupa array berisi { status: 'fulfilled' | 'rejected' }.
*/
// const p6 = Promise.resolve("Sukses");
// const p7 = Promise.reject("Gagal");

// Promise.allSettled([p6, p7]).then((results) => {
//   results.forEach((res, index) => {
//     console.log(`Promise ${index + 1}:`, res);
//   });
// });
//Cocok buat ngerun banyak task dan tetap pengen tau hasil semua, tanpa stop di error.

// 4. Promise.any()
// Mirip Promise.race(), tapi hanya resolve tercepat yang diambil, dan error kalau SEMUA gagal.
const p8 = Promise.reject("Fail 1");
const p9 = Promise.resolve("Success from p9");
const p10 = Promise.reject("Fail 3");

Promise.any([p8, p9, p10])
  .then((res) => console.log("Yang pertama berhasil:", res))
  .catch((err) => console.log("Semua gagal:", err));

// Cocok kalau cukup satu yang berhasil, dan nggak peduli yang gagal.

/*
🧠 Kesimpulan Perbedaan:
API	Sukses Jika	Gagal Jika
Promise.all()	Semua promise sukses	Salah satu gagal
Promise.race()	Siapa cepat selesai (resolve/reject)	-
Promise.allSettled()	Semua selesai (status fulfilled atau rejected)	Tidak pernah gagal
Promise.any()	Minimal satu resolve	Semua reject
*/
