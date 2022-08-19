const mouse = [cursor, mouse1, mouse2];
// const mouse = document.querySelectorAll(".mouse");//ça marche aussi

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

window.addEventListener("mousemove", (e) => {
  //   console.log(e.y);//examiner bien si sur e.x/e.y,on capter bien la position de ma souris sur axe x/y
  // methode 1
  //   cursor.style.left = e.x + "px";
  //   cursor.style.top = e.y + "px";

  //   mouse1.style.left = e.x + "px";
  //   mouse1.style.top = e.y + "px";

  //   mouse2.style.left = e.x + "px";
  //   mouse2.style.top = e.y + "px";

  //method 2
  //il faut utiliser le "forEach" pour dire que entre chaque d'eux, tu me fait... (array.forEach), la puissant de forEach: ça permet d'attribuer autant éléménts ce qu'on veut pour un comportement, s'il y a plusieur éléménts qui a le même comportement, c'est plus intelligeant de mettre un foreach au lieu de répéter la mêmme choses comme "methode 1"
  mouse.forEach((mouse) => {
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
  });
});

// console.log(mouse1, mouse2, cursor);
// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
