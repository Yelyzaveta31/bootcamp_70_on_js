// // task-1
// const listElement = document.querySelector(".list")
// console.log(listElement);

// const listItems = document.querySelectorAll(".item")
// console.log(listItems);

// const firstElement = listElement.firstElementChild
// console.log(firstElement);

// const firstItem = listItems[0];
// console.log(firstItem);

// const item = document.querySelector(".item");
// console.log(item);

// const secondItem = item.nextElementSibling;
// console.log(secondItem);

// const prelastItem = listElement.lastElementChild.previousElementSibling;
// console.log(prelastItem);

// const link = document.querySelector(".link");
// console.log(link.attributes);

// link.href = "./test";
// console.log(link.attributes);
// console.log(link.href);

// link.setAttribute("targer","_blank");
// console.log(link.target);

// link.removeAttribute("target");
// console.log(link.target);
// console.log(link.attributes);

// const instagramLink = document.querySelector('[href="instagram.com"]');
// console.log(instagramLink);

// const thirdLink = document.querySelector('[data-link]');
// console.log(thirdLink);

// if (thirdLink.dataset.link === 'test');

// instagramLink.textContent = 'instagram';

// prelastItem.classList.add('preItem');
// console.log(prelastItem.attributes);


// task-2
// Створити заголовок з текстом 
// 'Привіт, це перший мій створений елемент!'
// // та додати до нього клас “title”, заздалегідь створений в style.css.
// // Додати заголовок на сторінку

// const titleElement = document.createElement("h1");
// titleElement.textContent = "Привіт, це перший мій створений елемент!";
// titleElement.classList.add("title");
// titleElement.style.color = "red"
// titleElement.style.textShadow = "2px 3px 4px green"

// document.body.prepend(titleElement);


// task-3

// // Створити статтю (наприклад рецепт млинців), 
// де є заголовок, зображення, опис (текст), посилання та кнопка зі
//  всіма обов’язковими атрибутими.
// //     (можна використати абсолютний або відносний шлях до зображення)
//  та додати їх на сторінку.
// Застилити на свій смак та наповнити контентом.

// const articleElement = document.createElement("article");
// const titleElement = document.createElement("h1");
// titleElement.textContent = "Рецепт млинців";
// const imageElement = document.createElement("img");
// imageElement.src = "https://images.unian.net/photos/2020_09/1599769599-6966.jpg?r=678372";
// imageElement.alt = "Млинці";
// imageElement.width = "500";
// const descElement = document.createElement("p");
// descElement.textContent = "Готувати до готовності";
// const buttonElement = document.createElement("button");
// buttonElement.textContent = "Детальніше";
// buttonElement.type = "button";
// buttonElement.classList.add("article-button");

// articleElement.append(titleElement, imageElement, descElement, buttonElement);
// console.log(articleElement);
// articleElement.style.backgroundColor = "pink";

// document.body.append(articleElement);

// task-4

const list = document.querySelector(".list");
console.log(list.innerHTML);
list.firstElementChild




// task-4


const products = [
    {
      productName: "🍎",
      price: 5,
      quantity: 8,
    },
    {
      productName: "🍇",
      price: 2,
      quantity: 6,
    },
    {
      productName: "🍋",
      price: 4,
      quantity: 6,
    },
    {
      productName: "🍓",
      price: 1,
      quantity: 3,
    },
];

const productList = document.querySelector(".product-list");
function createProducMarkup(productArr) {
    const productMarkup = productArr.map(el => {
        
    })
    
}
