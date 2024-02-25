const board = document.getElementById("board");

board.addEventListener("mousedown", (e) => {
  let x = e.clientX,
    y = e.clientY;
  createDot(x, y);
  addEventListener("drag", (e) => {
    let x = e.clientX,
      y = e.clientY;
    createDot(x, y);
  });
});

const createDot = (xCoord, yCoord) => {
  console.log(xCoord, yCoord);
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.style.left = xCoord - 5 + "px";
  dot.style.top = (yCoord - board.getBoundingClientRect().top - 5) + "px";
  board.appendChild(dot);
};
