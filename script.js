const header = document.querySelector("header");

let lastKnownScrollPosition = 0;
let ticking = false;

const pageScrollAtTop = (scrollPos) => {
  setTimeout(() => {
    if (scrollPos === 0) {
      header.style.backgroundColor = "#FFFFFF";
      header.style.boxShadow = "0 0 16px rgba(0, 0, 0, 0.5)";
      header.style.mixBlendMode = "normal";
      return;
    };

    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    header.style.mixBlendMode = "difference";
  }, 50);
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      pageScrollAtTop(lastKnownScrollPosition);
      ticking = false;
    });
    
    ticking = true;
  }
});