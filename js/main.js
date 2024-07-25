const elDarkModeButton = document.querySelector('.dark-button');

if(localStorage.getItem('darkmode') === document.body.classList.toggle('dark-mode')){
  document.body.classList = 'dark-mode'
}else{
}


if(elDarkModeButton){
  elDarkModeButton.addEventListener( 'click', function(evt) {
    evt.preventDefault()
    localStorage.setItem('darkmode', document.body.classList.toggle('dark-mode'))
  });
}


// elDarkModeButton.addEventListener( 'click', function() {
//   document.body.classList.toggle('dark-mode');
// });
