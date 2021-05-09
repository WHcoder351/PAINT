var mE = "empty";
var lpx, lpy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");
canvas.addEventListener("mousedown", my_mouseDown);
color = "blue";


function my_mouseDown(e) {
  mE = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e) {
  mE = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e) {
  mE = "mouseLeave";
}
canvas.addEventListener("mousemove", my_Mm);

function my_Mm(e) {
  cpomx = e.clientX - canvas.offsetLeft;
  cpomy = e.clientY - canvas.offsetTop;
  if (mE == "mouseDown") {
    console.log("Current Position of x and y coordinates = ");
    console.log("X=" + cpomx + "Y=" + cpomy);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(cmopx, cmopy, 40, 0, 2 * Math.PI);
    ctx.stroke();
  }
  
}