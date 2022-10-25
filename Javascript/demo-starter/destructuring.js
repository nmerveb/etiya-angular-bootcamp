// import { cevaplariniz } from "./restAndSpread";

// //require();

// console.log("-------------------------");
// console.log(cevaplariniz);

// //const first = cevaplariniz[0];
// //const second = cevaplariniz[1];
// const [first, second, ...others] = cevaplariniz; // array destructuring
// console.log(first, second, others);

const [
  icAnadolu,
  marmara,
  ege,
  akdeniz,
  [icAnadoluSehirleri, mamaraSehirleri, ...digerSehirler],
] = [
  { name: "Ic Anadolu", population: 1000000 },
  { name: "Marmara", population: 2000000 },
  { name: "Ege", population: 3000000 },
  { name: "Akdeniz", population: 4000000 },
  [
    ["Ankara", "Konya"],
    ["Istanbul", "Bursa"],
    ["Izmir", "Manisa"],
    ["Antalya", "Mersin"],
  ],
];

console.log(icAnadolu, marmara, ege, akdeniz);
console.log(icAnadoluSehirleri);
console.log(mamaraSehirleri);
console.log(digerSehirler);
//const [egeSehirleri, akdenizSehirleri] = ...digerSehirler;
//console.log(...(...digerSehirler) => digerSehirler);
console.log(...digerSehirler.flat(2)); // geri kalan dizileri parcalamayi saglar
