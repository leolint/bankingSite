function openQuestionDescription () {
  const buttons = document.querySelectorAll('.questions_wrapper-item--title');

  buttons.forEach(button => {
    const arrow = button.children[0]
    const text = button.nextElementSibling

    button.addEventListener('click' , function() {
        text.classList.toggle('openDescriptionText')
        arrow.classList.toggle('arrowRotate')
    })

  })

}

openQuestionDescription();

function openMenu () {
  const menu = document.querySelector('.header_mobileNav')
  const button = document.querySelector('.header_mobileButton')

  button.addEventListener('click' , function () {
    menu.classList.toggle('openMenu')
  })
}

openMenu()

