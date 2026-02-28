const hint = document.getElementById('hint');
const input = document.getElementById('input');

let timeoutId; // store the timer

input.addEventListener('input', () => {
  // 1️⃣ Update width dynamically
  if (input.value.trim() === '') {
    // input is empty → set default width
    input.style.width = '20ch';
  } else {
    // input has text → dynamic width
    let textLength = input.value.length;
    input.style.width = `${textLength + 2}ch`;
  }

  // 2️⃣ Hide hint immediately while typing
  hint.style.opacity = '0';
  clearTimeout(timeoutId);

  // 3️⃣ Show hint after 1 second if not empty
  if (input.value.trim() !== '') {
    timeoutId = setTimeout(() => {
      hint.style.opacity = '1';
    }, 1000);
  }
});