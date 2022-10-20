let products = [
  { unitPrice: 100, productName: "Urun 1", discount: true, rate: 15 },
  { unitPrice: 150, productName: "Urun 2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "Urun 3", discount: true, rate: 2.5 },
];

//10 farkli yerde productName'e gore urun getirme modulu var
let product = products.filter((p) => p.productName.includes(" "));

//console.log(`Arama sonucu bulunan urun sayisi: ${product.length}`);

//func tanimlama sekilleri

function getProductByName(productName) {
  // func body'si
  //console.log("getProductByName fonksiyonu calisti.");
  let productsResult = products.filter((p) =>
    p.productName.includes(productName)
  );
  console.log(`Arama sonucu bulunan urun sayisi: ${productsResult.length}`);
}

//func cagirma
getProductByName("Urun");
getProductByName("1");
getProductByName("jahsddghj");
getProductByName("3");

//const --> sabit degisken tanimlama keywordu.
const multiple = 6;

//arrow func tanimlama
const getProductsByUnitPrice = (unitPrice) => {
  console.log("getProductsByUnitPrice calisti");
};

getProductsByUnitPrice();

//products.js olustur
//urunleri al
//isme gore filtrele
//isme gore bulunan ilk product'i getiren fonksiyon
//unitPrice < param getirme fonk
//unitPrice > param getir fonk
//indirimdeki urunleri getirme fonk
//urun ekleme
//verilen isimle urun silme
//tum urunleri getirme

//Fonk
