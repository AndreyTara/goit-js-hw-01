// function isNumberElements(...arguments) {
//   let result = [];
//   let arr = arguments;
//   // const arr = [
//   //   1,
//   //   0,
//   //   -1,
//   //   NaN,
//   //   "1",
//   //   "0",
//   //   "-1",
//   //   "",
//   //   { key: 1 },
//   //   { key: 0 },
//   //   { key: -1 },
//   //   [1],
//   //   [0],
//   //   [-1],
//   //   null,
//   //   undefined,
//   //   function fn() {},
//   //   0n,
//   //   10n,
//   //   -10n,
//   // ];
//   let isUseNumber;
//   arr.forEach((item) => {
//     // const isObj = typeof item === "object";
//     const isBigInt = typeof item === "bigint";
//     // const isParse = Number.parseFloat(item);
//     // const isArr = Array.isArray(item);
//     const isNumber = typeof item === "number";
//     let isTypeOfEl = typeof item;
//     let isNan;
//     let strWrongNumber;
//     if (!isBigInt) {
//       isNan = isNaN(item);
//     }
//     isUseNumber = !isNan && isNumber;
//     strWrongNumber = `typeof is ${isTypeOfEl}`;
//     if (isNan) {
//       strWrongNumber = `value - is not a number. ( ${strWrongNumber})`;
//     }
//     if (!isUseNumber) {
//       console.log(item, strWrongNumber);
//     }
//     result.push({ item: strWrongNumber });
//   });
//   return isUseNumber;
// }
// console.log(isNumberElements(10));

// function isNumberElements(...arguments) {
//   let result = [];
//   let obj = arguments;
//   const arr = [
//     1,
//     0,
//     -1,
//     NaN,
//     "1",
//     "0",
//     "-1",
//     "",
//     { key: 1 },
//     { key: 0 },
//     { key: -1 },
//     [1],
//     [0],
//     [-1],
//     null,
//     undefined,
//     function fn() {},
//     0n,
//     10n,
//     -10n,
//   ];
//   console.log(odj);
//   let isUseNumber;
//   // arr.forEach((item) => {
//   //   // const isObj = typeof item === "object";
//   //   const isBigInt = typeof item === "bigint";
//   //   // const isParse = Number.parseFloat(item);
//   //   // const isArr = Array.isArray(item);
//   //   const isNumber = typeof item === "number";
//   //   let isTypeOfEl = typeof item;
//   //   let isNan;
//   //   let strWrongNumber;
//   //   if (!isBigInt) {
//   //     isNan = isNaN(item);
//   //   }
//   //   isUseNumber = !isNan && isNumber;
//   //   strWrongNumber = `typeof is ${isTypeOfEl}`;
//   //   if (isNan) {
//   //     strWrongNumber = `value - is not a number ( ${strWrongNumber})`;
//   //   }
//   //   if (!isUseNumber) {
//   //     console.log(item, strWrongNumber);
//   //   }
//   //   result.push({ item: strWrongNumber });
//   // });
//   // return isUseNumber;
// }
// console.log(isNumberObj({ asd: "string" }));

function isUseOfObj({ el: item, elType: type }) {
  // item - змінна
  // typeOfItem - перевірка відповідності типу змінній

  let isUse;
  const isObjItem = typeof item === "object";
  const isObjType = type === "object";

  const isArrayItem = Array.isArray(item);
  const isArrayType = type === "array" && isObjItem;

  const isFnItem = typeof item === "function";
  const isFnType = type === "function";

  // const isBigIntItem = typeof item === "bigint";
  // const isBigIntType = type === "bigint";

  // const isParseFloat = Number.parseFloat(item);

  const isNumItem = typeof item === "number";
  const isNumType = type === "number";
  // if (!isBigInt) {
  //   isNanItem = isNaN(item);
  // }
  const isNanItem = isNaN(item);
  const isNanType = type === "NaN";

  let currentTypeOfEl = typeof item;
  let strWrongNumber = `Variable value is "${currentTypeOfEl}" does not match type "${type}".`;
  if (isNanItem) {
    strWrongNumber = `Variable value is not a number. `;
  }

  switch (true) {
    // case isBigIntItem === isBigIntType:
    //   isUse = true;
    //   return isUse;

    case isFnType && isFnItem:
      console.log("isFnType");

      isUse = true;
      return isUse;

    case isArrayType && isArrayItem:
      console.log("isArrayType");
      isUse = true;
      return isUse;

    case isObjType && isObjItem:
      console.log("isObjType");
      isUse = true;
      return isUse;

    case isNanItem && isNanType:
      console.log("NaN");
      isUse = true;
      return isUse;

    case !isNanItem && isNumType && isNumItem:
      console.log("number");
      isUse = true;
      return isUse;

    default:
      console.log("Type of item don't faund!");
  }

  console.log(item, strWrongNumber);
  isUse = false;
  return isUse;
}

console.log(isUseOfObj({ el: "sdf", elType: "string" }));
