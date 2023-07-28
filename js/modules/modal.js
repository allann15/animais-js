export default class Modal{
    constructor(login, popup, fechar){
        this.botaoLogin = document.querySelector(login);
        this.popUp = document.querySelector(popup);
        this.botaoFechar = document.querySelector(fechar);
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
    }

//'[data-modal="abrir"]'
//'.modal-container'
//'[data-modal="fechar"]'


toggleModal(){
    
    this.popUp.classList.toggle('ativo')
}

eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
}


fecharModal(event) {
    if(event.target === this.popUp){
        this.toggleModal();
    }
}
modalEvents(){
    
        this.botaoLogin.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.popUp.addEventListener('click', this.fecharModal);
    
}
init(){
    if(this.botaoLogin && this.botaoFechar && this.popUp){
        this.modalEvents();
    }
    return this;
}

};