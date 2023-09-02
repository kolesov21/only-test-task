const buttons = document.querySelector('.buttons-group');

buttons.addEventListener('click', toggleText)

function toggleText(event){
  const button = event.target.closest('.button');
  if (button){
    const buttonText = button.querySelector('.text');
    const buttonIcon = button.querySelector('.icon');

    if (buttonText.style.display === 'inline'){
      buttonIcon.src = 'src/plus.svg';
      button.style.width = 40 + 'px';
      button.style.opacity = 0.8;
      buttonText.style.display = 'none';
    }else{
      buttonIcon.src = 'src/minus.svg';
      buttonText.style.display = 'inline';
      const textWidth = buttonText.offsetWidth;
      button.style.width = 40 + textWidth + 'px';
      button.style.opacity = 1;
    }
  }
}