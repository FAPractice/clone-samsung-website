const navMenu = document.getElementById("nav-menu");

const closeAnimationFunction = (duration) => {
  navMenu.animate(
    [
      {
        boxShadow: "0px 0px 0px 100vmax #00000000",
        transform: "translateX(100%)",
      },
    ],
    {
      duration: duration,
    }
  ),
    setTimeout(() => navMenu.classList.remove("visible"), duration);
};

document.querySelectorAll(".btn-nav-menu").forEach((element) => {
  element.onclick = () => {
    navMenu.classList.contains("visible")
      ? closeAnimationFunction(200)
      : navMenu.classList.add("visible");
  };
});

window.onresize = () => {
  if (window.innerWidth > 1200 && navMenu.classList.contains("visible")) {
    closeAnimationFunction(400);
  }
};
