var n = document.querySelectorAll(".drum").length;

for( var i = 0 ; i<n ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML ;

        switch(buttonInnerHTML){
            case "w":
                var tom1 = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3") ;
                tom1.play();
                break;

            case "a":
                var tom2 = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3") ;
                tom2.play();
                break;
            
            case "s":
                var tom3 = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3") ;
                tom3.play();
                break;

            case "d":
                var tom4 = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3") ;
                tom4.play();
                break;

            case "j":
                var snare = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                var crash = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3") ;
                crash.play();
                break;
            
            case "l":
                var kick = Audio("/media/darkphoenix/Education/Udemy Web Dev/Course Content/S18_AdvJS/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
                crash.play();
                break;
            
            default : 
                console.log(buttonInnerHTML);   
        }

    });
}