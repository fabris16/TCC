function mensagem (){
   let saudação= prompt (`oiie , qual é o seu nome?`)
   let nota= prompt (`Você é tão boaa ${saudação}, qual nota você da para Ana?`)
   let fim= prompt (`Obrigado pelo seu feedback S2, Ana falou que você é tão boaa`)
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;
   
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= slides.length) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    
    // Controle dos botões
    prevBtn.disabled = (currentSlide === 0);
    nextBtn.disabled = (currentSlide === slides.length - 1);
}

function verificarEmail() {
    const email = document.getElementById('emailInput').value.trim();
    const mensagem = document.getElementById('mensagem');

    
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.(com|com\.br|org|net|edu|unioeste|escola|gov|pr|br)$/;

    mensagem.classList.remove('valido', 'invalido');

    if (email === '') {
        mensagem.textContent = 'Por favor, digite um e-mail.';
        mensagem.classList.add('invalido');
        return;
    }

    if (regexEmail.test(email)) {
        mensagem.textContent = 'E-mail válido!';
        mensagem.classList.add('valido');
    } else {
        mensagem.textContent = 'E-mail inválido!';
        mensagem.classList.add('invalido');
    }
}