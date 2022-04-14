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

    const checkIfUppercase = (str) => {
    str == str.toUpperCase() && str != str.toLowerCase(); 
    }


    // str = str.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let cipherAlphabet = 'xyzabcdefghijklmnopqrstuvw';

    let alphArr = Array.from(alphabet);
    let ciphArr = Array.from(cipherAlphabet);
    let strArr = Array.from(str);

    let result = []; 

    for(let i = 0; i < strArr.length; i++){


    if(checkIfUppercase(strArr[i])){
        let upperCaseAlphabet = alphabet.toUpperCase(); 
        let upperCaseCipher = cipherAlphabet.toUpperCase();
    }


        let letter = strArr[i];
        let index = alphArr.indexOf(letter);
        result.push(ciphArr[index]);
    }

    return result.join('').toString();
}