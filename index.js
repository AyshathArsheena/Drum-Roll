//if buttom is clicked
const numberOfDrums= document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonHTML=this.innerHTML;
    console.log(buttonHTML);
    handleClick(buttonHTML);
    addAnimation(buttonHTML);
    });
    
}
//if keyboard pressed
document.addEventListener("keydown",function(event){
    handleClick(event.key);
    addAnimation(event.key)
});

function handleClick(key){
    // 
//    console.log(this.innerHTML)
//    this.style.color="white";
  
   switch(key){
    case "w":
        var audiow = new Audio('sounds/crash.mp3');
        audiow.play();
    break;
    case "a":
        var audioa = new Audio('sounds/kick-bass.mp3');
        audioa.play();
    break;
    case "s":
        var audios = new Audio('sounds/tom-4.mp3');
        audios.play();
    break;
    case "d":
        var audiod = new Audio('sounds/tom-1.mp3');
        audiod.play();
    break;
    case "j":
        var audioj = new Audio('sounds/tom-2.mp3');
        audioj.play();
    break;
    case "k":
        var audiok = new Audio('sounds/tom-3.mp3');
        audiok.play();
    break;
    case "l":
        var audiol = new Audio('sounds/snare.mp3');
        audiol.play();
    break;
    default:
        console.log("not valid");
    break;
   }
}

function addAnimation(currentKey){
   var pressedKey = document.querySelector("."+currentKey); 
    pressedKey.classList.add("pressed");
    //set timout for animation
    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    },100);
}






