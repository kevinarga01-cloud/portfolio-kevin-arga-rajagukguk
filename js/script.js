/*
========================================
Judul File : script.js
Deskripsi  : Interaksi JavaScript Portfolio
Author     : Mahasiswa Geofisika
========================================
*/

// Menampilkan tahun otomatis di footer
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

// Smooth scroll untuk navigasi
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
