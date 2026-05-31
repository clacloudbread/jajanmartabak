document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch(
      "https://herisusanta.my.id/javalogin/api/auth.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      },
    );

    const data = await res.json();

    if (data.status === "success") {
      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil!",
        text: "Akun kamu sudah dibuat. Silakan login.",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: data.message || "Terjadi kesalahan, silahkan coba lagi.",
        confirmButtonText: "Coba Lagi",
        confirmButtonColor: "#e8821a",
      });
    }
  });
