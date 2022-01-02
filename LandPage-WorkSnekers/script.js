document.getElementById("borda1").addEventListener('click', borda2);
document.getElementById("borda2").addEventListener('click', borda1);
document.getElementById("borda3").addEventListener('click', borda3);
document.getElementById("borda4").addEventListener('click', borda4);
document.getElementById("lupa").addEventListener('click', animacao_barra);
document.getElementById("fechar").addEventListener('click', fechar_barra);

document.getElementById("t1").addEventListener('click', mostrar_tenis1);
document.getElementById("t2").addEventListener('click', mostrar_tenis2);
document.getElementById("t3").addEventListener('click', mostrar_tenis3);
document.getElementById("t4").addEventListener('click', mostrar_tenis4);

document.getElementById("icone-menu").addEventListener('click', menu);
document.getElementById("fechar-menu").addEventListener('click', fechar_menu);



function borda1(){
    document.getElementById  ("borda2").style.borderBottom = "2px solid #fc0303";
    document.getElementById  ("borda1").style.borderBottom = "none";
    document.getElementById  ("borda3").style.borderBottom = "none";
    document.getElementById  ("borda4").style.borderBottom = "none";
}

function borda2(){
    document.getElementById("borda1").style.borderBottom = "2px solid #fc0303";
    document.getElementById("borda2").style.borderBottom = "none";
    document.getElementById("borda3").style.borderBottom = "none";
    document.getElementById("borda4").style.borderBottom = "none";
}

function borda3(){
    document.getElementById("borda3").style.borderBottom = "2px solid #fc0303";
    document.getElementById("borda1").style.borderBottom = "none";
    document.getElementById("borda2").style.borderBottom = "none";
    document.getElementById("borda4").style.borderBottom = "none";
}

function borda4(){
    document.getElementById("borda4").style.borderBottom = "2px solid #fc0303";
    document.getElementById("borda1").style.borderBottom = "none";
    document.getElementById("borda3").style.borderBottom = "none";
    document.getElementById("borda2").style.borderBottom = "none";
    
}

function animacao_barra(){
    let search = document.getElementById("search");
    let lupa = document.getElementById("lupa");
    let fechar = document.getElementById("fechar")

    search.style.display = "inline";
    lupa.style.display = "none";
    fechar.style.display = "inline";


    search.style.animation = "pesquisa 1.5s normal 1";
    fechar.style.animation = "girar 0.9s linear 1";

}

function fechar_barra(){

    let search = document.getElementById("search");
    let lupa = document.getElementById("lupa");
    let fechar = document.getElementById("fechar")

    search.style.animation = "fechar_pesquisa 1.5s both 1";
    // fechar.style.animation = "fechar_girar 0.9s linear 1";


    search.style.display = "none";
    fechar.style.display = "none";
    lupa.style.display = "inline";

}

function mostrar_tenis1(){
    let mostrar_t1 = document.getElementById("tenis1");
    let mostrar_t2 = document.getElementById("tenis2");
    let mostrar_t3 = document.getElementById("tenis3");
    let mostrar_t4 = document.getElementById("tenis4");

    

    mostrar_t1.style.display="inline";
    mostrar_t2.style.display="none";
    mostrar_t3.style.display="none";
    mostrar_t4.style.display="none";


    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");

    t1.style.border="2px solid #9ab0a4";
    t2.style.border="none";
    t3.style.border="none";
    t4.style.border="none";

}
function mostrar_tenis2(){
    let mostrar_t1 = document.getElementById("tenis1");
    let mostrar_t2 = document.getElementById("tenis2");
    let mostrar_t3 = document.getElementById("tenis3");
    let mostrar_t4 = document.getElementById("tenis4");

    mostrar_t1.style.display="none";
    mostrar_t2.style.display="inline";
    mostrar_t3.style.display="none";
    mostrar_t4.style.display="none";

    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");

    t1.style.border="none";
    t2.style.border="2px solid #252326";
    t3.style.border="none";
    t4.style.border="none";
}
function mostrar_tenis3(){
    let mostrar_t1 = document.getElementById("tenis1");
    let mostrar_t2 = document.getElementById("tenis2");
    let mostrar_t3 = document.getElementById("tenis3");
    let mostrar_t4 = document.getElementById("tenis4");

    mostrar_t1.style.display="none";
    mostrar_t2.style.display="none";
    mostrar_t3.style.display="inline";
    mostrar_t4.style.display="none";

    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");

    t1.style.border="none";
    t2.style.border="none";
    t3.style.border="2px solid #ba646d";
    t4.style.border="none";
}
function mostrar_tenis4(){
    let mostrar_t1 = document.getElementById("tenis1");
    let mostrar_t2 = document.getElementById("tenis2");
    let mostrar_t3 = document.getElementById("tenis3");
    let mostrar_t4 = document.getElementById("tenis4");

    mostrar_t1.style.display="none";
    mostrar_t2.style.display="none";
    mostrar_t3.style.display="none";
    mostrar_t4.style.display="inline";

    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");

    t1.style.border="none";
    t2.style.border="none";
    t3.style.border="none";
    t4.style.border="2px solid #171717";
}

function menu(){
    let menu = document.getElementById("menu");
    let menu_ul = document.getElementById("menu-ul");
    let logo = document.getElementById("logo");
    let icone_menu = document.getElementById("icone-menu");
    let fechar_menu = document.getElementById("fechar-menu");
    let icone_fundo = document.getElementById("icone-fundo");

    menu.style.display="flex";
    menu.style.justifyContent="center";
    menu_ul.style.flexDirection="column";
    logo.style.display="none";

    icone_menu.style.display="none";
    fechar_menu.style.display="flex";

    menu.style.animation="pintar 1s both 1";

    fechar_menu.style.animation = "girar 0.9s linear 1";
    icone_menu.style.animation = "girar 0.5s reverse 1";

}
function fechar_menu(){
    let menu = document.getElementById("menu");
    let fechar_menu = document.getElementById("fechar-menu");
    let icone_menu = document.getElementById("icone-menu");
    let icone_fundo = document.getElementById("icone-fundo");

    icone_menu.style.display="flex";
    fechar_menu.style.display="none";
 
    menu.style.display="none";
}