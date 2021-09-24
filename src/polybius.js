// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");
    const inputArrayWithNoSpaces = inputArray.filter(char => char != " ");
    const charCodeA = "a".charCodeAt(0);
   
    if (encode) {
      const encodedArray = inputArray.map(char => {
        const currentCharCode = char.charCodeAt(0);

        if (currentCharCode < charCodeA || currentCharCode > "z".charCodeAt(0)) {
          return char;
        }
        
        let charIndexInAlphabet = (currentCharCode - charCodeA) + 1;
        let coordinates = "";

        //case for letters "I/J":
        if (charIndexInAlphabet === 9 || charIndexInAlphabet === 10) {
          return "42";
        }

        if (charIndexInAlphabet > 10) {
          charIndexInAlphabet -= 1;
        }

        let column = "" + charIndexInAlphabet % 5;
        if (column === "0") {
          column = "5";
        }
        const row = "" + Math.ceil(charIndexInAlphabet / 5);
        return coordinates.concat(column, row);
        
      });
      return encodedArray.join("");

    } else if ((inputArrayWithNoSpaces.length % 2) != 0) {
      return false;

    } else {
      let currentInputCoordinates = "";
      const decodedInput = inputArray.reduce((acc, char) => {
        if (char === " ") {
          acc += char;
          return acc;
        }

        currentInputCoordinates += char;

        if(currentInputCoordinates.length < 2) {
          return acc;
        } 

        if(currentInputCoordinates === "42") {
          currentInputCoordinates = "";
          return acc + "(i/j)";
        }

        const column = parseInt(currentInputCoordinates[0]);
        const row = parseInt(currentInputCoordinates[1]);
        const charIndexInAlphabet = ((row - 1) * 5) + column;
        let charCode = (charCodeA + charIndexInAlphabet) - 1;

        if(charCode > "i".charCodeAt(0)) {
          charCode += 1;
        }
        
        acc += String.fromCharCode(charCode);
        currentInputCoordinates = "";
        return acc;

      }, "");
      return decodedInput;

    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
