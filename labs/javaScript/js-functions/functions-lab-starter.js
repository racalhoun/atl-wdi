// Question 1
function maxOfTwoNumbers(x,n) {
 if ( x > n ) {
     return x;
 }else{
         return n;
     }
 }
 maxOfTwoNumbers(3,1);


// Question 2
function maxOfThree(a,b,c) {
    if (a > b && a > c) {
        return a;
    }else if ( b > c){
        return b;
     } else{
         return c;
     }
    }
        
    



// Question 3
/*function isCharacterAVowel(a) {
    let vowels = [a,e,i,o,u];
    let yes;
    for (let i = 0; i < vowels.length; i++){
        if ([i] === a ) {
        return true;
        }else{
            return false;
        }
    }
}*/





// Question 4
 const total = [1,2,3,4];
function sumArray (array) {
    let sum = 0;
    for ( let i = 0; i < array.length; i++){
         sum += array[i];
    }
 return sum;
}
sumArray(total);

// Question 4
function multiplyArray([1,2,3,4]) {

}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
String.prototype.reverseString = 


// Bonus 2
function charactersOccurancesCount(str) {
    let arr = str.toLowerCase().split("");
    let ob = {};
    arr.forEach(function(ch) {
        if(!ob.hasOwnProperty(ch));
        ob[ch]
    }
}
  charactersOccurancesCount();


