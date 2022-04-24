var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");

ms.onclick = function(){
    header.style.backgroundImage = "url(images/model-s.jpg)";
    model.innerHTML = "Model s";
}


m3.onclick = function(){
    header.style.backgroundImage = "url(images/model-3.jpg)";
    model.innerHTML = "Model 3";
}


mx.onclick = function(){
    header.style.backgroundImage = "url(images/model-x.jpg)";
    model.innerHTML = "Model x";
}


my.onclick = function(){
    header.style.backgroundImage = "url(images/model-y.jpg)";
    model.innerHTML = "Model y";
}