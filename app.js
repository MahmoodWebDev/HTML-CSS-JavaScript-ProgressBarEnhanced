document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("dateInput");
  const progressBar = document.getElementById("progress");
  const yearProgressText = document.getElementById("yearProgressText");

  dateInput.addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const startOfYear = new Date(selectedDate.getFullYear(), 0, 1);
    const endOfYear = new Date(selectedDate.getFullYear(), 11, 31);
    const progressValue =
      ((selectedDate - startOfYear) / (endOfYear - startOfYear)) * 100;

    progressBar.style.width = progressValue.toFixed(2) + "%";
    yearProgressText.textContent = `2024 IS ${progressValue.toFixed(2)}% OVER`;
  });
});
