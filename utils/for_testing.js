const palindrome = (string) => {

    if(typeof string == 'undefined') return
 
    return string
      .split('')
      .reverse()
      .join('')
 }
 
const average = array => {
     let sum = 0;
     array.forEach(num => { sum += num });
     return sum / array.length;
 }

const square = num => {
    if(num < 0) return NaN;
    return Math.sqrt(num);
};

const numPar = numero => {
    return numero % 2 === 0;
}

const esHiato = (string) => {
    if(typeof string == 'undefined') {
        return false;
    }
    const vocales = ["a", "e", "i", "o", "u"];
    const letra = string.toLowerCase().split('');

    for (let i = 0; i < letra.length - 1; i++) {
        const letraActual = letra[i];
        const letraSiguiente = letra[i+1]

        if (
            vocales.includes(letraActual) &&
            vocales.includes(letraSiguiente) &&
            letraActual !== "i" &&
            letraActual !== "u"
        ) {
            return true;
        }
    }

    return false;
}

module.exports = {
     palindrome,
     average,
     square,
     numPar, 
     esHiato
}