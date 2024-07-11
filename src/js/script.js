document.getElementById('dropdownNotification').addEventListener('click', function(event) {
  event.preventDefault();
  const dropdownMenuUser = document.getElementById('dropdownMenuNotification');
  dropdownMenuUser.classList.toggle('opacity-0');
  dropdownMenuUser.classList.toggle('invisible');
  dropdownMenuUser.classList.toggle('opacity-100');
});

document.getElementById('dropdownUser').addEventListener('click', function(event) {
  event.preventDefault();
  const dropdownMenuUser = document.getElementById('dropdownMenuUser');
  dropdownMenuUser.classList.toggle('opacity-0');
  dropdownMenuUser.classList.toggle('invisible');
  dropdownMenuUser.classList.toggle('opacity-100');
});

// Fechar o dropdown ao clicar fora dele
document.addEventListener('click', function(event) {
  var dropdownMenu = document.getElementById('dropdownMenuNotification');
  var dropdownLink = document.getElementById('dropdownNotification');
  if (!dropdownLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('opacity-0');
    dropdownMenu.classList.add('invisible');
    dropdownMenu.classList.remove('opacity-100');
  }
});

document.addEventListener('click', function(event) {
  var dropdownMenu = document.getElementById('dropdownMenuUser');
  var dropdownLink = document.getElementById('dropdownUser');
  if (!dropdownLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('opacity-0');
    dropdownMenu.classList.add('invisible');
    dropdownMenu.classList.remove('opacity-100');
  }
});

// window.onclick = function(event) {
//   if (!event.target.closest('.dropdown')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if(!openDropdown.classList.contains('opacity-0') && !openDropdown.classList.contains('invisible')) {
//         openDropdown.classList.add('opacity-0');
//         openDropdown.classList.add('invisible');
//         openDropdown.classList.remove('opacity-100');
//       }
//     }
//   }
// }