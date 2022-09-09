const button = document.querySelector('#btn');
const adviceId = document.querySelector('.advice-id');
const adviceOutput = document.querySelector('.advice-content');

const showData = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      const adviceData = data.slip;
      adviceId.innerHTML = `<span class="advice-id">${adviceData.id}</span>`;
      adviceOutput.innerHTML = `<h3 class="advice-text">“${adviceData.advice}”</h3>`;
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener('click', showData);
