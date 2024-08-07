var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

    
    var today = new Date()
    var curHr = today.getHours()

    if (curHr >= 0 && curHr < 6) {
        document.getElementById("Greetings").innerHTML = 'What are you doing that early?';
    } else if (curHr >= 6 && curHr <= 12) {
        document.getElementById("Greetings").innerHTML = 'Good Morning';
    } else if (curHr >= 12 && curHr < 17) {
        document.getElementById("Greetings").innerHTML = 'Good Afternoon';
    } else {
        document.getElementById("Greetings").innerHTML = 'Good Evening';
    }
 