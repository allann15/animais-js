export default class ScrollSuave{
    constructor(links,options){
        this.linksInternos = document.querySelectorAll(links)
        if(options === undefined){
            this.options = {
                behavior: 'smooth',
                block: 'start'
            } 
        }else{
            this.options = options
        }
        this.movimentacaoSuave = this.movimentacaoSuave.bind(this);
    }    

    //'[data-menu="suave"] a[href^="#"]'
    
    
    movimentacaoSuave (event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const distancia = section.offsetTop;
        
        section.scrollIntoView(this.options)
    
    
        /* uma solucao window.scrollTo({
            top: distancia,
            behavior: 'smooth'
        });*/
    }
    addLinkEvent(){
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', this.movimentacaoSuave)
        })
    }
    

    init(){
        if(this.linksInternos.length){
            this.addLinkEvent()
        }
        return this;
        
    }
    }