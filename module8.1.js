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

const listElement = document.querySelector(".products-list")

const productslist = products.map(product => {
    return `li class = "products-item"`
})