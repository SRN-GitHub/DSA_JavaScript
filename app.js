// &                 ::: SOME IMPORTANT INTERVIEW QUESTION :::

//*      PALINDROME NUMBER :-
//? A palindrome number is a number that is same after reverse. For example 121, 12321, 1001, 12321, 12321, 12321,

let isPalindrome = function (x) {
    return x < 0 ? false : x ===  +x.toString().split("").reverse().join("");
}
let result = isPalindrome(121);
// console.log(result);

//*      FIBONACCI NUMBER :-
    let fib = function (n) {
        const arr = [0, 1]
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }
    fib(10);

