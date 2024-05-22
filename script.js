const header = document.querySelector("header");

let lastKnownScrollPosition = 0;
let ticking = false;

const pageScrollAtTop = (scrollPos) => {
  setTimeout(() => {
    if (scrollPos === 0) {
      header.style.backgroundColor = "#FFFFFF";
      header.style.boxShadow = "0 0 16px rgba(0, 0, 0, 0.5)";
      return;
    };

    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
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