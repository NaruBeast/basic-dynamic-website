//changing src using obj.function()
var myHeading = document.querySelector('h1');
myHeading.onclick = function(){
  myHeading.textContent = 'Hello world!';
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
  var s = myImage.getAttribute('src');
  if(s==="images/firefox-icon.png"){
    myImage.setAttribute('src', 'images/firefox2.png');
  }
  else{
    myImage.setAttribute('src', 'images/firefox-icon.png';
  }
}

//using variable 's' to change src.
var myHeading = document.querySelector('h1');
myHeading.onclick = function(){
  myHeading.textContent = 'Hello world!';
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
  var s = myImage.getAttribute('src');
  if(s=="images/firefox-icon.png"){
    s = "images/firefox2.png";
  }
  else{
    s = "images/firefox-icon.png";
  }
}
