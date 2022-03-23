
   let menu = document.querySelector("#menu");
   let dropMenu = document.querySelector("#dropMenu");
   let closeMenu = document.querySelector("#close");
   
   menu.addEventListener("click", () => {
      dropMenu.style.display = "block";
   });
   
   closeMenu.addEventListener("click", () => {
      dropMenu.style.display = "none";
   });
   
