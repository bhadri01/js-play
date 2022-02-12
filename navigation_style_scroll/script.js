const body = document.querySelectorAll("main div");
const nav = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  let txt = "";
  body.forEach((a) => {
    const bodytop = a.offsetTop;
    const bodyheight = a.clientHeight;
    console.log(bodytop);
    if (pageYOffset >= bodytop - bodyheight / 3) {
      current = a.getAttribute("id");
      txt = a.childNodes;
    }
  });
  nav.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
      txt[0].style.opacity = 1;
    }
  });
});
