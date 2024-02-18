/**
 * Генерує повідомлення про замовлення дроїдів з вказаною кількістю та ціною за одиницю.
 *
 * @param {number} quantity - Кількість дроїдів, яку користувач замовив.
 * @param {number} pricePerDroid - Вартість одного дроїда.
 * @returns {string} - Повідомлення про замовлення дроїдів та загальну вартість.
 */
function makeTransaction(quantity, pricePerDroid) {
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
