
function reloadWindow(){
    window.location.reload();
}

function checkAndSetMenuPosition(){
    const container = document.querySelector('.container');
    const menu = document.querySelector('#menu');
    let width = container.clientWidth
    
    if(width<749){
        menu.classList.add('menu');
        menu.classList.remove('menu-big');
    }else{
        menu.classList.remove('menu');
        menu.classList.add('menu-big')
    }
}
checkAndSetMenuPosition();
window.addEventListener('resize',function(){
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        checkAndSetMenuPosition();
        // reloadWindow();
    },50);
})

document.querySelector()