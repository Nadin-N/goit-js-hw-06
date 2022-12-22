// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const showName = (event) => {
	if (inputEl.value !== "") {
		spanEl.textContent = inputEl.value;
	} else {
		spanEl.textContent = "Anonymous";
	}
};

inputEl.addEventListener("input", showName);
