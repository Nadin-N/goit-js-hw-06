// Завдання
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesListEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesListEl.length}`);

const findAllLiItems = (arr) => {
	console.log(`Number of categories: ${categoriesListEl.length}`);
	arr.forEach((el) => {
		console.log(
			`Category: ${el.querySelector("h2").textContent}\nElements: ${
				el.lastElementChild.querySelectorAll("li").length
			}`
		);
	});
};

findAllLiItems(categoriesListEl);
