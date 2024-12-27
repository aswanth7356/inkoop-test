const inputField = document.getElementById('numberInput');
    const message = document.getElementById('message');

    inputField.addEventListener('input', () => {
      const value = parseInt(inputField.value, 10);

      if (isNaN(value)) {
        message.textContent = '';
        return;
      }

      if (value < 0) {
        message.textContent = 'Enter a positive value';
      } else if (value % 2 === 0) {
        message.textContent = `Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
      } else {
        message.textContent = `Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
      }
    });