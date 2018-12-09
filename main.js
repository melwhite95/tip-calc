let amount = document.getElementById('amount');
let percent = document.getElementById('percent');
let calculate = document.getElementById('calculate');
let total = document.getElementById('total');
let tipDisplay = document.getElementById('tip');


calculate.onclick = () => {
    const bill = Number(amount.value);
    const tip = Number(percent.value);
    const tipTotal = bill * tip / 100;

    console.log(tipTotal.toFixed(2))
    const totalBill = tipTotal + bill;
    tipDisplay.innerHTML = '$' + tipTotal;
    total.innerHTML = '$' + totalBill;
}
