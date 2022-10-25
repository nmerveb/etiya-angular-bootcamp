console.log("Rest And Spread Baslangic");

// function sum(number1, number2, number3) {
//   const sum = number1 + number2 + number3;
//   return sum;
// }

// const result = sum(10, 20, 30);
// //console.log(result);

// let result2 = sum(10, 20, null); //NaN doner, cunku number3 degeriyle toplama yapamaz.
// //console.log(result2);

function sizCevapVerin() {
  return [10, 20, 30, 40, 50];
}
const cevaplariniz = sizCevapVerin();

function sayMyName(...letters) {
  for (const letter of letters) {
    console.log(letter);
  }
}
export function sum(...numbers) {
  //console.info("number3:", Number(number3));
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    //total = total + numbers[i];
    total += numbers[i]; // [10, 20, 30, 40, 50]
  }
  //return numbers.reduce((total, number) => total + number, 0);
  return total;
}

function avg(cevapVerenKisiSayisi, ...numbers) {
  return sum(...numbers) / cevapVerenKisiSayisi;
}

// Spread Operator
// bir dizi elemanlarını tek tek parametre olarak gönderir, yani birbirinden ayrıştırır.

const result = avg(26, ...cevaplariniz);
console.log(result);
// console.log(Math.max(...cevaplariniz));
// 010, 20, 30, 40, 50

sayMyName(...Object.values({ name: "Mehmet", surname: "Kara" }));

let instructor = {
  firstName: "Ahmet",
  lastName: "Cetinkaya",
};
let student = {
  firstName: "Anil",
  lastName: "Kovuk",
};
const learningTopic = {
  topic: ["JavaScript"],
};
student = {
  ...student,
  ...learningTopic,
};

learningTopic.topic.push("Angular");

console.log(instructor);
console.log(student);
