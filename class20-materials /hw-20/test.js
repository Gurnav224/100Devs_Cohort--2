function trinaryToDecimal(trinaryNumber) {
  // Initialize result with 0
  let result = 0;
  let trinaryBase = 3;

  for (let i = 0; i < trinaryNumber.length; i++) {
    // Get the character digit as a string
     let charDigit = trinaryNumber[i];

     if (!/^[0-2]$/.test(charDigit)) {
      throw new Error("Invalid trinary digit");
    }  

    // Convert the character digit string to a number by subtracting '0'
    const digit = charDigit.charCodeAt(0)-'0'.charCodeAt(0);

    result = result*trinaryBase+digit

  }

  return result;
}

// Example usage:
const trinaryNumber = "1022"; // Replace with your trinary number
const decimalNumber = trinaryToDecimal(trinaryNumber);
console.log(`Trinary: ${trinaryNumber} => Decimal: ${decimalNumber}`);
