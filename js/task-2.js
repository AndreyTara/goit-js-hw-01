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
  // `Значення змінної ${item} типу "${typeof item}" не відповідає типу "${expectedType}"`
  if (!isStr) {
    console.error(
      `Invalid value for ${item}: expected type "${expectedType}", got "${typeof item}"`
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
      `Invalid value for ${item}: expected type "${expectedType}", got "${typeof item}"`
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
    console.error(
      `The values "price = ${price}" or "deliveryFee= ${deliveryFee}" are not valid`
    );
    return;
  }

  if (!isString(country)) {
    // Генеруємо повідомлення з валідації змнної назви країни
    console.error(`The value "country = ${country}" is not valid.`);
    return;
  }
  const totalPrice = price + deliveryFee;
  return `"Shipping to ${country} will cost ${totalPrice} credits"`;
}
// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 2. Доставка товару ");
console.log(getShippingMessage("Australia", 120, 10)); //"Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); //"Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); //"Shipping to Sweden will cost 120 credits"
