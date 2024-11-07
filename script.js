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

document.getElementById('currencyForm').addEventListener('submit', async function(event){
    event.preventDefault();
 
    const valor = parseFloat(document.getElementById('Tamanho').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
 
    const exchangeRate = await getExchageRate(fromCurrency, toCurrency);
 
    if(exchangeRate){
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent =`Resultado ${convertedValue.toFixed(2)} ${toCurrency}`;
    }else{
        alert('Erro de buscar cotação. Tente novamente')
    }
 
});
