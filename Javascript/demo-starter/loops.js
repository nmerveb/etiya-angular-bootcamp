console.log("Loops Baslangic");

//dinamik olacak
let krediler = ["ihtiyac", "tasit", "arac"];

//CTRL +K +C
//CTRL +K +U
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//donguler
//iterate, iteration
console.log("<ul>");
for (let i = 0; i < krediler.length; i++) {
  console.log("<li>" + krediler[i] + "</li>");
}
console.log("</ul>");

//arrow function
krediler.forEach((kredi) => {
  console.log("Foreach:", kredi);
});

let urunler = [
  { fiyat: 100, ad: "Urun 1", discount: true, rate: 15 },
  { fiyat: 150, ad: "Urun 2", discount: false, rate: 0 },
  { fiyat: 200, ad: "Urun 3", discount: true, rate: 2.5 },
];

urunler.forEach((urun) => {
  console.log(urun.ad + " " + (urun.fiyat * 9) / 10);
});

urunler.forEach((urun) => {
  console.log(urun.ad);
  if ((urun.fiyat * 9) / 10 > 150) {
    console.log("pahali");
  }
});

urunler.forEach((urun) => {
  console.log(urun.ad);
  if (urun.discount === true) {
    console.log((urun.fiyat -= urun.fiyat * (urun.rate / 100)));
  } else {
    console.log(urun.fiyat);
  }
});

console.log(
  urunler.filter((urun) => {
    return urun.fiyat > 160;
  })
);
