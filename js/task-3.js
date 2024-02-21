/**
 * Перевіряє, чи є переданий елемент числом.
 * @param {*} item - Елемент, який слід перевірити.
 * @returns {boolean} - Повертає true, якщо елемент є числом, інакше - false.
 */
function isNumber(item) {
  // Тип, який ми очікуємо для числа
  const expectedType = "number";

  // Перевіряємо, чи тип переданого елемента є числом і відповідає очікуваному типу
  const isNum = !isNaN(item) && typeof item === expectedType;

  // Якщо тип не є числом, виводимо повідомлення про помилку в консоль
  if (!isNum) {
    console.error(
      `Значення змінної ${item} типу "${typeof item}" не відповідає типу "${expectedType}"`
    );
  }

  // Повертаємо true, якщо елемент є числом, інакше - false
  return isNum;
}

/**
 * Функція обчислює ширину елемента, враховуючи розміри контенту, відступів і рамок.
 *
 * @param {string} content - Розмір контенту в форматі рядка ("50px").
 * @param {string} padding - Розмір відступів в форматі рядка ("8px").
 * @param {string} border - Розмір рамок в форматі рядка ("4px").
 * @returns {number} - Ширина елемента в пікселях.
 */

function getElementWidth(content, padding, border) {
  const objInput = { content: content, padding: padding, border: border };
  const pxRegex = /^(\d+(\.\d+)?)px$/;
  for (key in objInput) {
    let inputString = objInput[key];
    let isValidNumber = pxRegex.test(inputString);
    if (!isValidNumber) {
      console.error(key, objInput[key], "- not valid value");
      return;
    }
  }
  // // Перетворюємо вхідні значення з рядкового типу в числовий
  const contentN = +objInput.content.split("px")[0];
  const paddingN = +objInput.padding.split("px")[0];
  const borderN = +objInput.border.split("px")[0];
  // console.log("contentN", contentN, "paddingN", paddingN, "borderN", borderN);

  // Обчислюємо ширину елемента, додаючи двічі відступи та двічі рамки до контенту
  const width = contentN + 2 * paddingN + 2 * borderN;
  // Повертаємо результат
  return width;
}

// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 3. Ширина елемента ");
console.log(getElementWidth("50px", "8px", "4px")); //74
console.log(getElementWidth("60px", "12px", "8.5px")); //101
console.log(getElementWidth("200px", "0px", "0px")); //200
