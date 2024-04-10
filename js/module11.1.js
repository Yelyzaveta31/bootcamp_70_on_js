// Отримати список країн з REST Countries API Опис:
// Використайте публічне API REST Countries для отримання списку країн.
// Зробіть GET - запит за адресою
// https://restcountries.com/v3.1/all та перегляньте отримані дані про країни.


function getCountries() {
    const data = fetch('https://restcountries.com/v3.1/all').then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
    return data;
};

getCountries().then(response => createList(response))
.catch(error => {
    console.log(error);
    return error;
})

function createMarkUp() {
    const markUp = 
    `<li class="country-item">
        <h2 class="country-name">...</h2>
        <p class ="capital">...</p>
        <p class="'lang"></p>
        <img class="country-photo" src="" alt="">
    </li>`
   
    return markUp;
};

function createList(data) {
    const newList=data.map((country) => {
createMarkUp(country)
    })
    console.log(newList);
    return newList;
}



// listOfCountries.insertAdjacentHTML("beforend", markUp);