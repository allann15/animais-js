export default function initBitcoi(url, target){

    const valor = document.querySelector(target);


    async function buscarValor(){
        try{
        const busca = await fetch(url);
        const transformar = await busca.json()
        valor.innerText = (1000 / transformar.BRL.sell).toFixed(4);
        }
        catch(erro){
            console.log(erro)
        }
        
        
    }
    buscarValor()
}

