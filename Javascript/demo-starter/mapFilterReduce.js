console.log("MapFilter Baslangic");

let urunler = [
  { fiyat: 100, ad: "Urun 1", discount: true, rate: 15 },
  { fiyat: 150, ad: "Urun 2", discount: false, rate: 0 },
  { fiyat: 200, ad: "Urun 3", discount: true, rate: 2.5 },
];

let filtrelenmisUrunler = urunler.filter((urun) => {
  return urun.fiyat > 160;
});

console.log(filtrelenmisUrunler);

//map => forEach ile ayni, tek farki map yeni bir array olusturur ve doner.
let maplanmisArray = urunler.map((urun) => {
  return {
    fiyat: urun.fiyat * 2,
    ad: urun.ad,
    discount: urun.discount,
    rate: urun.rate,
  };
});
console.log(maplanmisArray);

//Ex.
let mapExample = urunler.map((urun) => {
  urun.discount === true
    ? (urun.fiyat -= urun.fiyat * (urun.rate / 100))
    : urun.fiyat;
  return `${urun.ad} ${urun.fiyat}`;
});
console.log(mapExample);

//ex.2
let mapExample2 = urunler.map((urun) => {
  return {
    fiyat:
      urun.discount === true
        ? urun.fiyat - urun.fiyat * (urun.rate / 100)
        : urun.fiyat,
    indirimTutari: urun.fiyat * (urun.rate / 100),
    ad: urun.ad,
  };
});
console.log(mapExample2);

let cart = [
  { id: 1, productName: "product 1", quantity: 3, unitPrice: 3000 },
  { id: 2, productName: "product 2", quantity: 2, unitPrice: 1000 },
  { id: 3, productName: "product 3", quantity: 1, unitPrice: 500 },
];

let total = { totalPrice: 0, totalPorductCount: 0 };
cart.forEach((item) => {
  total.totalPrice += item.unitPrice;
  total.totalPorductCount += item.quantity;
});
console.log(total);
