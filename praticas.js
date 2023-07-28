 
const imagens = document.querySelectorAll('img');
console.log(imagens)

const imagemInicio = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagemInicio)

const links = document.querySelectorAll('[href^="#"]');
console.log(links)

const primeiroh2 = document.querySelector('.animais-descricoes h2');
console.log(primeiroh2)

const ultimop = document.querySelectorAll('p');
console.log(ultimop[ultimop.length - 1])

ultimop.forEach((paragrafo) => {
    return console.log(paragrafo.innerText);
})

// exercicio classes e atributos

const adicionarClasse = document.querySelectorAll('.menu a');

const adicinado = adicionarClasse.forEach((ativo) => {
    
    return console.log(ativo.classList.add('ativo'));
})

for (let i = 1; i < adicionarClasse.length; i++) {
    adicionarClasse[i].classList.remove('ativo');
  }

//
const verificacao = document.querySelectorAll('img')

verificacao.forEach((descricao) => {
    return console.log(descricao.hasAttribute('alt'))
})

const modificacao = document.querySelector('a[href^="https"]')
modificacao.setAttribute('href', '#contato')
console.log(modificacao)

// exercicio dimensoes e distancias

const primImg = document.querySelector('img');
let imagem = primImg.getBoundingClientRect();
console.log(imagem.top);


function somaImagens(){
const allImg = document.querySelectorAll('img');

let soma = 0
allImg.forEach((imagens) => {
    soma += imagens.offsetWidth;
    
})
    console.log(soma)
}
window.onload = () => {
    somaImagens();
}

const menu = document.querySelector('.menu')
if(window.innerWidth < 720){
    menu.classList.add('menu-mobile')
}

//

const linksTamanho = document.querySelectorAll('a');
linksTamanho.forEach((link) => {
    const linkwidth = link.offsetWidth;
    const linkheight = link.offsetHeight;

    if(linkheight >= 48 && linkwidth >= 48){
        console.log('possui acessibilidade');
    }else{
        console.log('nao possui acessibilidade')
    }
})

// Eventos

const linkInternos = document.querySelectorAll('.menu a')

function clickado (event) {
    event.preventDefault();
    linkInternos.forEach((item) => {
        item.classList.remove('ativado');
    })
    event.currentTarget.classList.add('ativado');
}


linkInternos.forEach((elementos) => {
    elementos.addEventListener('click', clickado)
})

const elementosSite = document.querySelectorAll('body *');

function informacoes(event){
    console.log(event.currentTarget);
    // para remover era so fazer event.currentTarget.remove();
}

elementosSite.forEach((itens) => {
    itens.addEventListener('click', informacoes)
})

// para pegar da janela
const textos = document.querySelectorAll('p');

function tecla(event){
    if(event.key === 't'){
        textos.forEach((texto) => {
            texto.classList.toggle('aumentar')
        })
    }
}

window.addEventListener('keydown', tecla)

// Exercícios de Traversing e Manipulação

const Novomenu = menu.cloneNode(true)

const footer = document.querySelector('.copy');

footer.appendChild(Novomenu);


const pergunta = document.querySelector('dl');

console.log(pergunta.children[0].nextElementSibling);


const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

//faq.replaceChild(animais, pergunta);

