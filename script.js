const progressBar = document.getElementById("progress-bar");
const progressValue = document.getElementById("progress-value");

if (progressBar && progressValue) {
  progressBar.addEventListener("input", () => {
    progressValue.textContent = `${progressBar.value}%`;
    localStorage.setItem("course-progress", progressBar.value);
  });

  // Load saved progress
  const savedProgress = localStorage.getItem("course-progress");
  if (savedProgress) {
    progressBar.value = savedProgress;
    progressValue.textContent = `${savedProgress}%`;
  }
}
