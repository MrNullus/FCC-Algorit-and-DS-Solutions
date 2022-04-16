function convertToRoman(num) {
    //*** criar tabela que mapeia os numerais romanos
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    //*** criar string construtura (accumulator)
    let accumulator = '';

    //*** loop para acessar a tabela
    for (const key in lookupTable) {
        const numberValue = lookupTable[key];

        //*** se (currentNumber <= num) then subtract currentNumber from num. Add symbol to accumulator
        while(numberValue <= num) {
            num -= numberValue;
            accumulator += key;
        }
    }

    //*** return acumulator
    return accumulator;
}

console.log(convertToRoman(999999999126));
