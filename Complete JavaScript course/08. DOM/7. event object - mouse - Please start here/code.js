//elements
var button1 = document.getElementById("btn1");
var img = document.querySelector("img");

//mousedown

button1.addEventListener("mousedown", fmousedown);
function fmousedown(event) {
  console.log(event);
  console.log(event.which);
}

//musemove
addEventListener("mousemove", fmousemove);
function fmousemove(event) {
  img.style.left = event.pageX + "px";
  img.style.top = event.pageY + "px";
}

//mouseup
addEventListener("mouseup", fmouseup);
function fmouseup(event) {
  var img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://images.pexels.com/photos/1382393/pexels-photo-1382393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  img2.setAttribute('height', '40');
  img2.setAttribute('width', '40');
  img2.style.position = 'fixed';
  document.body.appendChild(img2);
  img2.style.left = event.pageX + 'px';
  img2.style.top = event.pageY + 'px';

}
