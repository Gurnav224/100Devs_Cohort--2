

const binaryArrayToNumber = arr => {
    // your code
    let power = 2;

    for(let i=0; i<arr.length; i++){
        power += 2**arr[i]
    }
    return power
  };


  console.log(binaryArrayToNumber([0,0,0,1]))
  console.log(binaryArrayToNumber([1,1,1,1]))