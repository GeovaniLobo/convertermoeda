const convertButton = document.querySelector(".convert-button");
const currencyFromSelect = document.querySelector(".currency-from");
const currencyToSelect = document.querySelector(".currency-to");
const currencyImageFrom = document.querySelector(".currency-img-from");
const currencyImageTo = document.querySelector(".currency-img-to");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueToConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 10.2;
    const realToday = 1;

    let convertedValue;

    if (currencyFromSelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday;
        currencyImageFrom.src = "./img/dolar.png";
    } else if (currencyFromSelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday;
        currencyImageFrom.src = "./img/euro.png";
    } else if (currencyFromSelect.value === "libra") {
        convertedValue = inputCurrencyValue / libraToday;
        currencyImageFrom.src = "./img/libra.png";
    } else if (currencyFromSelect.value === "real") {
        convertedValue = inputCurrencyValue / realToday;
        currencyImageFrom.src = "./img/real.png";
    }

    if (currencyToSelect.value === "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue * dolarToday);
        currencyImageTo.src = "./img/dolar.png";
    } else if (currencyToSelect.value === "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue * euroToday);
        currencyImageTo.src = "./img/euro.png";
    } else if (currencyToSelect.value === "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue * libraToday);
        currencyImageTo.src = "./img/libra.png";
    } else if (currencyToSelect.value === "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue * realToday);
        currencyImageTo.src = "./img/real.png";
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

convertValues();

currencyFromSelect.addEventListener("change", convertValues);
currencyToSelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);
