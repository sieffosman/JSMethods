//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
function generateRandomArray(length, minValue, maxValue) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      randomArray.push(randomValue);
    }
    return randomArray;
  }
  
  // Test: Generate a random array of length 10 with values between 1 and 100
  const myRandomArray = generateRandomArray(3, 1, 10);
  console.log(myRandomArray);

  let sumArray = 0;
  for (i = 0; i <= myRandomArray.length -1; i++) {
    sumArray += myRandomArray[i];
  }

  alert("The array's elements sum to " + sumArray);
  console.log("The array's elements sum to " + sumArray);
  
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let arrayToSquare = myRandomArray;

function squareArr(arrayToSquare) {
    for (let i = 0; i < arrayToSquare.length; i++) {
        let square = arrayToSquare[i] * arrayToSquare[i];
        arrayToSquare[i] = square;
    }
    console.log(arrayToSquare);
}

squareArr(arrayToSquare);



//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
