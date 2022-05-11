//* Problem :
//* Given a string, return a new string with the reversed
//? Example : Indonesia => aisenodnI


//! Solution 1
//* Using Built in function javascript: reverse()
//* reverse() only work in array, not in string. so me must convert string first to an array

//? Algorithm
//* 1. Convert string to an array with split('') 
//* 2. Reverse array with javascript built in function reverse()
//* 3. Convert that array reversed to string back with join('') 
//* 4. Return that string

{

const reverseOne = (str) =>{
    return reversed = str.split('').reverse().join('')
}

console.log('Solution1: Indonesia ToBe ' + reverseOne('Indonesia'))

}


//! -------------------------------------------------------------------------------------

//! Solution 2
//* In solution 1, we like a cheater. Using built in function
//* Now we learn to do it manually, because string is iterable so we can using for loop 
//* Don't use for loop like for(i = 0; i < str.lenth; i++) because sometimes you can make a typo
//* Only use for(i = 0; i < str.length; i++) if u want to iterate in every 2nd, 3rd, 4th... element

//? Algorithm
//* 1. We make a new variable called reversed, reversed will store our reversed string
//* 2. Make a for of loop
//* 3. Looping each character of that string and store it in reversed variable


{
    
const reverseTwo = (str) =>{
    let reversed = ''
    for (const char of str) {
        reversed = char + reversed
    }
    //*1st looping => reversed = I
    //*2nd looping => reversed = nI
    //*3nd looping => reversed = dnI
    //*4th looping => reversed = odnI
    //*5th looping => reversed = nodnI
    //*6th looping => reversed = enodnI
    //*7th looping => reversed = senodnI
    //*8th looping => reversed = isenodnI
    //*9th looping => reversed = asenodnI

    return reversed;
}

console.log('Solution2: Indonesia ToBe ' + reverseTwo('Indonesia'))

}


//! -------------------------------------------------------------------------------------

//! Solution 3
//* We convert string to array and use reduce() function
/* The reduce() method executes a user-supplied "reducer" callback function on each element 
   of the array, in order, passing in the return value from the calculation on the preceding 
   element. The final result of running the reducer across all elements of the array is a single value. 
*/
//* Syntax : reduce(callbackFn, initialValue)

//? Algorithm
//* 1. Store result in reversed variable
//* 2. Convert string to an array with split('') => '' = empty pattern
//* 3. Add reduce function with Initial value empty string = ''
//* 4. In callbackFn we return currChar + prevChar => Reversed  

{
    
    const reverseThree = (str) =>{
        return reversed = str.split('').reduce(((prevChar, currChar) => currChar + prevChar), '')
        //* 1st reduce => prevChar = '' because initialValue = empty string, currChar = 'I'
        //* 2nd reduce => prevChar = 'I', currChar = 'n' => currChar + prevChar = 'nI'
        //* 3nd reduce => prevChar = 'nI', currChar = 'd' => currChar + prevChar = 'dnI'
        //* 4th reduce => prevChar = 'dnI', currChar = 'o' => currChar + prevChar = 'odnI'
        //* 5th reduce => prevChar = 'odnI', currChar = 'n' => currChar + prevChar = 'nodnI'
        //* 6th reduce => prevChar = 'nodnnI', currChar = 'e' => currChar + prevChar = 'enodnI
        //* 7th reduce => prevChar = 'enodnnI', currChar = 's => currChar + prevChar = 'senodnI
        //* 8th reduce => prevChar = 'senodnnI', currChar = 'i' => currChar + prevChar = 'isenodnI
        //* 9th reduce => prevChar = 'isenodnnI', currChar = 'a' => currChar + prevChar = 'aisenodnI

    }
    
    console.log('Solution3: Indonesia ToBe ' + reverseThree('Indonesia'))
    
    }