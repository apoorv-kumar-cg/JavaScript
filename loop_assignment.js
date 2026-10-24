// PART-1 -For Loop

//q=1
// let temp=[28, 32, 25, 40, 18, 35];
// let hotdays=0

// for (let i=0;i<temp.length;i++){
//     if (temp[i]>30){
//         hotdays++
//     }
// }

// console.log(hotdays)

// [------------------------------------------------------------]

//  Q=2

// let a=123
// let total=0

// while(a>0){
//     digit=a%10
//     total+=digit
//     a=Math.floor(a/10)
// }
// console.log(total)

// [------------------------------------------------------------]

// Q-3

// for (i=1;i<=100;i++){
//     if (i%3==0&&i%5==0){
//         console.log(i)
//     }
// }

// [------------------------------------------------------------]

// Q-4

// [------------------------------------------------------------]

// Q-5

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let max=-infinity
// for(let i=0;i<=arr.length;i++){
//     if (arr[i]>max){
//         max=arr[i]
//     }   

// let secondMax=-infinity
// for (let i=0;i<=arr.length;i++){
//     if (arr[i]>secondMax && arr[i]<max){
//         secondMax=arr[i]
//     }
// }
// console.log(secondMax)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     secondMax = arr[i];
//   }
// }

// console.log(secondMax); 

// [------------------------------------------------------------]

//Q-6


// [------------------------------------------------------------]

// Q-7
i=1
// for (let i=1;i<=64;){
//      i=i*2
//      console.log(i)
// }


// [------------------------------------------------------------]

// Q-8

// let fib_series="0,1 "
// let a=0
// let b=1
// for(let i=3;i<=20;i++){
//     let c=a+b
//     fib_series+=c+" "
//     a=b
//     b=c
// }
// console.log(fib_series)

// [------------------------------------------------------------]

// Q-9

// [------------------------------------------------------------]

// Q-10

// let num=111
// let binary=" "

// for (let i=0; num>0; i++){
//     num=Math.floor(num/2)
//     binary+=num%2+" "
// }
// console.log(binary)

// [------------------------------------------------------------]

// Part-2 Break inside a for loop

// Q-1

// [------------------------------------------------------------]

// Q-2


// [------------------------------------------------------------]

// Part I-d] Nested For Loop Questions

// Q-1

// a=0

// for (let i=1;i<=4;i++){
//     row=""
//     for (let j=1;j<=i;j++){
//         a++
//         row+=a+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-2


// for (let i=1;i<=5;i++){
//     row=""
//     for (let j=1;j<=i;j++){
//         a=String.fromCharCode(64 + j) + " ";
//         row+=a+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-3


// let n=5

// for (let i=1;i<=5;i++){
//     let bag=""
//     for (let j=1;j<=i;j++){
//         if (j==1||j==i||j==n){
//             bag+="* "
//         }else{
//             bag+=" "
//         }
//     }
//     console.log(bag)
// }

// [------------------------------------------------------------]

// Q-4

// for (let i=1;i<=5;i++){
//     row=""
//     for (let j=5;j>=i;j--){
//         row+="*"+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-5


// for (let i=1;i<=5;i++){
//     row=""
//     for (let j=5;j>=i;j--){
//         row+=(6-i)+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-6

// for (let i=1;i<=5;i++){
//     row=""
//     for (let j=5;j>=i;j--){
//         row+=(6-j)+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-7
// a=16
// for (let i=1;i<=5;i++){
//     row=""
//     for (let j=5;j>=i;j--){
//         a--
//         row+=(a)+" "
//     }
//     console.log(row)
// }

// [------------------------------------------------------------]

// Q-8

// let n=5
// for (let i=1;i<=5;i++){
//     let bag=""
//     for (let j=5;j>=i;j--){
//         if (j==1||j==i||j==n){
//             bag+="* "
//         }else{
//             bag+=" "
//         }
//     }
//     console.log(bag)
// }

// [------------------------------------------------------------]

// q=9

// for (let i=1;i<=5;i++){
//     bag=""
//     for (j=1;j<=5;j++){
//         if (i==j){
//             bag+="0 "
//         }else{
//             bag+="* "
//         }

//     }
//     console.log(bag)
// }

// [------------------------------------------------------------]

// Q-13

// let e=5
// let c=r*2-1

// for (let i=1;i<=5;i++){
//     let bag=" "
//     for(let j=0;)
// }

// [------------------------------------------------------------]