document.querySelectorAll(".btn-nav-menu").forEach((element) => {
  element.onclick = () => {
    document.getElementById("nav-menu").classList.toggle("visible");
  };
});
