let sideMenuOpen = document.querySelector(".sideMenuOpen");
let sideMenuClose = document.querySelector(".sideMenuClose");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let sideMenu = document.querySelector(".sideMenu");

hamburgerMenu.addEventListener("click",function sideMenuCollapse(){
    if (sideMenu.style.right = '-50%'){
        sideMenu.style.right = '0';
    }else {
        sideMenu.style.right = '-50%';
    }
})
