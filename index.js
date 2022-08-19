const mouse = [cursor, mouse1, mouse2];

window.addEventListener("mousemove", (e) => {

  mouse.forEach((mouse) => {
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
  });
});