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

console.log(`
`);

console.log(
  `7. Даны объект и функция. Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes`
);

let size = {
  width: 5,
  height: 10
};

getSquare = function() {
  return this.width * this.height;
};
console.log(getSquare.call(size));

console.log(`
`);

console.log(
  `8. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25`
);

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());

console.log(`
`);

console.log(`ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ//////////////////`);

console.log(`
`);

console.log(`1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности
`);

const numArray = [1, 2, 3, 5, 8, 9, 10];

let resultArray = numArray.map(el => {
  return {
    digit: el,
    odd: Boolean(el % 2)
  };
});

console.log(resultArray);

console.log(`
`);

console.log(
  `2. Проверить, содержит ли массив элементы, равные нулю. Если да - вернуть false`
);

numArr = [12, 4, 50, 1, 0, 18, 40];
let containsNum = 0;

let containsNumResult = numArr.every(el => el !== containsNum);

console.log(containsNumResult);

console.log(`
`);

console.log(
  `3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true`
);

const strArray = ["yes", "hello", "no", "easycode", "what"];
let limitLength = 3;

let isExceed = strArray.some(el => el.length > limitLength);

console.log(isExceed);

console.log(`
`);

console.log(
  `4. Напишите функцию, которая из элементов массива соберет и вернёт
  строку, основываясь на index каждой буквы`
);

let letterPos = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

let totalString = function(arr) {
  let sortedByIndex = arr.sort((prev, next) => prev.index - next.index);

  let reducedString = sortedByIndex.reduce(
    (acc, letter) => (acc += letter.char),
    "" // Prettier меняет на двойные кавычки, я ни при чем
  );

  return reducedString;
};

console.log(totalString(letterPos));

console.log(`
`);

console.log(
  `5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]`
);

const arr = [[14, 45], [1], ["a", "c", "d"]];

let sortedByLengthArr = arr.sort((prev, next) => prev.length - next.length);
console.log(sortedByLengthArr);

console.log(`
`);

console.log(
  `6. Отсортируйте массив объектов по возрастающему количеству ядер (cores)`
);

const cpuList = [
  {
    cpu: "intel",
    info: {
      cores: 2,
      cache: 3
    }
  },
  {
    cpu: "intel",
    info: {
      cores: 4,
      сache: 4
    }
  },
  {
    cpu: "amd",
    info: {
      cores: 1,
      сache: 1
    }
  },
  {
    cpu: "intel",
    info: {
      cores: 3,
      сache: 2
    }
  },
  {
    cpu: "amd",
    info: {
      cores: 4,
      сache: 2
    }
  }
];

let sortedByCores = cpuList.sort(
  (prev, next) => prev.info.cores - next.info.cores
);
console.log(sortedByCores);

console.log(`
`);

console.log(
  `7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим`
);

let products = [
  {
    title: "prod1",
    price: 5.2
  },
  {
    title: "prod2",
    price: 0.18
  },
  {
    title: "prod3",
    price: 15
  },
  {
    title: "prod4",
    price: 25
  },
  {
    title: "prod5",
    price: 18.9
  },
  {
    title: "prod6",
    price: 8
  },
  {
    title: "prod7",
    price: 19
  },
  {
    title: "prod8",
    price: 63
  }
];

let filterCollection = function(arr, minPrice, maxPrice) {
  let filteredProducts = arr.filter(
    arr => arr.price >= minPrice && arr.price <= maxPrice
  );
  let sortedFilterProducts = filteredProducts.sort(
    (prev, next) => prev.price - next.price
  );
  return sortedFilterProducts;
};

console.log(filterCollection(products, 15, 30));
