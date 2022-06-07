/*=========== MOSTRAR MENU ==========*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*========  MOSTRAR MENU ========*/
/* validar se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======== ESCONDER MENU ========*/
/* validar se a constante existe */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*====== REMOVER MENU MÓVEL ======*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Quando clicamos em cada link de navegação, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====== ALTERAR CABEÇALHO DE FUNDO ======*/
function scrollHeader(){
    const header = document.getElementById('header')
    //quando a rolagem for maior que 100 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*====== SWIPER DESCOBERTA ======*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
       
    },
   
});


/*========= VIDEO =============*/
const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

function playPause(){
    if (videoFile.paused) {
        //Reproduzir vídeo
        videoFile.play()

        // Mudamos o ícone
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }else{
        //Pausar vídeo
        videoFile.pause()

        //Mudamos o ícone
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    //vídeo termina, mudança de ícone
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

//terminou, quando o vídeo termina
videoFile.addEventListener('ended', finalVideo)


/*=========== MOSTRAR ROLAGEM PARA CIMA ===========*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Quando a rolagem for maior que 200 de altura da janela de visualização, adicione a classe show-scroll à tag
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');    
}
window.addEventListener('scroll', scrollUp)

/*============ LINK ATIVO DA SEÇÃO DE ROLAGEM ============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*================ TEMA LUZ ESCURO ==============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Tópico selecionado anteriormente (se o usuário for selecionado)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//Validamos se o usuário já escolheu um tópico
if(selectedTheme){
    //Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    //Adicione ou remova o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // salvamos o tema e o ícone atual que o usuário escolher
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-theme', getCurrentIcon())
})

/*============ ROLAGEM DE ANIMAÇÃO DE REVELAÇÃO ===========*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
            .video__description,
            .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay,
            .video__content,
            .subscribe__form`,{
    origin: 'right',
    interval: 100,
})