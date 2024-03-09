const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let strokeColor = "black";
let strokeSize = 5;

// Set canvas size to match screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// bind event handlers
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
document.getElementById("colors").addEventListener("change", (e)=>changeStrokeColor(e.target.value));
document.getElementById("strokeSize").addEventListener("change", (e)=>changeStrokeSize(e.target.value));
document.getElementById("eraser").addEventListener("click", (e)=>{
  strokeColor = "white";
})

// start drawing
function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

// function to change stroke's color
function changeStrokeColor(color) {
  strokeColor = color;
}

// change stroke size
function changeStrokeSize(size) {
  strokeSize = size;
}

// function to draw on canvas
function draw(event) {
  if (!isDrawing) return;

  // Adjust mouse coordinates to match canvas size
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeSize;

  context.lineTo(x, y);
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
  context.beginPath();
}
