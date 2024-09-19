"use strict";
// 1 - Masala 
// function checkDifference(num: number): void {
//     const numStr = num.toString();
//     if (numStr.length !== 3) {
//         console.log("Iltimos, 3 xonali son kiriting.");
//         return;
//     }
//     const firstDigit = parseInt(numStr[0], 10);
//     const secondDigit = parseInt(numStr[1], 10);
//     const thirdDigit = parseInt(numStr[2], 10);
//     const sumFirstAndThird = firstDigit + thirdDigit;
//     const difference = sumFirstAndThird - secondDigit;
//     console.log(`${difference} ga katta.`);
// }
// checkDifference(546);
// 2  - Masala
// function findDivisorsSum(n: number): number {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//       if (n % i === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//   const inputNumber = 12;
//   const result = findDivisorsSum(inputNumber);
//   console.log(`1 dan ${inputNumber - 1} gacha bo'lgan sonlar orasida ${inputNumber} sonining bo'luvchilari yig'indisi: ${result}`);
// 3 - Masala 
// let arr = [true, "Salom", "JavaScript", 23, undefined];
// let updatedArr = arr.map(item => typeof item === 'string' ? null : item);
// console.log(updatedArr); 
// 4 - Masala 
// const arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 283, 43, 2];
// const maxValue = Math.max(...arr);
// console.log(`Arraydagi eng katta qiymat: ${maxValue}`);
// 5 - Masala 
// const numbers: number[] = [54, 32, 76, 12, 22];
// const totalSum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(totalSum);
// 7 - Masala 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = arr.map(num => num % 2 === 0 ? 0 : num);
// console.log(result);
// 8 - Masala 
// function calculator(num1: number, num2: number, operation: string): number | string {
//     switch (operation) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 === 0) {
//           return 'Nolga bo‘lish mumkin emas';
//         }
//         return num1 / num2;
//       default:
//         return 'Noto‘g‘ri amal kiritildi';
//     }
//   }
//   const number1: number = parseFloat(prompt("Birinchi sonni kiriting:") as string);
//   const number2: number = parseFloat(prompt("Ikkinchi sonni kiriting:") as string);
//   const operator: string = prompt("Amalni kiriting (+, -, *, /):") as string;
//   const result: number | string = calculator(number1, number2, operator);
//   console.log(`${result}`);
// 9 - Masala 
// const names: string[] = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];
// const inputName: string = prompt("Ism kiriting:") as string;
// if (names.includes(inputName)) {
//   console.log(`${inputName} bor.`);
// } else {
//   console.log(`${inputName} yo'q.`);
// }
// 10 - Masala 
// const users = [
//     { 
//      age: 20,
//      name: "Nuriddin",
//      gmail: "nuriddin@gmail.com"
//     },
//     {
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {   
//         age:25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
//   ];
//   const inputname: string = prompt("Ism kiriting:") as string;
//   const user = users.find((user) => user.name === inputname);
//   if (user) {
//     console.log(`Ismi: ${user.name}`);
//     console.log(`Yoshi: ${user.age}`);
//     console.log(`Gmail: ${user.gmail}`);
//   } else {
//     console.log(`${inputname} ismli foydalanuvchi topilmadi.`);
//   }
// 11 - Masala 
// const users = [
//     { 
//      age: 20,
//      name: "Nuriddin",
//      gmail: "nuriddin@gmail.com"
//     },
//     {
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {   
//         age:25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
//   ];
//   const maxAge = users.reduce((max, user) => (user.age > max ? user.age : max), 0);
//   console.log(`Eng katta yosh: ${maxAge}`);
//   console.log(`Ismi : ${users.find((user) => user.age === maxAge)?.name}`);
// 12 - Masala
// const users = [
//     { age: 20, name: "Nuriddin", gmail: "nuriddin@gmail.com" },
//     { age: 15, name: "Komiljon", gmail: "komiljon@gmail.com" },
//     { age: 25, name: "Izzatbek", gmail: "izzatbek@gmail.com" }
//   ];
//   const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//   const numberOfUsers = users.length;
//   const averageAge = totalAge / numberOfUsers;
//   console.log(`Orta arifmetik yosh: ${averageAge}`);
// 13 - Masala
// const numbers = [23, 54, 21, 76, 23, 87];
// const firstValue = numbers[0];
// const lastValue = numbers[numbers.length - 1];
// const sum = firstValue + lastValue;
// if (sum % 2 === 0) {
//     numbers.unshift(sum)
// }else{
//     numbers.push(sum)
// }
// console.log(numbers);
// 14 - Masala
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers: number[] = [];
// const oddNumbers: number[] = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   } else {
//     oddNumbers.push(number); 
//   }
// });
// console.log(evenNumbers);
// console.log(oddNumbers);
// 15 - Masala
// const numbers = [8, 7, 6, 5, 4];
// const reverseArray: number[] = [];
// for (const number of numbers) {
//   reverseArray.unshift(number);
// }
// console.log(reverseArray);
// Qoshimcha Masalalar 
// 1 - Masala 
// let inputNumber = prompt("Ixtiyoriy son kiriting:");
// if (inputNumber !== null && !isNaN(Number(inputNumber))) {
//     let number = Number(inputNumber);
//     if (number % 2 === 0) {
//         alert("Kiritilgan son juft.");
//     } else {
//         alert("Kiritilgan son toq.");
//     }
// } else {
//     alert("Iltimos, haqiqiy son kiriting!");
// }
// 2 - Masala
// let inputNumber = prompt("Ixtiyoriy son kiriting (maksimal 4 xonali):");
// if (inputNumber !== null && /^[0-9]{1,4}$/.test(inputNumber)) {
//   let digitCount = inputNumber.length;
//   alert(`Kiritilgan son ${digitCount} xonadan iborat.`);
// } else {
//   alert("Iltimos, maksimal 4 xonali ijobiy son kiriting!");
// }
// 3 - Masala 
// let inputNumber = prompt("Ixtiyoriy son kiriting:");
// if (inputNumber !== null && !isNaN(Number(inputNumber))) {
//   let number = Number(inputNumber);
//   if (number > 0) {
//     alert("Kiritilgan son musbat.");
//   } else if (number < 0) {
//     alert("Kiritilgan son manfiy.");
//   } else {
//     alert("Kiritilgan son 0 ga teng.");
//   }
// } else {
//   alert("Iltimos, haqiqiy son kiriting!");
// }
// 4 - Masala 
// let firstNumber = prompt("1-sonni kiriting:");
// let secondNumber = prompt("2-sonni kiriting:");
// let thirdNumber = prompt("3-sonni kiriting:");
// if (
//   firstNumber !== null &&
//   secondNumber !== null &&
//   thirdNumber !== null &&
//   !isNaN(Number(firstNumber)) &&
//   !isNaN(Number(secondNumber)) &&
//   !isNaN(Number(thirdNumber))
// ) {
//   let numbers = [
//     Number(firstNumber),
//     Number(secondNumber),
//     Number(thirdNumber)
//   ];
//   numbers.sort((a, b) => a - b);
//   let threeDigitNumber = Number(`${numbers[0]}${numbers[1]}${numbers[2]}`);
//   alert(`O'sish tartibida: ${numbers.join(", ")}\n3 xonali son: ${threeDigitNumber}`);
// } else {
//   alert("Iltimos, 3 ta haqiqiy son kiriting!");
// }
// 5 - Masala 
// function findSmallestDigit(num: number): number {
//     if (!isThreeDigitNumber(num)) {
//       throw new Error('Kiritilgan son uch xonali bo\'lishi kerak!');
//     }
//     const digits = num.toString().split('').map(Number);
//     return Math.min(...digits);
//   }
//   function isThreeDigitNumber(num: number): boolean {
//     return num >= 100 && num <= 999;
//   }
//   const number = 381;
//   const smallestDigit = findSmallestDigit(number);
//   console.log(`Eng kichik raqam: ${smallestDigit}`);
