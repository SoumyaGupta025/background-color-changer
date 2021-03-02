var bgcolor = new Array("#ffbe0f", "#fa1e0e", "#5b6d5b", "#c2b092", "#350b40", "#6b011f", "#75cfb8", "#eb5e0b", "#23120b", "#000");
var len = bgcolor.length;
function  handleClick(){
  document.body.style.background = bgcolor[Math.floor(Math.random()*len)];
}

document.querySelector("button").addEventListener("click", handleClick);
