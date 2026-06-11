const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".section").forEach((section) => {
  const filterButtons = section.querySelectorAll(".filter-button");
  const entries = section.querySelectorAll(".publication");

  if (!filterButtons.length || !entries.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      entries.forEach((entry) => {
        const shouldShow = filter === "all" || entry.dataset.type === filter;
        entry.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
});
