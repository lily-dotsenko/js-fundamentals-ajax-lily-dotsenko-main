// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("getUserButton");
  const input = document.getElementById("userNameInput");
  const cityEl = document.getElementById("userCity");

  button.addEventListener("click", () => {
    const name = input.value.trim();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((u) => u.name === name);
        if (user) {
          cityEl.textContent = user.address.city;
        } else {
          cityEl.textContent = "";
        }
      });
  });
});
