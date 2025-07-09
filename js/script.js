function toggleMenu(){
  const navLinks = document.getElementById('nav-links');

navLinks.classList.toggle('active');
}

function modeToggle(){
  document.documentElement.classList.toggle('darkmode');
}

function toggleDropdown(event){
  const dropdowns = event.target.closest('.dropdown');

  if (dropdowns){
    const dropdownContent = document.querySelector('.dropdown-content');
    const chevronDown = document.querySelector('.fa-chevron-down');

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none"
      chevronDown.style.transform = "rotate(0deg)"
    }

    else{
      dropdownContent.style.display = "block"
      chevronDown.style.transform = "rotate(180deg)"
    }
  }
}
