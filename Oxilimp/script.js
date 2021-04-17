function menuLateral(){
    let menu = document.getElementById('menu');
    let aberto = "0px";
    let fechado = "-330px";
    if(menu.style.left == aberto){
        menu.style.left = fechado;
        document.getElementById('barra').style.transform = 'scaleX(1)';
    }else{
        menu.style.left = aberto;
        document.getElementById('barra').style.transform = 'scaleX(-1)';
    }
}