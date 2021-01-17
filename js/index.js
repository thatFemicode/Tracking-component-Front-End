// Getting Ui variables needed
const button = document.querySelector(".switcher");
const navContainer = document.querySelector(".mobile-nav .nav-container");

button.addEventListener("click", harmTwist);

function harmTwist(e) {
  e.preventDefault();
  if (e.target.classList.contains("harmburger")) {
    button.innerHTML = `<img class="x" src="./dist/img/icon-close.svg" alt="icon-close">
        `;

    navContainer.style.display = "block";
    setTimeout(() => {
      navContainer.style.transform = "translateY(0)";
    }, 1);
  } else {
    button.innerHTML = `<img class="harmburger" src="./dist/img/icon-hamburger.svg" alt="icon-close">`;
    navContainer.style.transform = "translateY(-80px)";
    setTimeout(() => {
      navContainer.style.display = "none";
    }, 200);
  }
}
