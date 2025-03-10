document.addEventListener("DOMContentLoaded", function () {
    // Dynamically load header and footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            highlightActiveNavLink(); // Call function after loading header
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    // Function to highlight the active navigation link
    function highlightActiveNavLink() {
        let currentPage = window.location.pathname.split("/").pop(); // Get current filename

        let navLinks = {
            "index.html": "home-link",
            "about.html": "about-link",
            "blog.html": "blog-link",
            "contact.html": "contact-link",
            "web-development.html": "webdev-link",
            "python.html": "python-link",
            "javascript.html": "js-link",
            "css.html": "css-link"
        };

        if (navLinks[currentPage]) {
            document.getElementById(navLinks[currentPage]).classList.add("active");
        }
    }
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
