// ДЗ №4
//ЗАДАНИЕ 1
let text1 = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`

let newText1 = text1.replace(/(['])/g, '"')

console.log(newText1)

//ЗАДАНИЕ 2

let text2 = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`

let newText2 = text2.replace(/(['])/g, '"')


console.log(newText2.replace(/\b"\b/g, '\''))









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
