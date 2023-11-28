function delayAction() {
    setTimeout(() => {
        outputElement.removeChild(newText);
    }, 1000);
  }

function playPew() {
    var audio = new Audio('media/Pew.mp3');
    audio.play();
  }

  function playClick() {
    var audio = new Audio('media/click.mp3');
    audio.play();
  }

  function playAuOne() {
    var audio = new Audio('media/AUUUUHGHHGHGH.mp3');
    audio.play();
  }

  function playAuTwo() {
    var audio = new Audio('media/AH.mp3');
    audio.play();
  }

  function playWhoosh() {
    var audio = new Audio('media/whoosh.mp3');
    audio.play();
  }

  function addClick(){

    var outputElement = document.getElementById("output");
    var heading = document.createElement("h2");
    var newText = document.createTextNode("*CLICK*");
    heading.appendChild(newText);
    heading.style.textAlign = "center";
    heading.style.position = "absolute";
    outputElement.appendChild(heading);
    setTimeout(function() {
      outputElement.removeChild(heading);
    }, 1000);
  }

  
  function redirectUsrP1() {
    setTimeout(function() {
      window.location.href = 'gameover/P1/';
    }, 3000);
     
  }
  function redirectUsrP2() {
    setTimeout(function() {
      window.location.href = 'gameover/P2/';
    }, 3000);
  
  }
var bang = document.getElementById("bang");
var whoosh = document.getElementById("whoosh");
var betray = document.getElementById("betray");

var chamber = Math.ceil(Math.random()*6);
var index = 6;
var i = 2;
   //Levý hráč
   if(i % 2 == 0){
 
    bang.addEventListener('click', function(){
        var imageElement = document.getElementById("panak");
        imageElement.src = "img/levyPNaSebe.png";
        if(index != chamber){
            playClick();
            addClick();
            
        }
        if(index == chamber){
            playPew();
            playAuOne();
            redirectUsrP2();
            var imageElement = document.getElementById("panak");
                imageElement.src = "img/levyPNaSebeAMrtvola.png";
            //Vyskoci konec hry a moznost opakovat (resetne stránku)
            
        } 
        index--;
         i++;
        
    });
    
    whoosh.addEventListener('click', function(){
        chamber = Math.ceil(Math.random()*6);
        //nějaká animace spinování chamberu
        index = 6;
        i++;
        playWhoosh();
        var imageElement = document.getElementById("panak");

        imageElement.src = "img/levyPPryc.png";

    });
    
    betray.addEventListener('click', function(){
        var imageElement = document.getElementById("panak");
    
        imageElement.src = "img/levyPPryc.png";
            if (index != chamber){
                playClick();
            }
            if(index == chamber){

                var imageElement = document.getElementById("panak");
                playPew()
                playAuTwo();
                imageElement.src = "img/levyPPrycDead.png";
                //Vyskoci konec hry a moznost opakovat (resetne stránku)
                
            } 
            index--;
            i++;
            console.log(chamber)
    });

}

else {
    console.log(i);
    bang.disabled = true;
    bang.style.backgroundColor = "gray";
 };