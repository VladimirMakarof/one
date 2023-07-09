let h1Element = document.createElement("h1");
h1Element.id = "hello";
h1Element.textContent = "Hello, World!";

// Разбиваем текст на отдельные буквы
let letters = h1Element.textContent.split("");

// Очищаем содержимое заголовка
h1Element.textContent = "";

// Добавляем каждую букву с классом changing-color
letters.forEach(function(letter) {
    let span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("changing-color");
    h1Element.appendChild(span);
});

// Добавляем созданный h1 на страницу
document.body.appendChild(h1Element);

// Функция для генерации случайного цвета
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Изменяем цвет каждой буквы каждую секунду
setInterval(function() {
    let colorElements = document.getElementsByClassName("changing-color");
    for (let i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = getRandomColor();
    }
}, 1000);
