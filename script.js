const keys = document.querySelectorAll('.key');

// Функция за пускане на нота
function playNote(note) {
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.currentTime = 0;
  audio.play();
}

// Натискане с мишка
keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    playNote(key.dataset.note);
    key.classList.add('active');
  });
  key.addEventListener('mouseup', () => {
    key.classList.remove('active');
  });
  key.addEventListener('mouseleave', () => {
    key.classList.remove('active');
  });
});

// Натискане с клавиатура
const keyMap = {
  'a': 'C4',
  'w': 'C#4',
  's': 'D4',
  'e': 'D#4',
  'd': 'E4',
  'f': 'F4',
  't': 'F#4',
  'g': 'G4',
  'y': 'G#4',
  'h': 'A4',
  'u': 'A#4',
  'j': 'B4',
  'k': 'C5'
};

window.addEventListener('keydown', (e) => {
  const note = keyMap[e.key];
  if(note) {
    playNote(note);
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if(key) key.classList.add('active');
  }
});

window.addEventListener('keyup', (e) => {
  const note = keyMap[e.key];
  if(note) {
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if(key) key.classList.remove('active');
  }
});
