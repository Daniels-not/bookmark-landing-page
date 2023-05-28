const control = document.getElementsByClassName("control");
const image = document.getElementById("image");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

const updateContent = (index, imgSrc, title, desc) => {
  image.src = imgSrc;
  heading.innerHTML = title;
  removeActiveClass();
  control[index].classList.add("active");
  paragraph.innerHTML = desc;
};

control[0].onclick = function () {
  updateContent(
    0,
    "images/illustration-features-tab-1.svg",
    "Bookmark in one click",
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
  );
};

control[1].onclick = function () {
  updateContent(
    1,
    "images/illustration-features-tab-2.svg",
    "Intelligent search",
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  );
};

control[2].onclick = function () {
  updateContent(
    2,
    "images/illustration-features-tab-3.svg",
    "Share your bookmarks",
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  );
};

// Removes the active class after clicking another controller
function removeActiveClass() {
  for (let i = 0; i < control.length; i++) {
    control[i].classList.remove("active");
  }
}

const controls = document.getElementsByClassName("text");
const dropMenu = document.getElementsByClassName("drop-down-text");

for (let i = 0; i < controls.length; i++) {
  controls[i].onclick = function () {
    if (dropMenu[i].style.display === "none") {
      dropMenu[i].style.display = "block";
    } else {
      dropMenu[i].style.display = "none";
    }
  };
}

function validateForm() {
  const email = document.getElementById("email");
  const alert = document.getElementById("alert");
  const form = document.getElementById("formbox");
  const error = document.getElementById("img");

  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/; // Email address pattern

  if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    email.style.border = "2px solid hsl(231, 69%, 60%)";
    email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
    alert.innerHTML = "";
    error.style.opacity = "0";
    document.getElementById("formbox").reset(); // Resets form input field after successful submission
    return true;
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    email.style.border = "2px solid hsl(0, 94%, 66%)";
    email.style.borderBottom = "25px solid hsl(0, 94%, 66%)";
    alert.innerHTML = "Whoops, make sure it's an email";
    error.style.opacity = "1";
    return false;
  }
}

const menu = document.getElementById("mobileNav");
const button = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");

menu.style.display = "none";

button.onclick = function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    button.src = "images/icon-close.svg";
    logo.style.filter = "invert(1) brightness(100%)";
    button.style.filter = "invert(0)";
  } else {
    menu.style.display = "none";
    button.src = "images/icon-hamburger.svg";
    logo.style.filter = "invert(0)";
  }
};
