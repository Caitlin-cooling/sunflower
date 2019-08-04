const spotify = '.js-spotify';
const login = '.js-spotify-login'

const authorise = function () {
  console.log('clicked');
};

window.onload = function () {
  const loginButton = document.querySelector(login);
  loginButton.addEventListener('click', authorise);
};
