import apikey from "./apikey.js";
// console.log(apikey);

const exchange = document.getElementById("exchange");
const exit = document.getElementById("exit");

exchange.addEventListener("click", () => {
    const entryValue = document.getElementById("entry").value;
    const fromCurr = document.getElementById("from").value;
    const toCurr = document.getElementById("to").value;

    // console.log("From currency:", fromCurr);
    // console.log("To currency:", toCurr);
    // console.log("Entry value:", entryValue);

    let outValue;

    fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurr}`, {
        method: 'GET',
    })
    .then(async res => {
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Error: ${errorData['error-type']}`);
        }
        return res.json();
    })
    .then(res => {
        for (const curr in res.conversion_rates){
            if (curr == toCurr) {
                outValue = entryValue * res.conversion_rates[curr];
            }
        }

        exit.innerText = outValue;
        // console.log(outValue);
    })
    .catch(e => console.error(e.message));
});

