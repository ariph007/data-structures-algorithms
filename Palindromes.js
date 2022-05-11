//* Problem :
//* Given a string, return true if the string is a palindrome or false if it is not
//? Palindrome are strings that form the same word if it's reversed

//* Exampple : 
//* apple = elppa => false
//* eye = eye => true



//! Solution 1
//* Using for loop to reverse string and compare reversed and str

//? Algorithm
//* 1. Convert string to an array with split('') 
//* 2. Reverse array with for loop
//* 3. Compare reversed === str ? true : false

{
const palindrome = str =>{
    let reversed = ''
    for (const char of str) {
        reversed = char + reversed
    }
    return reversed === str
}

console.log("eye is palindrome = "+ palindrome('eye'))
console.log("book is palindrome = "+  palindrome('book'))
}

//! -------------------------------------------------------------------------------------
//! Solution 2
//* Using Array.prototype.every()
//* Syntax : 
//* every((element, index) => { /* ... */ } )

//? Algorithm
//* 1. Convert string to an array with split('') 
//* 2. Using every() to compare every first character to last character
//* 4. Return true if it's palindrome and false if it's not
{

    const palindrome = str =>{

        return result = str.split('').every((char, index) =>{
    //* We check every element in str, store it in char argument, and save it in index
    //* First element have index = 0, second element have index = 1, ...  
    //* Let's say we have string "abba" => str.length = 4
    //* Index 0 = a, 1 = b, 2 = b, 3 = a
    //* We compare index 0 === 3; index 1 === 2 ; ... 

        return char === str[str.length - 1 - index]

    //* First iteration a === str[4 - 1 - 0] => a === a 
    //* Second iteration b === str[4 - 1 - 1] => b === b
    //* Third iteration b === str[4 - 1 - 2] => b === b
    //* Fourth iteration a === str[4 - 1 - 3] => a === a

        })
    }

    console.log("======================================")
    console.log("abba is palindrome = "+ palindrome('abba'))
    console.log("book is palindrome = "+  palindrome('book'))
      

}