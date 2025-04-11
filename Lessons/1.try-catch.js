"use strict";
//Materi TryCatch
// Di JavaScript, ketika terjadi error (misalnya memanggil fungsi yang nggak ada), program bakal langsung berhenti. Untuk mencegah crash, kita bisa "nangkap" error-nya pakai try...catch.

//Struktur Dasar
try {
  // kode yang mungkin error
} catch (error) {
  // kode kalau error terjadi
}

//Contoh sederhana
try {
  // buatError; //ini case kalo error
  console.log("Berhasil ambil data");
} catch (error) {
  console.log(error);
}

//contoh ke 2
try {
  const data = JSON.parse('{"name" : "Budi"}');
  console.log(data.name);
  const broken = JSON.parse('{name:"henry"}');
  console.log(broken);
} catch (error) {
  console.log("terjadi error saat parsing data JSON", error.message);
}

/*
📌 Penjelasan Kode:
Baris pertama berhasil karena JSON-nya valid.
Baris kedua error karena format JSON salah.
catch akan menangkap error dan mencegah crash.
err.message nunjukin pesan error-nya.
⚠️ Catatan Penting:
Hanya runtime error di dalam try yang bisa ditangkap.
Kode async (misalnya pakai setTimeout) perlu penanganan khusus (nanti pas bahas promise dan async).
*/

//LAST TEORI AND CODING (Finnaly)
try {
  console.log("Mulai Proses");
  throw new Error("Ups ada yang salah nih");
} catch (error) {
  console.log("Error Tertangkap", error.message);
} finally {
  console.log("Proses selesai (Finally)");
}

//CUSTOM ERROR
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa dibagi dengan NOL");
  }
  return a / b;
}

try {
  const hasil = bagi(10, 0);
  console.log(hasil);
} catch (error) {
  console.log("Error:", error.message);
}

//ERROR DI ASYNC FUNCTION
// try...catch gak bisa nangkep error dari async function kayak setTimeout secara langsung.
try {
  setTimeout(() => {
    throw new Error("ini error dari dalam setTimeOut");
  }, 1000);
} catch (error) {
  console.log("error ketangkap:", error.message);
}

// Karena setTimeout async, error-nya gak ditangkap oleh try...catch ini. Ini nanti kita cover di promise & async/await.
