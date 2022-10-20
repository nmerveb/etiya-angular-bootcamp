let products = [
  { unitPrice: 100, productName: "Urun 1", discount: true, rate: 15 },
  { unitPrice: 150, productName: "Urun 2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "Urun 3", discount: true, rate: 2.5 },
];

//isme gore filtreleme
const getProductsByName = (productName) => {
  let productsResult = products.filter((p) =>
    p.productName.includes(productName)
  );
  return productsResult;
};

console.log(getProductsByName("Urun"));

//isme gore ilk urun filtreleme
const getFirstProductByName = (productName) => {
  console.log(products.find((p) => p.productName.includes(productName)));
};
getFirstProductByName("Urun");
//console.log("resultProduct" + getFirstProductByName("Urun"));

//unitPrice < Parametre getirme fonksiyonu (array)
const getUnitPriceSmaller = (unitPrice) => {
  let resultArray = products.filter((p) => p.unitPrice < unitPrice);
  return resultArray;
};
console.log(getUnitPriceSmaller(170));

//unitPrice > Parametre getirme fonksiyonu (array)
const getUnitPriceBigger = (unitPrice) => {
  let resultArray = products.filter((p) => p.unitPrice > unitPrice);
  return resultArray;
};
console.log(getUnitPriceBigger(170));

// indirimdeki ürünleri getirme
const getDiscountProducts = () => {
  let resultArray = products.filter((p) => p.discount === true);
  return resultArray;
};
console.log(getDiscountProducts());

//ürün ekleme
const addProduct = (unitPrice, productName, discount, rate) => {
  let newProduct = {
    unitPrice: unitPrice,
    productName: productName,
    discount: discount,
    rate: rate,
  };
  products.push(newProduct);
};
addProduct(500, "Urun 4", false, 5);
console.log(products);

//ürün silme
const removeProduct = (productName) => {
  products = products.filter((p) => p.productName !== productName);
};
removeProduct("Urun 4");

//ürünleri getirme
const listProducts = () => {
  products.forEach((p) => console.log(p));
};

listProducts();
