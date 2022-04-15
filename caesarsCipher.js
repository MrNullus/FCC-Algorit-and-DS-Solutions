const alphabet = [
    "A", "B", "C", "D",
    "E", "F", "G", "H",
    "I", "J", "K", "L",
    "M", "N", "O", "P",
    "Q", "R", "S", "T",
    "U", "V", "W", "X",
    "Y", "Z"
];

function rot13(str) {
    //*** criar acumulator */
    let accumulator = ''

    //*** vai passar pela string */
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isALetter = alphabet.includes(char);

        //*** se o caracter não for letra, adicionar ao acc */
        if (isALetter === false) {
            accumulator += char;
            
        } else {
            //*** caso contrario, rodar + ou - 13, adicionar acc */
            //! 13 é a quantidade de vezes que vai rodar
            const charIndex = alphabet.findIndex((c) => c === char);

            accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
        }
    }

    //** retornar acumulator */
    return accumulator;
}


console.log(rot13("FREE CODE CAMP"));