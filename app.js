
const sum = (a,b) => {
    return a + b
}


module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
} 

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen
}

const fromYentoPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound
}

module.exports = {sum, fromEuroToDollar, fromDollartoYen, fromYentoPound}