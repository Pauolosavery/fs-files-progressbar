// ONLY FOR RELEASE 4!

// Here you can see a function that opens the interactive console.
// You can press the buttons and the console will immediately tell you
// which button you pressed.
// It is not necessary to understand how the method works yet,
// you need to run it in your program,
// which will allow you to see that synchronous methods
// really slow down the interaction of the program with the user.
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
