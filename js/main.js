const elDarkModeButton = document.querySelector('.dark-button');

elDarkModeButton.addEventListener( 'click', function() {
  document.body.classList.toggle('dark-mode');
});
