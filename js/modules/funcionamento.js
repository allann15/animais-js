export default class Funcionamento{

    constructor(funcionamento){
        this.diasFuncionamento = document.querySelector(funcionamento)
    }
    //'[data-semana]'
    dadosFuncionamento(){
        this.semana = this.diasFuncionamento.dataset.semana.split(',').map(Number);
   
        this.horario = this.diasFuncionamento.dataset.horario.split(',').map(Number);
    }
    dadosAgora(){
        this.dataAtual = new Date();
        this.diaAtual = this.dataAtual.getDay();
        this.horarioAtual = this.dataAtual.getUTCHours() - 3;
    }
    
    Aberto(){
    const semanaAberta = this.semana.indexOf(this.diaAtual) !== -1;

    const horarioAberto = (semanaAberta && this.horarioAtual >= this.horario[0] && this.horarioAtual < this.horario[1]);
        
    return semanaAberta && horarioAberto
    //diasFuncionamento.classList.add('aberto')
    }
    ativarAberto(){
        if(this.Aberto()){
            this.diasFuncionamento.classList.add('aberto')
        }
        
    }

    init(){
        if(this.diasFuncionamento){
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativarAberto()
        }
        return this
    }

    
}