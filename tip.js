let container = document.getElementById("tipCont");
let tip_container = document.getElementById("tipValue");
let total_container = document.getElementById("totalWithTip");
let bill_each_container = document.getElementById("billEach");

container.addEventListener("input", () => {
    let bill = parseFloat(document.getElementById("yourBill").value);
    const tipInput = parseFloat(document.getElementById("tipInput").value);
    const splitInput = parseFloat(document.getElementById("splitInput").value);

    if (isNaN(bill)) bill = 0;

    if (bill > 0 && splitInput >= 1){
        const tipValue = bill * (tipInput / 100);
        const total = bill + tipValue;
        const totalSplit = total / splitInput;
    
        tip_container.innerText = tipValue.toFixed(2);
        total_container.innerText = total.toFixed(2);
        bill_each_container.innerText = totalSplit.toFixed(2);
    } else {
        tip_container.innerText = "0.00";
        total_container.innerText = "0.00";
        bill_each_container.innerText = "0.00";
    }
});