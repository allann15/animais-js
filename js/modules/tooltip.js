export default class Tooltip {

    constructor(tooltips){
        this.localizacao = document.querySelectorAll(tooltips);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    
    //'[data-tooltip]'
    addTooltipEvent(){
        this.localizacao.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver);
        })
    }
    onMouseOver(event){
       this.criarTooltipBox(event.currentTarget);
       
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    }
    onMouseMove (event) {
            
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            if(event.pageX + 240 > window.innerWidth){
                this.tooltipBox.style.left = `${event.pageX - 240}px`;
            }else{
                this.tooltipBox.style.left = `${event.pageX + 20}px`;
            }
          
        
    }
    onMouseLeave (event) {
        
            this.tooltipBox.remove();
            event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
            event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
        
    }
    criarTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const conteudo = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = conteudo;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox
        
    }
    init(){
        if(this.localizacao.length){
            this.addTooltipEvent()
        }
        return this
    }
}