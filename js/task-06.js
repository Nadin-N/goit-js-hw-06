// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const refs = {
	inputEl: document.querySelector("#validation-input"),
	maxSymbolValue: document.querySelector("#validation-input").dataset.length,
};

const checkInputSymbols = (event) => {
	if (refs.inputEl.value.length <= refs.maxSymbolValue) {
		if (refs.inputEl.classList.contains("invalid")) {
			refs.inputEl.classList.remove("invalid");
		}
		refs.inputEl.classList.add("valid");
	} else {
		if (refs.inputEl.classList.contains("valid")) {
			refs.inputEl.classList.remove("valid");
		}
		refs.inputEl.classList.add("invalid");
	}
};
refs.inputEl.addEventListener("blur", checkInputSymbols);
