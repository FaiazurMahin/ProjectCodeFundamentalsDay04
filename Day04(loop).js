// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 5; i += 2) {
//     for (let j = 1; j < 3; j++) {
//         console.log(i * j);
//     }
// }

// let x = 0;
// while (x < 3) {
//     setTimeout(() => console.log(x), 1000);
//     x++;
// }

// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

//If the input string is "hello world" and the character is "l", the output should be 3.

// function lettercount(str, char){
//     let count = 0;
//     for(let i of str){
//         if (i === char){
//             count++
//         }
//     }
//     return count;
// }

// console.log(lettercount("Hello World", "o"));
//If the input is start = 1 and end = 10, the output should be 25 because the odd numbers in this range are 1, 3, 5, 7, 9, and their sum is 25.
function oddcounter(){
    let sum = 0;
    for(i=1; i<=10; i++){
        if (i % 2 == 0){
            continue;
        }
        else sum = sum + i;
    }
    return sum
}
console.log(oddcounter());