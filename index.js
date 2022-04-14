export const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

// export default function capitalize(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const reverseWord = (x) => {
//     let newX = x
// };

export const reverseString = (str) => Array.from(str).reverse().join('').toString();

class Calculator {
    constructor(x,y){
        this.x = x,
        this.y = y
    }
    add = () => this.x + this.y
    subtract = () => this.x - this.y
    divide = () => this.x / this.y 
    multiply = () => this.x * this.y 
}

export let oneCalc = new Calculator();


export function caesar(str){
    
    function checkIfLowerCase(str){
        return str == str.toLowerCase() && str != str.toUpperCase();
    }

    function checkIfUppercase(str) {
    return str == str.toUpperCase() && str != str.toLowerCase(); 
    }

    
    // str = str.toLowerCase();
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let cipherAlphabet = 'xyzabcdefghijklmnopqrstuvw';
    let upperCaseAlphabet = alphabet.toUpperCase(); 
    let upperCaseCipher = cipherAlphabet.toUpperCase();

    let alphArr = Array.from(alphabet);
    let ciphArr = Array.from(cipherAlphabet);
    let strArr = Array.from(str);

    let upperAlphArr = Array.from(upperCaseAlphabet);
    let upperCipherArr = Array.from(upperCaseCipher);

    let result = []; 

    for(let i = 0; i < strArr.length; i++){

    if(strArr[i] == ' ') {
        result.push(' ');
        continue;
    }

    if(checkIfUppercase(strArr[i])){
        let capitalizedLetter = strArr[i];
        let myIndex = upperAlphArr.indexOf(capitalizedLetter);
        result.push(upperCipherArr[myIndex]);
        continue;
    }


        let letter = strArr[i];
        let index = alphArr.indexOf(letter);
        result.push(ciphArr[index]);
    }

    return result.join('').toString();
}