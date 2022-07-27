const navMenu = document.getElementById("nav-menu");
const body = document.querySelector("body");

const closeAnimationFunction = (duration) => {
  body.style.overflow = "scroll";
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

const openAnimationFunction = () => {
  body.style.overflow = "hidden";
  navMenu.classList.add("visible");
};

document.querySelectorAll(".btn-nav-menu").forEach((element) => {
  element.onclick = () => {
    navMenu.classList.contains("visible")
      ? closeAnimationFunction(200)
      : openAnimationFunction();
  };
});

window.onresize = () => {
  if (window.innerWidth > 1200 && navMenu.classList.contains("visible")) {
    closeAnimationFunction(400);
  }
};
