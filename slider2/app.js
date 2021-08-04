var btn1 = document.querySelector(".button1");
var btn2 = document.querySelector(".button2");
var img = document.querySelector("img");
var array = ["./public/iceCream.jpg" , "./public/chocolate.jpg", "./public/vanilla.jpg", "./public/greenCake.jpg"];

var counter = 0;

function leftButton(){
  if(counter < array.length){
      img.setAttribute("src",array[counter]);
      counter++;
  }else{
    counter = 0;
    img.setAttribute("src",array[counter]);
    counter++;
  }
}

function rightButton(){

}

btn1.addEventListener('click', function(){
  leftButton();
});

