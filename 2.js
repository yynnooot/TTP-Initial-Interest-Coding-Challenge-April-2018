/*Question 2 -- stringReformatting(string): The string s contains dashes that split it into groups of characters. You are given an integer k that represents the number of characters in groups that your output should have. Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 

For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k"; 

The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each, making the output string "24a0-r74k". 

For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k". 

Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k". */


function stringReformatting(string, k){

  //remove all dashes from original string
  let cleanStr = string.split('-').join('');
  
  //array to later join with dashes
  let arrOfGroups = [];
  
  //loop through string as long as string length is greater than k
  while (cleanStr.length > k){

    //last k characters of cleanStr 
    let lastk = cleanStr.slice((cleanStr.length)-k, cleanStr.length)
    
    //add lastk as an element at front of array
    arrOfGroups.unshift(lastk)
    
    //re-assign cleanStr variable to same string without last k characters
    cleanStr = cleanStr.substring(0, (cleanStr.length-k))
  }

  //string now has length equal to or less than k so add to front of array
  arrOfGroups.unshift(cleanStr)

  //join each element of array with a '-' and return
  return arrOfGroups.join('-')
}