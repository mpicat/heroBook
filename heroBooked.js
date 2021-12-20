 // Commencer le jeu
            
            function playBoy() {
                let str = document.getElementById("story").innerHTML;
                let res = str.replace(/PLAYERNAME/g, document.getElementById("nameP").value);
  
                document.getElementById("intro").style.display = "none";
                document.getElementById("game").style.display = "block";
                document.getElementById("name").innerHTML = document.getElementById("nameP").value;
                document.getElementById("story").innerHTML = res;
                introSong.play();
                introSong.volume = 0.2;
                document.getElementById("girl1").style.display = "none";
                document.getElementById("girl2").style.display = "none";
                document.getElementById("girl3").style.display = "none";
                document.getElementById("girl4").style.display = "none";
                document.getElementById("girl5").style.display = "none";
              }
  
              function playGirl() {
                let str = document.getElementById("story").innerHTML;
                let res = str.replace(/PLAYERNAME/g, document.getElementById("nameP").value);
  
                document.getElementById("intro").style.display = "none";
                document.getElementById("game").style.display = "block";
                document.getElementById("name").innerHTML = document.getElementById("nameP").value;
                document.getElementById("story").innerHTML = res;
                introSong.play();
                document.getElementById("heroBoy").style.display = "none";
                document.getElementById("heroGirl").style.display = "block";
                document.getElementById("boy1").style.display = "none";
                document.getElementById("boy2").style.display = "none";
                document.getElementById("girl1").style.display = "inline";
                document.getElementById("girl2").style.display = "inline";
                document.getElementById("girl3").style.display = "inline";
                document.getElementById("girl4").style.display = "inline";
                document.getElementById("girl5").style.display = "inline";
              }
  
              // Choix
              function choice0_1() {
                  document.getElementById("part0").style.display = "none";
                  document.getElementById("part1").style.display = "block";
              }
  
              function choice1_2() {
                  document.getElementById("part1").style.display = "none";
                  document.getElementById("part2").style.display = "block";
              }
  
              function choice1_12() {
                  document.getElementById("part1").style.display = "none";
                  document.getElementById("part12").style.display = "block";
                  step.play();
              }
  
              function choice2_3() {
                  document.getElementById("part2").style.display = "none";
                  door.play();
  
                  if (document.getElementById("gemicon").style.display === "block") {
                      
                      document.getElementById("part3bis").style.display = "block";
                  } else {
  
                      document.getElementById("part3").style.display = "block";
                  }
              }
  
              function choice2_6() {
                  document.getElementById("part2").style.display = "none";
                  document.getElementById("part6").style.display = "block";
                  door.play();
              }
  
              function choice2_1() {
                  document.getElementById("part2").style.display = "none";
                  document.getElementById("part1").style.display = "block";
              }
  
              function choice3_4() {
                  document.getElementById("part3").style.display = "none";
                  document.getElementById("part4").style.display = "block";
              }
  
              function choice3_1() {
                  document.getElementById("part3").style.display = "none";
                  document.getElementById("part3bis").style.display = "none";
                  document.getElementById("part1").style.display = "block";
                  door.play();
              }
  
              function choice4_5() {
                  document.getElementById("part4").style.display = "none";
                  document.getElementById("part5").style.display = "block";
              }
  
              function choice4_1() {
                  document.getElementById("part4").style.display = "none";
                  document.getElementById("part1").style.display = "block";
                  door.play();
              }
  
              function choice5_1() {
                  document.getElementById("part5").style.display = "none";
                  document.getElementById("part1").style.display = "block";
                  document.getElementById("gemicon").style.display = "block";
                  door.play();
              }
  
              function choice6_7() {
                  document.getElementById("part6").style.display = "none";
                  document.getElementById("part7").style.display = "block";
                  shoot.play();
              }
  
              function choice6_10() {
                  document.getElementById("part6").style.display = "none";
                  document.getElementById("part10").style.display = "block";
              }
  
              function choice7_8() {
                  document.getElementById("part7").style.display = "none";
                  document.getElementById("part8").style.display = "block";
                  introSong.pause();
                  finalSong.play();
              }
  
              function choice7_9() {
                  document.getElementById("part7").style.display = "none";
                  document.getElementById("part9").style.display = "block";
                  introSong.pause();
                  finalSong.play();
              }
  
              function choice10_11() {
                  document.getElementById("part10").style.display = "none";
                  document.getElementById("part11").style.display = "block";
                  introSong.pause();
                  finalSong.play();
              }
  
              function choice12_13() {
                  document.getElementById("part12").style.display = "none";
                  document.getElementById("part13").style.display = "block";
                  door.play();
              }
  
              function choice12_1() {
                  document.getElementById("part12").style.display = "none";
                  document.getElementById("part1").style.display = "block";
                  step.play();
              }
  
              function choice13_14() {
                  document.getElementById("part13").style.display = "none";
                  step.pause();
                  introSong.pause();
                  finalSong.play();
  
                  if (document.getElementById("gemicon").style.display === "block") {
                      
                      document.getElementById("part16").style.display = "block";
                  } else {
  
                      document.getElementById("part14").style.display = "block";
                  }
              }
  
              function choice13_15() {
                  document.getElementById("part13").style.display = "none";
                  step.pause();
                  introSong.pause();
                  finalSong.play();
  
                  if (document.getElementById("gemicon").style.display === "block") {
                      
                      document.getElementById("part17").style.display = "block";
                  } else {
  
                      document.getElementById("part15").style.display = "block";
                  }
              }