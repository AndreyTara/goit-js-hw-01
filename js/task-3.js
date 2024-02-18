/**
 * Функція обчислює ширину елемента, враховуючи розміри контенту, відступів і рамок.
 *
 * @param {string} content - Розмір контенту в форматі рядка ("50px").
 * @param {string} padding - Розмір відступів в форматі рядка ("8px").
 * @param {string} border - Розмір рамок в форматі рядка ("4px").
 * @returns {number} - Ширина елемента в пікселях.
 */
function getElementWidth(content, padding, border) {
  // Перетворюємо вхідні значення з рядкового типу в числовий
  const contentN = Number.parseFloat(content);
  const paddingN = Number.parseFloat(padding);
  const borderN = Number.parseFloat(border);
  // Обчислюємо ширину елемента, додаючи двічі відступи та двічі рамки до контенту
  const width = contentN + 2 * paddingN + 2 * borderN;
  // Повертаємо результат
  return width;
}

// Виводимо результати викликів функції з різними параметрами
console.log("Повертання результату функції: Задача 3. Ширина елемента ");
console.log(
  `Виклик getElementWidth("50px", "8px", "4px") повертає`,
  getElementWidth("50px", "8px", "4px")
);
console.log(
  `Виклик getElementWidth("60px", "12px", "8.5px") повертає `,
  getElementWidth("60px", "12px", "8.5px")
);
console.log(
  `Виклик getElementWidth("200px", "0px", "0px") повертає`,
  getElementWidth("200px", "0px", "0px")
);
