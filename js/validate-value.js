// Функція для перевірки відповідності типу змінної до зазначеного типу
/**
 * Генерує повідомлення про замовлення дроїдів з вказаною кількістю та ціною за одиницю.
 *
 * @param {any} item - змінна
 * @param {sttring} type тип змінної
 * @returns {boolean} - Повідомлення про замовлення дроїдів та загальну вартість.
 */
function isCheckTypeOfEl(obj) {
  // Деструктуризація об'єкта obj, витягуємо значення el і elType
  const { el: item, elType: type } = obj;

  // Ініціалізація змінної isUse, яка визначає, чи відповідає тип змінної типу
  let isUse;

  // Перевірка, чи є змінна item об'єктом та тип type - "object"
  const isObjItem = typeof item === "object";
  const isObjType = type === "object";

  // Перевірка, чи є змінна item масивом, тип type - "array" і змінна item є об'єктом
  const isArrayItem = Array.isArray(item);
  const isArrayType = type === "array" && isObjItem;

  // Перевірка, чи є змінна item функцією та тип type - "function"
  const isFnItem = typeof item === "function";
  const isFnType = type === "function";

  // Перевірка, чи є змінна item рядком та тип type - "string"
  const isStrItem = typeof item === "string";
  const isStrType = type === "string";

  // Перевірка, чи є змінна item числом, тип type - "number"
  const isNumItem = typeof item === "number";
  const isNumType = type === "number";

  // Перевірка, чи змінна item є NaN, тип type - "nan"
  const isNanItem = Number.isNaN(item);
  const isNanType = type === "nan";

  // Отримання фактичного типу змінної item
  const currentTypeOfEl = typeof item;

  // Повідомлення про помилку для невідповідності типу
  const strWrongMessage = `The value of variable ${item} of type "${currentTypeOfEl}" does not correspond to type "${type}".`;

  // Використання оператора switch для визначення відповідності типу
  switch (true) {
    case isFnType && isFnItem:
      isUse = true;
      return isUse;

    case isArrayType && isArrayItem:
      isUse = true;
      return isUse;

    case isObjType && isObjItem:
      isUse = true;
      return isUse;

    case isStrType && isStrItem:
      isUse = true;
      return isUse;

    case !isNanItem && isNumType && isNumItem:
      isUse = true;
      return isUse;

    case isNanItem && isNanType:
      isUse = true;
      return isUse;

    default:
      console.log(strWrongMessage);
      isUse = false;
      return isUse;
  }
}

// Приклад використання функції
console.log(isCheckTypeOfEl({ el: "xc12", elType: "number" }));
