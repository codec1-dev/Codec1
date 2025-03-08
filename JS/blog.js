// 🌟 Select all collapsible sections
const toggles = document.querySelectorAll(".toggle");

// 🌟 Loop through each toggle
toggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    let nestedList = this.nextElementSibling;
    if (nestedList) {
      nestedList.style.display =
        nestedList.style.display === "block" ? "none" : "block";
      this.classList.toggle("active"); // Rotate the icon
    }
  });
});

// 🌟 Show/Hide All Sections
const toggleAllBtn = document.getElementById("toggleAll");
let expanded = false;

toggleAllBtn.addEventListener("click", function () {
  toggles.forEach((toggle) => {
    let nestedList = toggle.nextElementSibling;
    if (nestedList) {
      nestedList.style.display = expanded ? "none" : "block";
      toggle.classList.toggle("active", !expanded);
    }
  });

  expanded = !expanded;
  toggleAllBtn.textContent = expanded ? "Show Less" : "Show More";
});


document.addEventListener("DOMContentLoaded", function () {
  const shareToggle = document.getElementById("share-toggle");
  const shareDropdown = document.getElementById("share-dropdown");

  // Toggle Dropdown on Button Click
  shareToggle.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents closing immediately
      shareDropdown.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
      if (!shareToggle.contains(event.target) && !shareDropdown.contains(event.target)) {
          shareDropdown.classList.remove("show");
      }
  });

  // Set up share links dynamically
  const pageUrl = encodeURIComponent(window.location.href);
  document.querySelector(".share-option.twitter").href = `https://twitter.com/intent/tweet?url=${pageUrl}`;
  document.querySelector(".share-option.reddit").href = `https://www.reddit.com/submit?url=${pageUrl}`;
  document.querySelector(".share-option.linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;
  document.querySelector(".share-option.hackernews").href = `https://news.ycombinator.com/submitlink?u=${pageUrl}`;
  document.querySelector(".share-option.facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  document.querySelector(".share-option.whatsapp").href = `https://api.whatsapp.com/send?text=${pageUrl}`;
});

// Copy permalink function
function copyPermalink() {
  const tempInput = document.createElement("input");
  tempInput.value = window.location.href;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Permalink copied!");
}
