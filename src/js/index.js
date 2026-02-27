// Desactiva el scroll con la rueda del mouse
window.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
    },
    { passive: false },
  );

  // Permite navegar entre secciones solo por clic en el navbar
  const menuLinks = document.querySelectorAll(
    ".headerPage-aureaDerm__menu-link[href^='#']",
  );

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || targetSelector === "#") return;

      const targetSection = document.querySelector(targetSelector);
      if (!targetSection) return;

      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });


  const navbarItems = document.querySelectorAll(".headerPage-aureaDerm__menu-item")

  navbarItems.forEach((item) =>{
    item.addEventListener("click", () =>{
      navbarItems.forEach((el) => el.classList.remove("activeMenu"))
      item.classList.add("activeMenu")
    })
  })