// alert("wellcome:((((");
var pics = ["images/pexels-kelvin-valerio-617278.jpg",
"images/pexels-pixabay-104827.jpg",
"images/pexels-pixabay-45201.jpg"]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var c=1;
btn.addEventListener("click",function(){
  img.src=pics[c];
  c=c+1;
  if(c==3){
      c=0;
  }
})