canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_of_x,last_position_of_y;
color="brown";
width_of_line=2;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"

}

canvas.addEventListener("mouseup" , my_mouseup) ;
function my_mouseup (e)
{
    mouseEvent = "mouseUP";

}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

console.log("Last Position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo (last_position_of_x, last_position_of_y);

console.log("Current Position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x, + "y = " + current_position_of_mouse_y);
ctx.lineTo (current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();

}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;

}


