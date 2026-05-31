document.addEventListener("DOMContentLoaded", function () {
  function goLogin() {
    window.location.href = "login/index.html";
  }

  function logout() {
    localStorage.removeItem("username");
    location.reload();
  }

  function toggleDropdown(e) {
    e.preventDefault();
    const dropdown = document.getElementById("userDropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }

  // Tutup dropdown kalau klik di luar
  document.addEventListener("click", function (e) {
    const userOption = document.querySelector(".User_option");
    if (!userOption.contains(e.target)) {
      const dropdown = document.getElementById("userDropdown");
      if (dropdown) dropdown.style.display = "none";
    }
  });

  const user = localStorage.getItem("username");
  const loginLink = document.getElementById("loginLink");

  if (user) {
    document.getElementById("userInfo").innerText = "Halo, " + user;
    // Ubah link jadi toggle dropdown
    loginLink.removeAttribute("href");
    loginLink.style.cursor = "pointer";
    loginLink.addEventListener("click", toggleDropdown);
  }

  window.goLogin = goLogin;
  window.logout = logout;
});
