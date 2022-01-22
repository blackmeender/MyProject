const products = [
  { id: 1, title: 'Notebook', price: 1000, },
  { id: 2, title: 'Mouse', price: 100, },
  { id: 3, title: 'Keyboard', price: 250, },
  { id: 4, title: 'Gamepad', price: 150, },
];

const renderProduct = (good, img = 'https://picsum.photos/seed/1/200') => {
  return `<div class="product-item">
                <img src="${img}" alt="">
                <h3>${good.title}</h3>
                <p>${good.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderCatalog = (list) => {
  // const productList = list.map(good => renderProduct(good.title, good.price));
  // console.log(productList);

  // document.querySelector('.products').innerHTML = productList;

  document.querySelector('.products').insertAdjacentHTML('afterbegin', list.map(good => renderProduct(good, good.img)).join(''));
};

renderCatalog(products);
