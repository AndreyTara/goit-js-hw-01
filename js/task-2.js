/**
 * Перевіряє, чи є переданий елемент рядком.
 * @param {*} item - Елемент, який слід перевірити.
 * @returns {boolean} - Повертає true, якщо елемент є рядком, інакше - false.
 */
function isString(item) {
  // Тип, який ми очікуємо для рядка
  const expectedType = "string";

  // Перевіряємо, чи тип переданого елемента відповідає очікуваному типу
  const isStr = typeof item === expectedType;

  // Якщо тип не є рядком, виводимо повідомлення про помилку в консоль
  if (!isStr) {
    console.error(
      `Значення змінної ${item} типу "${typeof item}" не відповідає типу "${expectedType}"`
    );
  }

  // Повертаємо true, якщо елемент є рядком, інакше - false
  return isStr;
}
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
 * Генерує повідомлення про вартість доставки до вказаної країни.
 *
 * @param {string} country - Країна доставки.
 * @param {number} price - Вартість товару.
 * @param {number} deliveryFee - Вартість доставки.
 * @returns {string} - Повідомлення про вартість доставки.
 */

function getShippingMessage(country, price, deliveryFee) {
  if (!isNumber(price) || !isNumber(deliveryFee)) {
    // Генеруємо повідомлення з валідації змнної price та deliveryFee
    return `value "price = ${price}" or "deliveryFee= ${deliveryFee}" not valid`;
  }

  if (!isString(country))
    // Генеруємо повідомлення з валідації змнної назви країни
    return `value "country = ${country}" not valid.`;
}
// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 2. Доставка товару ");
console.log(
  `Виклик getShippingMessage("Australia", 120, 50) повертає`,
  getShippingMessage("Australia", 120, 50)
);
console.log(
  `Виклик  getShippingMessage("Germany", 80, 20) повертає`,
  getShippingMessage("Germany", 80, 20)
);
console.log(
  `Виклик  getShippingMessage("Sweden", 100, 20) повертає`,
  getShippingMessage("Sweden", 100, 20)
);
