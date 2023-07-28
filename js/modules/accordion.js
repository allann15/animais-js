export default class AccordionList{
    constructor(links){
        this.accordionList = document.querySelectorAll(links);
        if(this.accordionList.length){
            this.accordionList[0].classList.add('ativo')
        }
        this.eventoPerguntas = this.eventoPerguntas.bind(this);
    }

    
    //'.js-accordion .container'
    
    
   ativarPerguntas(){
        
        // outra soluca event.nextElementSibling.currentTarget.classList.toggle('ativo');
        this.classList.toggle('ativo');
        
    }
    
    eventoPerguntas(perguntas){
        perguntas.addEventListener('click', this.ativarPerguntas);
    }
    addLinkEvent(){
        this.accordionList.forEach(this.eventoPerguntas);
    }
    
    init(){
        if(this.accordionList.length){
            this.addLinkEvent();
        }
        return this;
    }
    
}