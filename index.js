document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".dynamic-height");
    let maxHeight = 0;

    // Find the tallest column
    columns.forEach(column => {
      const height = column.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Apply the tallest height to all columns
    columns.forEach(column => {
      column.style.height = `${maxHeight}px`;
    });
  });
