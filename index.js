
  document.addEventListener("DOMContentLoaded", function() {
    
    const tabs = document.querySelectorAll(".nav_list li");

    const contentAreas = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
      tab.addEventListener("click", function(e) {
        e.preventDefault();

        tabs.forEach(function(tab) {
          tab.classList.remove("active");
        });
        contentAreas.forEach(function(content) {
          content.style.display = "none";
        });

        tab.classList.add("active");

        const targetContentId = tab.getAttribute("id").replace("-tab", "-content");
        const targetContent = document.getElementById(targetContentId);

        targetContent.style.display = "block";
      });
    });
  });

