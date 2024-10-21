// Simple JavaScript to change the background color
document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.textContent = "Change Background Color";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
      document.body.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
});
