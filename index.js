document.body.addEventListener("dblclick", (e) => {
  createCircle(e);
});

//single click to create a circle
function createCircle(e) {
  let circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
  circle.textContent = ".";
  document.body.appendChild(circle);
  // console.log(e.pointerId);

  removeCircle(circle, e.pointerId);
}

function removeCircle(circle, pointerID) {
  circle.addEventListener("click", (e) => {
    document.body.removeChild(circle);
  });
}
