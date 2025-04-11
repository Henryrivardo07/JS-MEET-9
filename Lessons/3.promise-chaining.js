/*
Promise Chaining
🧠 Penjelasan:
Chaining artinya kita nyambungin .then() satu demi satu. Ini berguna saat lo pengen ngerjain beberapa proses async secara berurutan.
Daripada callback bertumpuk, promise chaining bikin kode lo lebih rapi dan enak dibaca.
*/

//CONTOH DASAR PROMISE CHAINING
function login(username) {
  return new Promise((resolve, reject) => {
    console.log("🔐 Login...");
    setTimeout(() => {
      if (username === "admin") {
        resolve("✅ Login berhasil");
      } else {
        reject("❌ Username tidak dikenal");
      }
    }, 1000);
  });
}

function ambilDataUser() {
  return new Promise((resolve, reject) => {
    console.log("📦 Mengambil data user...");
    setTimeout(() => {
      const sukses = true; // ubah ke false untuk test error
      if (sukses) {
        resolve("📁 Data user berhasil diambil");
      } else {
        reject("📛 Gagal mengambil data user");
      }
    }, 1000);
  });
}

function tampilkanDashboard() {
  return new Promise((resolve) => {
    console.log("📊 Menampilkan dashboard...");
    setTimeout(() => resolve("🚀 Dashboard siap ditampilkan!"), 1000);
  });
}

// Jalankan chaining
login("admin")
  .then((res) => {
    console.log(res);
    return ambilDataUser();
  })
  .then((res) => {
    console.log(res);
    return tampilkanDashboard();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("⚠️ Error terjadi di tengah proses:", err);
  });

/*
🧠 Penjelasan:
Tiap fungsi bisa sukses atau gagal.
Kalau salah satu reject, maka semua .then() berikutnya skip dan langsung masuk ke .catch().
Coba ubah username atau sukses = false buat simulasi error.
  */
