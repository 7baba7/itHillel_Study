function calculate(arg1, arg2, sign) {
  switch (sign) {
    case "+":
      return `${arg1} + ${arg2} = ${arg1 + arg2}`;

    case "-":
      return `${arg1} - ${arg2} = ${arg1 - arg2}`;

    case "*":
      return `${arg1} * ${arg2} = ${arg1 * arg2}`;

    case "/":
      return `${arg1} / ${arg2} = ${arg1 / arg2}`;

    default:
      return `Некоректный ввод.`;
  }
}
let userAnswer;
let arrayEnter;
userAnswer = prompt(
  "Введите ваш пример для решения, в формате arg1 <знак> arg2."
);
arrayEnter = userAnswer.split(" "); // разделяем строку на массив используя пробел как разделитель

for (let i = 0; i < arrayEnter.length; i++) {
  //пробегаемся циклом по массиву и удаляем пустые значения
  while (arrayEnter[i] == "") {
    arrayEnter.splice(i, 1);
  }
}

alert(calculate(Number(arrayEnter[0]), Number(arrayEnter[2]), arrayEnter[1]));
