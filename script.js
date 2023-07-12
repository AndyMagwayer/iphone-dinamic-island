const popup = document.querySelector('.island-popup')
popup.onclick = () => popup.classList.toggle('active')
popup.addEventListener('mouseout',() => popup.classList.remove('active'))