function isCheckTypeOfEl(obj) {
  const { el: item, elType: type } = obj;
  // console.log(item, type);
  // item - змінна
  // typeOfItem - перевірка відповідності типу змінній

  let isUse;
  const isObjItem = typeof item === "object";
  const isObjType = type === "object";

  const isArrayItem = Array.isArray(item);
  const isArrayType = type === "array" && isObjItem;

  const isFnItem = typeof item === "function";
  const isFnType = type === "function";

  const isStrItem = typeof item === "string";
  const isStrType = type === "string";

  const isNumItem = typeof item === "number";
  const isNumType = type === "number";

  const isNanItem = isNaN(item);
  const isNanType = type === "nan";

  const currentTypeOfEl = typeof item;
  const strWrongNumber = `The value of variable ${item} of type "${currentTypeOfEl}" does not correspond to type "${type}".`;

  switch (true) {
    case isFnType && isFnItem:
      // console.log("isFn");
      isUse = true;
      return isUse;

    case isArrayType && isArrayItem:
      // console.log("isArray");
      isUse = true;
      return isUse;

    case isObjType && isObjItem:
      // console.log("isObj");
      isUse = true;
      return isUse;

    case isStrType && isStrItem:
      // console.log("isStr");
      isUse = true;
      return isUse;

    case !isNanItem && isNumType && isNumItem:
      // console.log("number");
      isUse = true;
      return isUse;

    case isNanItem && isNanType:
      // console.log("isNaN");
      isUse = true;
      return isUse;

    default:
      console.log(strWrongNumber);
      isUse = false;
      return isUse;
  }
}
function asd() {}
console.log(isCheckTypeOfEl({ el: 10, elType: "number" }));
