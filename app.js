//*      PALINDROME NUMBER :-
//? A palindrome number is a number that is same after reverse. For example 121, 12321, 1001, 12321, 12321, 12321,

let isPalindrome = function (x) {
    return x < 0 ? false : x ===  +x.toString().split("").reverse().join("");
}
let result = isPalindrome(121);
console.log(result);

//*      FIBONACCI NUMBER :-
