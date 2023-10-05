const nav = document.querySelector ("#nav");
const menu = document.querySelector ("#menu");

nav.addEventListener("click", () =>{
    if ( menu.classList.contains("hidden")){
      menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
  })