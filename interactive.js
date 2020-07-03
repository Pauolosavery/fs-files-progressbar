// ТОЛЬКО ДЛЯ РЕЛИЗА 4!

// Тут представлена функция, которая открывает интерактивную консоль.
// Можешь нажимать на кнопки, и консоль тут же будет говорить тебе на 
// какую кнопку ты нажал.
// Разбираться в том как работает метод пока не обязательно,
// тебе надо его запустить в своей программе,
// что позволит увидеть, что синхронные методы 
// сильно тормозят взаимодействие программы с пользователем.
const readline = require('readline');

function runInteractiveConsole() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      console.log(`You pressed the "${str}" key`);
    }
  });
}

module.exports = runInteractiveConsole;
