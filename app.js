document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("dateInput");
  const progressBar = document.getElementById("progress");
  const yearProgressText = document.getElementById("yearProgressText");

  // Load current date by default
  const currentDate = new Date();
  dateInput.valueAsDate = currentDate;

  // Calculate progress value based on the current date
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const endOfYear = new Date(currentDate.getFullYear(), 11, 31);
  const progressValue =
    ((currentDate - startOfYear) / (endOfYear - startOfYear)) * 100;

  // Set initial progress bar width and text content
  progressBar.style.width = progressValue.toFixed(2) + "%";
  yearProgressText.textContent = `${currentDate.getFullYear()} IS ${progressValue.toFixed(
    2
  )}% OVER`;

  // Update progress bar and text content when the date input changes
  dateInput.addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const startOfYear = new Date(selectedDate.getFullYear(), 0, 1);
    const endOfYear = new Date(selectedDate.getFullYear(), 11, 31);
    const progressValue =
      ((selectedDate - startOfYear) / (endOfYear - startOfYear)) * 100;

    progressBar.style.width = progressValue.toFixed(2) + "%";
    yearProgressText.textContent = `${selectedDate.getFullYear()} IS ${progressValue.toFixed(
      2
    )}% OVER`;
  });
});
