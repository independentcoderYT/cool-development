document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      // Reset all items
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.style.flex = "0.5";
          otherItem.classList.remove("active");
        }
      });

      // Expand hovered item
      item.style.flex = "3";
      item.classList.add("active");
    });

    // When mouse leaves gallery, reset all
    const gallery = document.querySelector(".accordion-gallery");
    gallery.addEventListener("mouseleave", () => {
      items.forEach((item) => {
        item.style.flex = "0.5";
        item.classList.remove("active");
      });
    });
  });
});
