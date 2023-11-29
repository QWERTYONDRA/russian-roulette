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

  function changeRedBg() {
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.568)"; 
}
function changeBlueBg() {
  document.body.style.backgroundColor = "rgba(0, 0, 255, 0.568)";
}

var bang = document.getElementById("bang");
var whoosh = document.getElementById("whoosh");
var betray = document.getElementById("betray");
var bang2 = document.getElementById("bang2");
var whoosh2 = document.getElementById("whoosh2");
var betray2 = document.getElementById("betray2");
var turn = 1;
var chamber = Math.ceil(Math.random()*6);
var index = 6;
var i = 2;



function switchTurn() {
  if(turn === 1){
    changeBlueBg();
    bang.disabled = true;
    whoosh.disabled = true;
    betray.disabled = true;
    bang.style.backgroundColor = "gray";
    whoosh.style.backgroundColor = "gray";
    betray.style.backgroundColor = "gray";
    bang2.style.backgroundColor = "red";
    whoosh2.style.backgroundColor = "rgb(3, 209, 3)";
    betray2.style.backgroundColor = "orange";
    bang2.disabled = false;
    whoosh2.disabled = false;
    betray2.disabled = false;
    turn = 2;
    return turn;
  }
  else if(turn === 2){
    changeRedBg();
    // Disable 2
    bang2.disabled = true;
    whoosh2.disabled = true;
    betray2.disabled = true;
    bang2.style.backgroundColor = "gray";
    whoosh2.style.backgroundColor = "gray";
    betray2.style.backgroundColor = "gray";
    // Enable 1
    bang.style.backgroundColor = "red";
    whoosh.style.backgroundColor = "rgb(3, 209, 3)";
    betray.style.backgroundColor = "orange";
    bang.disabled = false;
    whoosh.disabled = false;
    betray.disabled = false;
    turn = 1;
    return turn;
  }
}

   //Levý hráč
if(turn === 1){
  switchTurn();
    bang.addEventListener('click', function(){
        var imageElement = document.getElementById("panak");
        imageElement.src = "img/levyPNaSebe.png";
        if(index != chamber){
            playClick();
            addClick();

            switchTurn();
        }
        else if(index == chamber){
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
        switchTurn();
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
            switchTurn();
    });

// PLAYER 2




}
if(turn === 2){
  switchTurn();
  bang2.addEventListener('click', function(){
      var imageElement = document.getElementById("ppanak");
      imageElement.src = "img/pravyPNaSebe.png";
      if(index != chamber){
          playClick();
          addClick();
          switchTurn();
          
          
      }
      if(index == chamber){
          playPew();
          playAuOne();
          redirectUsrP1();
          var imageElement = document.getElementById("ppanak");
              imageElement.src = "img/levyPPrycDead.png";
          //Vyskoci konec hry a moznost opakovat (resetne stránku)
          
      } 
      index--;
       i++;
      
  });
  
  whoosh2.addEventListener('click', function(){
      chamber = Math.ceil(Math.random()*6);
      //nějaká animace spinování chamberu
      index = 6;
      i++;
      playWhoosh();
      var imageElement = document.getElementById("ppanak");

      imageElement.src = "img/pravyPPryc.png";
      switchTurn();

  });
  
  betray2.addEventListener('click', function(){
      var imageElement = document.getElementById("ppanak");
  
      imageElement.src = "img/pravyPPryc.png";
          if (index != chamber){
              playClick();
          }
          if(index == chamber){

              var imageElement = document.getElementById("ppanak");
              playPew()
              playAuTwo();
              imageElement.src = "img/PravyPPrycLevyDead.png";
              //Vyskoci konec hry a moznost opakovat (resetne stránku)
              
          } 
          index--;
          i++;
          switchTurn();
          
  });

}