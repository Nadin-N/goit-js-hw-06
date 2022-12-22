// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");
const inputEmail = document.querySelector("input[name=email]");
const inputName = document.querySelector("input[name=password]");

console.log(inputName);
console.log(inputEmail);

const onFormSubmit = (event) => {
	event.preventDefault();

	const formElementsArr = event.currentTarget.elements;

	const email = formElementsArr.email.value;
	const password = formElementsArr.password.value;

	if (email === "" || password === "") {
		alert("Всі поля повинні бути заповнені");
	} else {
		const FormData = {
			email,
			password,
		};
		console.log(FormData);
		loginForm.reset();
	}
};
loginForm.addEventListener("submit", onFormSubmit);

// for (let i = 0; i < formElementsArr.length - 1; i += 1) {
// 	while (formElementsArr[i].value === "") {
// 		alert("Всі поля повинні бути заповнені");
// 	}
// }
// const loginFormData = new FormData(event.currentTarget);

// const userName = data.get("user-name");

// console.log(loginFormData);

// while (formElementsArr[i].value !== "") {
// 	alert("Всі поля повинні бути заповнені");
// }

// loginFormData.forEach((value, name) => {
// 	console.log(`name: ${name}, value:${value}`);
// });
