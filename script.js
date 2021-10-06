// pra fazer o efeito de scroll
    // pega a distancia do elemento selecionado até o topo
function getDistanceFromTheTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};
    // efeito scroll
function nativeScroll(distaceFromTheTop) {
    window.scroll({
        top: distaceFromTheTop,
        behavior: 'smooth'
    });
};
    // funcao que pega a distancia e faz o efeito scroll
function scrollToSection(event) {
    event.preventDefault();
    const distaceFromTheTop = getDistanceFromTheTop(event.target);
    nativeScroll(distaceFromTheTop);
};
    // event listener
const links = document.querySelectorAll('.link_move_screen');
links.forEach(link => {
    link.addEventListener('click', scrollToSection);
});


document.addEventListener('scroll', function() {
    // verifica se a tela é maior que 750px pra poder ativar o menu flutuante
    if (window.innerWidth > 750) {
        // animação do menu flutuante 
        const topoFixo = document.querySelector(".topoFixo");
        if (window.scrollY > 300) {
            topoFixo.style.display = "flex";
            topoFixo.style.animation = "mover 0.5s";
            topoFixo.style.animationFillMode = "forwards";
        }
        else if (window.scrollY <= 300 && topoFixo.style.display == "flex") {
            topoFixo.style.animation = "retornar 0.5s";
            topoFixo.style.animationFillMode = "forwards";
        }
    }
    // se for menor que 750px ele não ativa o menu flutuante
    else if (window.innerWidth < 750) {
        document.querySelector(".topoFixo").style.display = 'none';
    }  
});

// scroll da logo pro topo da pagina
const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

// botão scroll para o topo
const seta_div =document.querySelector('.seta_div')
seta_div.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});


// menu mobile
const menuMobileButton = document.querySelector('.menu_celular_img');
menuMobileButton.addEventListener('click', function() {
    // Faz a animação de slide do menu mobile lateral
    const menuMobile = document.querySelector('.menu_celular ul');
    menuMobile.style.animation = 'slideMenu .5s';
    menuMobile.style.animationFillMode = "forwards";

    // Faz aparecer o botão 'X' do menu pra fazer o retorno do menu lateral
    const mobileButtonReturn = document.querySelector('.menu_celular_cancelar');
    mobileButtonReturn.style.display = 'block';

    // Faz a animação de retorno do slide mobile lateral
    mobileButtonReturn.addEventListener('click', function() {
        menuMobile.style.animation = 'slideMenuReturn .5s';
        menuMobile.style.animationFillMode = "forwards";
        mobileButtonReturn.style.display = 'none';
    });
});
