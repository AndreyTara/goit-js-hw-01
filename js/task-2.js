/**
 * Генерує повідомлення про вартість доставки до вказаної країни.
 *
 * @param {string} country - Країна доставки.
 * @param {number} price - Вартість товару.
 * @param {number} deliveryFee - Вартість доставки.
 * @returns {string} - Повідомлення про вартість доставки.
 */

function getShippingMessage(country, price, deliveryFee) {
  // Генеруємо повідомлення з врахуванням країни та загальної вартості (вартість товару + вартість доставки)
  return `"Shipping to ${country} will cost ${price + deliveryFee} credits"`;
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
