const sideMenu = document.querySelector(".sideMenu");

function sideMenuCollapse(){
    if (sideMenu.style.right === '-150%'){
        sideMenu.style.right = '0';
    }else {
        sideMenu.style.right = '-150%';
    }
}
