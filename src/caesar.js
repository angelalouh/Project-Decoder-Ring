// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {

    // returns false if shift value is equal to 0, less than -25, greater than 25, or not present
    if(!shift || shift < -25 || shift > 25) {
      return false;
    }

    // ignores capital letters when encoding or decoding
    const lowerCaseInput = input.toLowerCase();
    
    const inputArray = lowerCaseInput.split("");
    const charCodeA = "a".charCodeAt(0);
    const charCodeZ = "z".charCodeAt(0);

    if(encode) {
      const encodedArray = inputArray.map((char) => {
        const currentCharCode = char.charCodeAt(0);

        // maintains spaces and other nonalphabetic symbols in the message
        if (currentCharCode < charCodeA || currentCharCode > charCodeZ) {
          return char;
        }

        // handling shifts that go past the end of the alphabet and wraps to the front
        const shiftedCharCode = currentCharCode + shift;
        if (shiftedCharCode > charCodeZ) {
          return String.fromCharCode(charCodeA + ((shiftedCharCode - charCodeZ) - 1));
        } else if (shiftedCharCode < charCodeA) {
          return String.fromCharCode(charCodeZ - ((charCodeA - shiftedCharCode) - 1));
        } else {
          return String.fromCharCode(shiftedCharCode);
        }
      });
      return encodedArray.join("");
    }

    const decodedArray = inputArray.map(char => {
      const currentCharCode = char.charCodeAt(0);

      // maintains spaces and other nonalphabetic symbols in the message
      if (currentCharCode < charCodeA || currentCharCode > charCodeZ) {
        return char;
      }

      // handling shifts that go past the front of the alphabet and wraps to the back
      const shiftedCharCode = currentCharCode - shift;
      if (shiftedCharCode < charCodeA) {
        return String.fromCharCode(charCodeZ - ((charCodeA - shiftedCharCode) - 1));
      } else if (shiftedCharCode > charCodeZ) {
        return String.fromCharCode(charCodeA + ((shiftedCharCode - charCodeZ) - 1));
      } else {
        return String.fromCharCode(shiftedCharCode);
      }
    });
    return decodedArray.join("");
    
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
