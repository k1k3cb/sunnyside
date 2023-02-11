const toggleMenuElement= document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');

function toggleMenu () {
  console.log("click click");
  menuElement.classList.toggle('hide');

} 


toggleMenuElement.addEventListener('click',toggleMenu);

