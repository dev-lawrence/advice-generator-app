const button = document.querySelector('#btn');
const adviceId = document.querySelector('.advice-id');
const adviceOutput = document.querySelector('.advice-content');
const body = document.querySelector('body');

const showAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');

    if (!response.ok) {
      throw new Error('Failed to fetch advice');
    }

    const data = await response.json();
    const adviceSlip = data.slip;
    const { id, advice } = adviceSlip;
    adviceId.innerHTML = `<span class="advice-id">${id}</span>`;
    adviceOutput.innerHTML = `<h3 class="advice-text">“${advice}”</h3>`;
  } catch (error) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');
    errorContainer.innerHTML =
      '<p class="error-message">Failed to fetch advice. Please try again later.</p>';
    body.appendChild(errorContainer);

    setTimeout(() => {
      errorContainer.classList.remove('error-container');
    }, 3000);
  }
};

button.addEventListener('click', showAdvice);
