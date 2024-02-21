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
      `Invalid value for ${item}: expected type "${expectedType}", got "${typeof item}".`
    );
  }

  // Повертаємо true, якщо елемент є числом, інакше - false
  return isNum;
}

/**
 * Генерує повідомлення про замовлення дроїдів з вказаною кількістю та ціною за одиницю.
 *
 * @param {number} quantity - Кількість дроїдів, яку користувач замовив.
 * @param {number} pricePerDroid - Вартість одного дроїда.
 * @returns {string} - Повідомлення про замовлення дроїдів та загальну вартість.
 */

function makeTransaction(quantity, pricePerDroid) {
  // Проведення валыдації зміниих
  if (!isNumber(quantity) || !isNumber(pricePerDroid)) {
    console.error(
      `The values "quantity = ${quantity}" or "pricePerDroid= ${pricePerDroid}" are not valid.`
    );
    return;
  }
  // Розраховуємо загальну вартість замовлення
  const totalCost = quantity * pricePerDroid;
  // Генеруємо повідомлення про замовлення
  return `"You ordered ${quantity} droids worth ${totalCost} credits!"`;
}
// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 1. Замовлення дроїдів ");
console.log(makeTransaction(5, 3000)); //"You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); //"You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); //"You ordered 10 droids worth 5000 credits!"
