


function range(start,end){
let numArr = [];

    for(let i=start; i<=end; i++){
        numArr.push(i)
    }
    return numArr


}

// console.log(range(1,10))


function sum(num){
  let sum = 0;
  for(let i=0; i<=num.length; i++){
    sum = sum+i
  }

  return sum
}

// console.log(sum(range(1,10)))

// array reverse 


function reverseArray(arr){
  let revArr = []
  for(let i= arr.length-1; i>=0; i--){
   revArr.push(arr[i])
  }

  return revArr;
}


// console.log(reverseArray(["A", "B", "C"]));

function reverseArray2(arr){
  let revArr = [];

  for(let i=0; i<arr.length; i++){
    revArr.unshift(arr[i])
  }
return revArr
}

// console.log(reverseArray2(["A","B","C"]))



function reverseArrayInPlace(arrayValue){
  let newArrVal = [];
  for(let i=arrayValue.length-1; i>=0; i--){
    newArrVal.push(arrayValue[i])
  }

  return newArrVal
}




let arrayValue = [1, 2, 3, 4, 5];

// console.log(reverseArrayInPlace(arrayValue))

// list

function arrayToList(array){
let list = null;
for(let i=array.length-1; i>=0; i--){
  list = {value:array[i],rest:list}
}
return list
}

function listToArray(list){
let arr = [];

while(list!==null){
  arr.push(list.value)
}
return arr;
}

function prepend(element,list){
  return {value:element,rest:list}
};


function nth(list,position){
  if(!list){
    return undefined
  }
  else if(position=0){
    return list.value
  }
  else{
    nth(list.rest,position-1)
  }
}
// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


function deepEqual(value1,value2){
  if(value1===value2){
    return true
  }

  if(
    typeof value1 !== 'object' || value1===null ||
    typeof value2 !== 'object' || value2===null
  ){
    return false;
  }

  const key1 = Object.keys(value1);
  const key2 = Object.keys(value2);

  if(key1.length !== key2.length){
    return false;
  }

  for(let key of key1){
    if(!key1.includes(key) || !deepEqual(value1[key],value2[key])){
      return false;
    }
  }
return true;
}

// Example usage
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true