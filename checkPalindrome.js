function checkPalindrome(str) {
    //*** colocar entrada como lowercase
    //*** separar caracteres alfanumericos (letras e números)
    //*** string retornada === stringRevertida
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);

    return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}


console.log(checkPalindrome("opo"));
