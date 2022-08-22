
// banking manipulation

// deposite
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input').value;

    const depositeCurrent = document.getElementById('deposite-current').innerText;

    const totalAmount = parseFloat(depositeCurrent) + parseFloat(depositeInput);

    document.getElementById('deposite-current').innerText = parseFloat(totalAmount);

    const currentBalanceText = document.getElementById('balance-current').innerText;
    const currentBalance = parseFloat(currentBalanceText);
    const newBalance = currentBalance + parseFloat(depositeInput)
    document.getElementById('balance-current').innerText = parseFloat(newBalance);

    document.getElementById('deposite-input').value = '';
})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input').value;
    const withdrawCurrent = document.getElementById('withdraw-current').innerText;
    const currentBalanceText = document.getElementById('balance-current').innerText;
    const currentBalance = parseFloat(currentBalanceText);
    if (currentBalance < parseFloat(withdrawInput)) {
        alert('Insufficient Amount for this transection');
    }
    else {
        const totalWithdraw = parseFloat(withdrawCurrent) + parseFloat(withdrawInput);
        document.getElementById('withdraw-current').innerText = parseFloat(totalWithdraw);

        const newBalance = currentBalance - parseFloat(withdrawInput)
        document.getElementById('balance-current').innerText = parseFloat(newBalance);
    }

    document.getElementById('withdraw-input').value = '';
})