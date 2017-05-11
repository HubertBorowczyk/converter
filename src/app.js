document.addEventListener('DOMContentLoaded', () => {

    const createNewTab = (amount) => {
        let resultsWrapper = document.getElementById('results_wrapper');
        let resultTab = document.createElement('li');
        let datetime = new Date().toLocaleString();
        resultTab.classList = 'result';
        resultTab.innerText = amount;
        resultTab.setAttribute('data-content', datetime);
        resultsWrapper.appendChild(resultTab);
    };

    const calculate = (amount) => {
        let random = Math.floor(Math.random() * 101);
        let exchangeRate = 4.2 * (1 + (random - 50) / 1000);
        return amount * exchangeRate;
    };

    let btn = document.getElementById('btn_submit');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let eurAmount = document.getElementById('amount_input').value;
        let convertedAmount = calculate(eurAmount).toFixed(3);
        createNewTab(convertedAmount);
    });
});

