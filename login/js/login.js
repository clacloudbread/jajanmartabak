document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch(
      "https://herisusanta.my.id/javalogin/api/auth.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      },
    );

    const data = await res.json();

    if (data.status === "success") {
      localStorage.setItem("username", data.username);
      Swal.fire({
        icon: "success",
        title: "Login Berhasil!",
        text: `Selamat datang, ${data.username}!`,
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "../index.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Username atau Password salah, silahkan coba lagi.",
        confirmButtonText: "Coba Lagi",
        confirmButtonColor: "#e8821a",
      });
    }
  });
