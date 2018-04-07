//Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

function sumOfTwo(a,b,v){

  const obj = {};
  
  //loop through elements in first array
  for(let i=0; i<a.length; i++){

    //subtract element from target to find corresponding pair value to find in array B
    let pair = v - a[i];

    //make the pair value a key in object with value equal to true
    obj[pair] = true
  }

  //loop through elements in second array
  for(let i=0; i<b.length; i++){

    //if the element exists as a key in obj, then corresponding pair is found - return true
    if(obj[b[i]]){
      return true
    }
  }
  //if for-loop has not returned true, pair does not exist in second array - return false
  return false;
}

/*** nested for-loop version ***

function sumOfTwo(a,b,v){
  for(let i=0; i<a.length; i++){
    let pair = v - a[i];
    if(b.includes(pair)){
      return true
    }
  }
  return false;
}

*/