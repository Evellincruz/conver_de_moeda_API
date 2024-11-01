const apikey = '2b1083c5a2151fdf5e5f2844'; 
const apiURL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;

// Função para buscar taxa de cambio da API

async function getExchageRate(fromCurrency, toCurrency){
    try{
        const response = await fetch(`${apiURL}${fromCurrency}`);
        const data = await response.json();
 
        if(data.result === 'success'){
            return data.conversion_rates[toCurrency];
        }else{
            throw new Error('Error ao buscar a taxa de câmbio');
        }
    }catch(error){
        console.error("Erro:", error);
        return null;
    }
}