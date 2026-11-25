document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const filterButtons = document.querySelectorAll(".filter-btn");
  const groups = document.querySelectorAll(".product-group");

  if (filterButtons.length && groups.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;
        groups.forEach(group => {
          group.style.display = filter === "all" || group.dataset.category === filter ? "" : "none";
        });
      });
    });
  }
});
