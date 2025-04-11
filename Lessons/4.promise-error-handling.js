/*
Promise Error Handling (Lebih Dalam)
🧠 Penjelasan:
Saat lo pakai Promise, error bisa terjadi di:
Dalam new Promise() saat reject dipanggil
Di dalam .then() kalau ada error runtime
Secara eksplisit lo bisa throw new Error(...)
Promise kasih kita .catch() buat nangkep semua error yang muncul di chain.
*/

//tangkap error .catch()
new Promise((resolve, reject) => {
  reject("Gagal koneksi");
})
  .then((res) => {
    console.log("Sukses:", res);
  })
  .catch((err) => {
    console.log("Terjadi error:", err);
  });

//Error di Dalam .then() Juga Ketangkap
Promise.resolve("Data awal")
  .then((res) => {
    console.log(res);
    // Simulasi error runtime
    throw new Error("Ada error di .then()");
  })
  .catch((err) => {
    console.log("Catch dapet error:", err.message);
  });
//Artinya: throw dalam .then() = seperti reject, dan langsung ditangkap oleh .catch()

//Error Propagation di Chain
Promise.resolve("Langkah awal")
  .then((res) => {
    console.log(res);
    return "Langkah kedua";
  })
  .then((res) => {
    console.log(res);
    throw new Error("Gagal di langkah ketiga");
  })
  .then((res) => {
    // Ini gak akan jalan
    console.log(res);
  })
  .catch((err) => {
    console.log("Tertangkap error di chain:", err.message);
  });

//🧹 Gunakan .finally() untuk Cleanup
// .finally() akan selalu jalan, entah berhasil atau gagal.

Promise.reject("Ups, error")
  .catch((err) => {
    console.log("Error ketangkap:", err);
  })
  .finally(() => {
    console.log("Selesai proses (selalu dijalankan)");
  });

//🔥 Kombinasi .then, .catch, dan .finally
function proses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("❌ Gagal proses");
      } else {
        resolve("✅ Proses sukses");
      }
    }, 1000);
  });
}

proses()
  .then((res) => {
    console.log("Hasil:", res);
  })
  .catch((err) => {
    console.log("Tangkap error:", err);
  })
  .finally(() => {
    console.log("Done ✔️");
  });

/*
🧠 Tips Bonus:
Selalu taruh .catch() paling akhir di chain untuk handle semua error.
Jangan taruh .catch() di tengah chain kecuali lo mau lanjut walaupun error.
  */
