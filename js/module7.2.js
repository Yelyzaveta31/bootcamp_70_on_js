// // Написати скрипт в якому користувач друкує
//  на клавіатурі текст який відображається на сторінці.
// //  При натисканні на кнопку “Очистити” 
// очищувати надрукований текст.

const inpute = document.createElement("input");
inpute.setAttribute("type", "text");

const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Reset";

const text = document.createElement("p");
document.body.append(inpute, button);

function eventHadler() {
    text.textContent = `Ви написали : ${input.value}`; 
}

inpute.addEventListener("input", eventHadler);
button.addEventListener("click", () => (inpute.value = ""))


// Перемістити елемент з id="box" наліво, якщо користувач натискає стрілку вліво, 
// та направо, якщо користувач натискає стрілку вправо, під час події keydown.
// <div id="box"></div>
// #box {
//   width: 50px;
//   height: 50px;
//   background-color: red;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }