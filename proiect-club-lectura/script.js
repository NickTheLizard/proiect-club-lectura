document.addEventListener("DOMContentLoaded", function () {
  // Scroll la top când se apasă pe butonul UP
  const btnUp = document.getElementById("btnUp");

  if (btnUp) {
    btnUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    window.addEventListener("scroll", () => {
      btnUp.style.display = window.scrollY > 300 ? "block" : "none";
    });
  }

  // Căutare în lista de cărți
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const term = searchInput.value.toLowerCase();

      cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const author = card.querySelector(".autor")?.textContent.toLowerCase() || "";

        if (title.includes(term) || author.includes(term)) {
          card.style.display = "inline-block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Validare și trimitere formular
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nume = document.getElementById("nume").value;
      const email = document.getElementById("email").value;
      const telefon = document.getElementById("telefon").value;
      const mesaj = document.getElementById("mesaj").value;

      if (!nume || !email || !telefon || !mesaj) {
        alert("Completează toate câmpurile!");
        return;
      }

      if (!/^\d{10}$/.test(telefon)) {
        alert("Numărul de telefon trebuie să conțină 10 cifre!");
        return;
      }

      alert("Mesajul a fost trimis cu succes! (Simulare)");
      form.reset();
    });
  }

  // Buton de help
  const helpBtn = document.getElementById("helpBtn");
  if (helpBtn) {
    helpBtn.addEventListener("click", () => {
      alert("Dacă ai întrebări, trimite-ne un email sau contactează-ne pe rețelele sociale!");
    });
  }
});
