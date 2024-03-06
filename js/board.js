const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let strokeColor = "black";

// Set canvas size to match screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

function changeStrokeColor(color) {
  strokeColor = color;
}

function draw(event) {
  if (!isDrawing) return;

  // Adjust mouse coordinates to match canvas size
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  context.lineWidth = 5;
  context.strokeStyle = strokeColor;

  context.lineTo(x, y);
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
  context.beginPath();
}
