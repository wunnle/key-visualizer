if (!PRODUCTION) {
  require('../index.html')
}

import './css/style.scss'

document.onkeydown = (e) => {
  const key = document.querySelector('.key');
  key.innerHTML = keycodeToKeyName(e.key)
  if(key.innerHTML.length > 1) {
    key.classList.add('key--longname')
  } else {
    key.classList.remove('key--longname')
  }
  document.querySelector('.key').classList.remove('show')
  setTimeout(() => document.querySelector('.key').classList.add('show'), 0)
}


const keycodeToKeyName = (keycode) => {
  console.log({keycode});
  switch (keycode) {
    case 'ArrowRight':
      return '→'
    case 'ArrowLeft':
      return '←'
    case 'ArrowUp':
      return '↑'
    case 'ArrowDown':
      return '↓'
    case 'Backspace':
      return '⌫'
    case 'Shift':
      return '⇧'
    case 'Enter':
      return '⏎'
    case 'Control':
      return 'Ctrl'
    case ' ':
      return '␣'
    case 'PageUp':
      return 'PgUp'
    case 'PageDown':
      return 'PgDn'
    case 'CapsLock':
      return 'Caps'
    case 'Tab':
      return 'Tab'
    case 'Insert':
    case 'Delete':
    case 'End':
    case 'Home':
      return keycode
    default:
      return keycode.toLocaleUpperCase()
  }
}