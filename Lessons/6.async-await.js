/*
Async/Await
Cara modern, clean, dan readable buat nanganin asynchronous code pake Promise.
*/

/*
🧠 Kenapa Async/Await?
Ganti .then() chaining yang ribet jadi bentuk mirip kode sinkron.
Lebih mudah dibaca & di-debug.
Di balik layar, tetap pakai Promise.
*/

//BASIC FORMAT
async function namaFungsi() {
  try {
    const hasil = await somePromise();
    console.log("Hasil:", hasil);
  } catch (err) {
    console.log("Terjadi error:", err);
  }
}

//contoh sederhana
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("📦 Data berhasil diambil"), 1000);
//   });
// }

// async function ambilData() {
//   console.log("⏳ Mengambil data...");
//   const data = await getData();
//   console.log("✅ Hasil:", data);
// }

// ambilData();

//🧠 await bikin JavaScript nunggu promise selesai sebelum lanjut.

// Handling Error dengan Try-Catch
function fetchData(error = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) reject("❌ Gagal fetch data");
      else resolve("✅ Data OK");
    }, 1000);
  });
}

async function proses() {
  try {
    const res = await fetchData();
    console.log("Hasil:", res);
  } catch (err) {
    console.log("Error terjadi:", err);
  } finally {
    console.log("🔚 Proses selesai");
  }
}

proses();

//Contoh chaining versi async/await
function loginUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin") resolve("Login sukses");
      else reject("Username salah");
    }, 1000);
  });
}

function ambilUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data user lengkap"), 1000);
  });
}

async function runApp() {
  try {
    const login = await loginUser("admin");
    console.log(login);

    const data = await ambilUserData();
    console.log(data);
  } catch (err) {
    console.log("❌ Error:", err);
  }
}

runApp();

/*
🧠 Tips Penting:
kita cuma bisa pakai await di dalam async function
Gunakan try/catch untuk handle error
Bisa pakai Promise.all() dengan await juga:
*/
// const [res1, res2] = await Promise.all([task1(), task2()]);
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("👤 User: Budi"), 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📝 Posts: 5 post ditemukan"), 1500);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("💬 Comments: 10 komentar ditemukan"), 1200);
  });
}

async function loadData() {
  console.log("🔄 Memuat semua data...");

  try {
    const [user, posts, comments] = await Promise.all([getUser(), getPosts(), getComments()]);

    console.log(user);
    console.log(posts);
    console.log(comments);
  } catch (err) {
    console.log("❌ Error saat memuat data:", err);
  } finally {
    console.log("✅ Semua proses selesai");
  }
}

loadData();
/*
🔍 Apa yang terjadi?
Ketiga fungsi (getUser, getPosts, getComments) dijalankan bersamaan.
Total waktu eksekusi = waktu paling lama (1500ms, bukan 3700ms!).
Kalau salah satu Promise gagal → masuk ke catch.
*/
