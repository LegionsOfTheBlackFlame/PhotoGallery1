const photoConts = document.querySelectorAll(".PhotosCont > div");

photoConts.forEach((photoCont) => {
  const img = photoCont.querySelector("img");

  img.addEventListener("mouseenter", () => {
    photoConts.forEach((pc) => pc.classList.remove("hovered"));
    photoCont.classList.add("hovered");
  });

  img.addEventListener("mouseleave", () => {
    photoCont.classList.remove("hovered");
  });
});
