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

// function double() {
//   return (this.value *= 2);
// }

// function plusOne() {
//   return (this.value += 1);
// }

// function minusOne() {
//   return (this.value -= 1);
// }

const numerator = {
  value: 1,
  double() {
    this.value *= 2;
    return this;
  },
  plusOne() {
    this.value += 1;
    return this;
  },
  minusOne() {
    this.value -= 1;
    return this;
  }
};

numerator
  .double()
  .plusOne()
  .plusOne()
  .minusOne();

console.log(numerator.value);

console.log(`
`);

console.log(
  `5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов) `
);

function amountPrice() {
  return parseFloat(this.retailPrice) * this.num;
}

const product = {
  retailPrice: "25$",
  num: 5,
  amountPrice
};

console.log(product.amountPrice());

console.log(`
`);

console.log(
  `6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.`
);
//первый объект и метод созданы в пред. задаче

const detail = {
  retailPrice: "50$",
  num: 10
};

console.log(amountPrice.call(detail)); // если я правильно понял условие задачи
