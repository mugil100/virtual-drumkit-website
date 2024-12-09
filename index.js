
var noOfBtns = document.querySelectorAll(".drum").length;

for(let i=0; i<noOfBtns; i++)
{

    // listen to button press

    document.querySelectorAll(".drum")[i].addEventListener("click",soun);
        
        
function soun() {
        var b1n= this.innerHTML;
        soundmaker(b1n);
        btnAnimation(b1n);
    }

    // listen to keypress 

    document.addEventListener("keypress" , function(event){

        console.log(event);
        
        soundmaker(event.key);
        btnAnimation(event.key);

    });


    function soundmaker(key){

            switch(key){
    
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play(); // property of the audio object is used to play the audio
                break;
    
            case "a":
                var kickbass = new Audio("./sounds/kick-bass.mp3");
                kickbass.play(); // property of the audio object is used to play the audio
                break;
    
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play(); // property of the audio object is used to play the audio
                break;    
    
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play(); // property of the audio object is used to play the audio
                break;        
    
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play(); // property of the audio object is used to play the audio
                break;            
    
            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play(); // property of the audio object is used to play the audio
                break;    
    
            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play(); // property of the audio object is used to play the audio
                break;        
            
            default: 
            console.log(this.innerHtml);
            break;
        }
    
    
        }

    


    }

    function btnAnimation(currentkey){

        var activeBtn = document.querySelector("." + currentkey);

        activeBtn.classList.add("pressed");
        activeBtn.style.color= "yellow" ;

        setTimeout( function() {
            activeBtn.classList.remove("pressed");
            activeBtn.style.color= "" ;
        },100);

    }
