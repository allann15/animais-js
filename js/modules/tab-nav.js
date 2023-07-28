export default class NavegacaoFotoTexto{

    constructor(imagens, conteudo){
        this.animaisImagens = document.querySelectorAll(imagens);
        this.animaisConteudo = document.querySelectorAll(conteudo);
        this.activeClass = 'ativo'
    }

    
    activeTab (index){
    
        this.animaisConteudo.forEach((sections) => {
            sections.classList.remove(this.activeClass);
        })
        const tipoAnimacao = this.animaisConteudo[index].dataset.anime;
        
        this.animaisConteudo[index].classList.add(this.activeClass, tipoAnimacao);
    
        /* Para se eu quiser exibit todos os textos
        if(animaisConteudo[index].getElementsByClassName('ativo')){
            animaisConteudo[index].classList.remove('remover');
        }
        animaisConteudo.forEach((imagem) => {
            if(imagem.getElementsByClassName('remover')){
                imagem.classList.remove('ativo')
            }
        })*/
        
    }

    addTabEvent(){
        this.animaisImagens.forEach((imagem, index) => {
            imagem.addEventListener('click', () => {
                this.activeTab(index);
            });
        });
    }


    init(){
        if (this.animaisConteudo.length && this.animaisConteudo.length) {
            this.activeTab(0);
            this.addTabEvent();
        }
    }
    
    //'[data-tab="menu"] li'
    //'[data-tab="content"] section'
    
    
}

 
