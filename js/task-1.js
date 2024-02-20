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
 * Генерує повідомлення про замовлення дроїдів з вказаною кількістю та ціною за одиницю.
 *
 * @param {number} quantity - Кількість дроїдів, яку користувач замовив.
 * @param {number} pricePerDroid - Вартість одного дроїда.
 * @returns {string} - Повідомлення про замовлення дроїдів та загальну вартість.
 */

function makeTransaction(quantity, pricePerDroid) {
  if (!isNumber(quantity) || !isNumber(pricePerDroid)) {
    return `value "quantity = ${quantity}" or "pricePerDroid= ${pricePerDroid}" not valid`;
  }
  // Розраховуємо загальну вартість замовлення
  const totalCoast = quantity * pricePerDroid;
  // Генеруємо повідомлення про замовлення
  return `You ordered ${quantity} droids worth ${totalCoast} credits!`;
}
// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 1. Замовлення дроїдів ");
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
