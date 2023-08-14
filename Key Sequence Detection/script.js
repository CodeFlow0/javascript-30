const pressed = [];
const secretCode = 'jacob';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 2, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('CORRECT!');
    cornify_add();
  }
  console.log(pressed);
});