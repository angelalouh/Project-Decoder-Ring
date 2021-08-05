// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26) {
      return false;
    } 

    const alphabetArray = alphabet.split("");
    const sortedAlphabetArray = alphabetArray.sort();

    let isAlphabetUnique = true;
    sortedAlphabetArray.forEach((char, index) => {
      if (index < sortedAlphabetArray.length - 1) {
        const nextChar = sortedAlphabetArray[index + 1];
        if (char === nextChar){
          isAlphabetUnique = false;
        }
      }
    });
    
    if(!isAlphabetUnique) {
      return false;
    }

    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");
    const charCodeA = "a".charCodeAt(0);

    if (encode) {
      const encodedArray = inputArray.map(char => {
        if(char === " ") {
          return char;
        }
        const charIndex = char.charCodeAt(0) - charCodeA;
        return alphabet[charIndex];
      });
      return encodedArray.join("");
    }

    const decodedArray = inputArray.map(char => {
      if(char === " ") {
        return char;
      }
      const charIndex = alphabet.indexOf(char);
      const charCode = charCodeA + charIndex;
      return String.fromCharCode(charCode);
    });
    return decodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
