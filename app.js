console.log(
  `1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: const rectangle = {width:..., height:..., getSquare:...}`
);

function getSquare() {
  // return `${parseFloat(this.width) * parseFloat(this.height)} mm^2`; строкой с един. измерения
  return parseFloat(this.width) * parseFloat(this.height); //числом
}

const rectangle = {
  width: "3mm",
  height: "4mm",
  getSquare
};

console.log(rectangle.getSquare());
console.log(`
`);

console.log(
  `2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки`
);

function getPrice() {
  return this.price;
}

function getPriceWithDiscount() {
  return this.price - (parseFloat(this.discount) * this.price) / 100; //скобки при умножении для читабельности
}

const price = {
  price: 10,
  discount: "15%",
  getPrice,
  getPriceWithDiscount
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
console.log(`
`);

console.log(
  `3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту`
);

function heightPlusOne() {
  //return ++this.height; //так записать можно?
  return (this.height += 1);
}

const object = {
  height: 10,
  heightPlusOne
};

object.heightPlusOne();
console.log(object.height);

console.log(`
`);

console.log(
  `4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов`
);
