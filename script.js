const moonBtn = document.querySelector(".moonbtn");
const sunBtn = document.querySelector(".sunbtn");
const themeContainer = document.querySelector(".theme-container");

//  saved theme
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

//  button visibility
function updateButtonVisibility(isDark) {
  if (isDark) {
    moonBtn.classList.remove("btn");
    sunBtn.classList.add("btn");
  } else {
    moonBtn.classList.add("btn");
    sunBtn.classList.remove("btn");
  }
}

// default theme or switch
if (savedTheme) {
  document.body.classList.add(savedTheme + "-mode");
  updateButtonVisibility(savedTheme === "dark");
} else if (systemPrefersDark) {
  document.body.classList.add("dark-mode");
  updateButtonVisibility(true);
} else {
  document.body.classList.add("light-mode");
  updateButtonVisibility(false);
}

// Toggle function
function toggleTheme() {
  const isDark = document.body.classList.contains("dark-mode");

  document.body.classList.remove("light-mode", "dark-mode");

  if (isDark) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    updateButtonVisibility(false);
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    updateButtonVisibility(true);
  }
}

themeContainer.addEventListener("click", toggleTheme);
