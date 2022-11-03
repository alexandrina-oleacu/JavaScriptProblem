console.log("==================== BEGIN OF BUBBLE SORT ====================");
// function that swaps two elements of a given array a
function swap(a, x, p) {
  let temp = a[x];
  a[x] = a[p];
  a[p] = temp;
}
 
// function that performs the bubble sort
function bubbleSort(a) {
  let i, j;
  let n = myArray.length - 1;

  for (i = 0; i < n; i++) {
      for (j = 0; j < n - i; j++) {
          if (a[j] > a[j+1]) {
            swap(a, j, j+1);
          }
      }
  }
}
 


// main program

var myArray = [10, 18, 50, 21, 23, 15, 70, 54, 43, 0, 1];

console.log("Unsorted array: ", myArray);

bubbleSort(myArray);

console.log("Sorted array: ", myArray);

console.log("==================== END OF BUBBLE SORT ====================");




console.log("==================== BEGIN OF PALINDROME ====================");

// this function checks if a given string is a palindrome or not
function testPalindrome(str) {
	let n = str.length - 1;
  
	for (let i = 0; i < n / 2; i++) {
    let firstChar = str[i]; 
    let lastchar = str[n-i];
    
    if( firstChar != lastchar) {
      return false;
    }
	}
	
	return true;
}


// main program
let s = ["madam", "level", "poem", "palindrome"];
for (let i = 0; i < s.length; i++) {   
  let isPalindrome = testPalindrome(s[i]);

  if (isPalindrome == true ) {
    console.log("\"", s[i], "\" is Palindrome.");
  }
  else {
    console.log("\"", s[i], "\" NOT a Palindrome.");
  }
}

console.log("==================== END OF PALINDROME ====================");