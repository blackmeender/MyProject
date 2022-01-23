'use strict'
class productList {

  #container;
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.#container = container
    this.#goods = []
    this.#allProducts = []

    this.fetchGoodsData()
    this.render()
  }

  totalPrice() { // не получается разобраться почему не работает
    let sum = 0;
    productObjects.forEach(function () {
      sum += product.price;
      console.log(sum);
    })

  }

  fetchGoodsData() {
    this.#goods = [
      { id: 1, title: 'Notebook', price: 1000, },
      { id: 2, title: 'Mouse', price: 100, },
      { id: 3, title: 'Keyboard', price: 250, },
      { id: 4, title: 'Gamepad', price: 150, },
    ]
  }

  render() {
    let catalogBlock = document.querySelector(this.#container)

    for (let product of this.#goods) {
      let productObjects = new productItem(product)

      this.#allProducts.push(productObjects)
      catalogBlock.insertAdjacentHTML("beforeend", productObjects.getHTMLString())
    }
  }
}

class productItem {
  constructor(product, img = 'https://picsum.photos/seed/1/200') {
    this.title = product.title
    this.id = product.id
    this.price = product.price
    this.img = img
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price} \u20bd</p>
                <button class="by-btn">Купить</button>
              </div>
              </div>`;
  }
}

let catalog = new productList()

// const products = [
//   { id: 1, title: 'Notebook', price: 1000, },
//   { id: 2, title: 'Mouse', price: 100, },
//   { id: 3, title: 'Keyboard', price: 250, },
//   { id: 4, title: 'Gamepad', price: 150, },
// ];

// const renderProduct = (good, img = 'https://picsum.photos/seed/1/200') => {
//   return `< div class="product-item" >
//                 <img src="${img}" alt="">
//                 <h3>${good.title}</h3>
//                 <p>${good.price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`;
// };

// const renderCatalog = (list) => {
//   // const productList = list.map(good => renderProduct(good.title, good.price));
//   // console.log(productList);

//   // document.querySelector('.products').innerHTML = productList;

//   document.querySelector('.products').insertAdjacentHTML('afterbegin', list.map(good => renderProduct(good, good.img)).join(''));
// };

// renderCatalog(products);
