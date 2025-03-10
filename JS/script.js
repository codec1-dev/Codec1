// Function to load header and footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header").innerHTML = data;
      });

  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer").innerHTML = data;
      });
});

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "10px";
  toggleButton.style.background = "#FACC15";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });
});

// Dark Mode Styles
const darkModeCSS = document.createElement("style");
darkModeCSS.innerHTML = `
  .dark-mode {
      background: #101010 !important;
      color: #FFF !important;
  }
`;
document.head.appendChild(darkModeCSS);

// Blog Search Function
function searchBlogs() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let articles = document.querySelectorAll(".post");

  articles.forEach((article) => {
      let title = article.querySelector("h2").textContent.toLowerCase();
      let preview = article.querySelector(".post-preview").textContent.toLowerCase();

      if (title.includes(input) || preview.includes(input)) {
          article.style.display = "flex";
      } else {
          article.style.display = "none";
      }
  });
}
