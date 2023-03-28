const result = document.querySelector('.result')
const inp = document.querySelector('.in')
const exchange = document.getElementById('exchange')
const name = document.querySelector('.nameMoney')



exchange.addEventListener('change',() => {
    const amount = inp.value
    const mode = exchange.value
    var requestURL = `https://api.exchangerate.host/latest?base=KGS&symbols=${mode}&places=2&amount=${amount}`
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var response = request.response;
        result.innerHTML = Object.values(response.rates)
        name.innerHTML = `${mode}`
    }
})
exchange.dispatchEvent(new Event('change'));
inp.dispatchEvent(new Event('input'));

