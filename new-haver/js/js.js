
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
  });


// // Select all dropdown headers
// const dropdownHeaders = document.querySelectorAll(".dropdown-header");

// // Add click event listener to each header
// dropdownHeaders.forEach((header) => {
//   header.addEventListener("click", () => {
//     const content = header.nextElementSibling; // Find the associated dropdown content

//     // Toggle the dropdown content visibility
//     content.classList.toggle("show2");
//     header.classList.toggle("active"); // Rotate the icon
//   });
// });



// ------header-stkey-----
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Add 'scrolled' class when scrolled
  } else {
    header.classList.remove("scrolled"); // Remove class when at top
  }
});

// function toggleMenu(id) {
//   // Sabhi submenus ko band karo
//   const allMenus = document.querySelectorAll("ul ul");
//   allMenus.forEach(menu => (menu.style.display = "none"));

//   // Sirf selected menu ko toggle karo
//   const submenu = document.getElementById(id);
//   if (submenu.style.display === "none" || submenu.style.display === "") {
//     submenu.style.display = "block";
//   }
//   else {
//     submenu.style.display = "none"; // Hide submenu
//   }
// }

// function toggleMenu(id) {
//   const submenu = document.getElementById(id);
  
//   // Toggle submenu visibility
//   if (submenu.style.display === "none" || submenu.style.display === "") {
//     submenu.style.display = "block"; // Show submenu
//   } else {
//     submenu.style.display = "none"; // Hide submenu
//   }
// }

function toggleMenu(id) {
  // Hide all submenus
  const allMenus = document.querySelectorAll("ul ul");
  allMenus.forEach(menu => menu.style.display = "none");

  // Get the selected submenu
  const submenu = document.getElementById(id);

  // Check computed style and toggle visibility
  const isHidden = window.getComputedStyle(submenu).display === "none";
  submenu.style.display = isHidden ? "block" : "none";
}


// ------after-and-before------

const container = document.querySelector(".container-2");
const afterImg = document.querySelector(".after-img");
const slider = document.querySelector(".slider");

let isDragging = false;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  moveSlider(e);
});

container.addEventListener("mousemove", (e) => {
  if (isDragging) {
    moveSlider(e);
  }
});

container.addEventListener("mouseup", () => {
  isDragging = false;
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
});

function moveSlider(e) {
  const rect = container.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;

  // Ensure the slider stays within bounds
  offsetX = Math.max(0, Math.min(offsetX, rect.width));

  const percentage = (offsetX / rect.width) * 100;

  // Update slider and after image clip
  slider.style.left = `${percentage}%`;
  afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}


