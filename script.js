
    var imagesBig = ["https://kh8lig.am.files.1drv.com/y4mvMjldyIYQ72eI-xOxl3TDVtelh9eWmWT6sexgkRZkvegBMeYsHWMXOoTHXdhdDOwfJpjVujq7xjJNa49JL4DtVXMTsly3lb3MI1SLJBakdQcvjAoNF1JAY4jEOE_tEnxvsHqal-VuwSERen-G20BYFWl-y5kMBp0Obgxay9xTwaAFi4KFRzCgBNJJgl7FHEIGwvt_FdmiK3UTHpjnkpehg?width=3000&height=1957&cropmode=none",
                      "https://kh8lig.am.files.1drv.com/y4mvMjldyIYQ72eI-xOxl3TDVtelh9eWmWT6sexgkRZkvegBMeYsHWMXOoTHXdhdDOwfJpjVujq7xjJNa49JL4DtVXMTsly3lb3MI1SLJBakdQcvjAoNF1JAY4jEOE_tEnxvsHqal-VuwSERen-G20BYFWl-y5kMBp0Obgxay9xTwaAFi4KFRzCgBNJJgl7FHEIGwvt_FdmiK3UTHpjnkpehg?width=3000&height=1957&cropmode=none",
                    "https://kh8lig.am.files.1drv.com/y4mvMjldyIYQ72eI-xOxl3TDVtelh9eWmWT6sexgkRZkvegBMeYsHWMXOoTHXdhdDOwfJpjVujq7xjJNa49JL4DtVXMTsly3lb3MI1SLJBakdQcvjAoNF1JAY4jEOE_tEnxvsHqal-VuwSERen-G20BYFWl-y5kMBp0Obgxay9xTwaAFi4KFRzCgBNJJgl7FHEIGwvt_FdmiK3UTHpjnkpehg?width=3000&height=1957&cropmode=none",
                    "https://kh8lig.am.files.1drv.com/y4mvMjldyIYQ72eI-xOxl3TDVtelh9eWmWT6sexgkRZkvegBMeYsHWMXOoTHXdhdDOwfJpjVujq7xjJNa49JL4DtVXMTsly3lb3MI1SLJBakdQcvjAoNF1JAY4jEOE_tEnxvsHqal-VuwSERen-G20BYFWl-y5kMBp0Obgxay9xTwaAFi4KFRzCgBNJJgl7FHEIGwvt_FdmiK3UTHpjnkpehg?width=3000&height=1957&cropmode=none",
                    "https://kh8lig.am.files.1drv.com/y4mvMjldyIYQ72eI-xOxl3TDVtelh9eWmWT6sexgkRZkvegBMeYsHWMXOoTHXdhdDOwfJpjVujq7xjJNa49JL4DtVXMTsly3lb3MI1SLJBakdQcvjAoNF1JAY4jEOE_tEnxvsHqal-VuwSERen-G20BYFWl-y5kMBp0Obgxay9xTwaAFi4KFRzCgBNJJgl7FHEIGwvt_FdmiK3UTHpjnkpehg?width=3000&height=1957&cropmode=none"];

    var imagesCaption = { "0": ["International Day, circa 2019!","button-right-bottom"],
                          "1": ["A random student peeking curiously at the camera!","button-left-top"],
                          "2": ["Dr. Jane Goodall meets with fans during one of her visits","button-right-top"],
                          "3": ["Grade 10 Students Fair 2019","button-right-bottom"],
                          "4": ["Tree Planting 2019","button-right-bottom"]};
                          

                  /*never use left bottom here!!*/ 


    var previousBox = document.getElementById("button-right-top");
    var previousTitle = "Karibu IST";


    var lineOne = ["International Baccalaureate",
                    "Middle Years",
                    "Elementary Campus"];

    var lineTwo = ["Diploma (IBDP)",
                    "Program",
                    "Primary Years Program"];

    var lineThree = ["Grade 11 & 12",
                    "Grade 6 - 10",
                    "Age 3(EC) - Grade 5"];

    var titleLine = ["Karibu IST",
                    "Welcome to IST",
                    "Bienvenue chez IST",
                    "Bienvenida a IST"];

    var titleLineCounter = titleLine.length-1;
                    

    var slideIndex = 1;
    var buttonIndex = true;
    var slideIndexZero = 0;


    const funcObj = {

      animateBackground: function() {
  
        function animateContainer () {

          var containerMargin = document.getElementById("top-back-container").style.marginLeft;

          if(containerMargin == "100%" || containerMargin == "" || containerMargin == "0" || containerMargin == "0px"){

            document.getElementById("top-back-container").style.marginLeft = "-100%";
          }else {
            document.getElementById("top-back-container").style.marginLeft = "0";
          }

          setTimeout(animateContainer, 7000);

         }


        function animateMe () {
          var randIndex = Math.floor((Math.random() * imagesBig.length) + 0);
          

          if(slideIndex%2 == 0 || slideIndex == 0){

            document.getElementById("top-big-back").style.backgroundImage = `url(${imagesBig[randIndex]})`;
            slideIndex++;
          }else {
            document.getElementById("top-big-back2").style.backgroundImage = `url(${imagesBig[randIndex]})`;
            
            /*var test100 = document.getElementById("top-back-container").style.marginLeft;
            document.getElementById("find-out-title-text").innerHTML = randIndex;*/
            
            slideIndex++;
           }

          if (slideIndex == imagesBig.length){
            slideIndex = 1;
          }

          setTimeout(animateMe, 7000);



    }

    animateContainer();
    animateMe();


  },



  animateFindOutDetails: function () {

    function animateDetails () {

      var linesArray = document.getElementsByClassName("find-out-details-text");

      linesArray[0].innerHTML = lineOne[slideIndexZero];
      linesArray[1].innerHTML = lineTwo[slideIndexZero];
      linesArray[2].innerHTML = lineThree[slideIndexZero]; 
  
      
  
      if(slideIndexZero == 2) {
        slideIndexZero=0;
      }else{
        slideIndexZero++;
      }
      

      setTimeout(animateDetails,2300);

    }

    function animateKaribu () {

      var karibuTitle = document.getElementById("find-out-title");
      if (titleLineCounter > 0){
        karibuTitle.innerHTML = titleLine[titleLineCounter];
        titleLineCounter--;

      }else {

        karibuTitle.innerHTML = titleLine[titleLineCounter];
        titleLineCounter = titleLine.length-1;

      };

  

      
      

      setTimeout(animateKaribu,1200);

    }

    animateDetails();
    animateKaribu();

  


  },

  theButton: function () {

    previousBox.style.visibility = "hidden";

    var randIndex = Math.floor((Math.random() * imagesBig.length) + 0);
    var randIndexString = randIndex.toString();
    var captionPositionName = imagesCaption[randIndexString][1];
    var captionWords = imagesCaption [randIndexString][0];
    var captionBox = document.getElementById(captionPositionName);
  
    
    
    if(buttonIndex){

          document.getElementById("footer-container").style.marginLeft = "-100%";
          setTimeout(function () {},1300);
          document.getElementById("footer-right").style.backgroundImage = `url(${imagesBig[randIndex]})`;
          
          buttonIndex = false;
        } else{
          document.getElementById("footer-container").style.marginLeft = "0";
          
          setTimeout(function () {},1300);
          document.getElementById("footer-left").style.backgroundImage = `url(${imagesBig[randIndex]})`;
     
          buttonIndex = true;

     }
     
     
     captionBox.style.visibility = "visible";
     captionBox.innerHTML = captionWords;
     previousBox = captionBox;
     

            /*var test100 = document.getElementById("top-back-container").style.marginLeft;
      document.getElementById("find-out-title-text").innerHTML = randIndex;*/
    
    




  },

  reverseHover: function () {
    document.getElementById("find-out").style.top ="-350px";
    document.getElementById("shadow-mask").style.opacity = "0.65";

  
  },
  resetHover: function () {

     let top = document.getElementById("find-out").style.top ;

     if (top == "-350px") {
       document.getElementById("find-out").style.top = "-90px";
       document.getElementById("shadow-mask").style.opacity = "0";
     } else {
      document.getElementById("find-out").style.top = "-350px";
      document.getElementById("shadow-mask").style.opacity = "0.65";
      
     }

  
  }


}




let bottom = document.getElementById("footer-container");
let topBack = document.getElementById("top-back-container");

bottom.addEventListener("click",funcObj.theButton, false);

topBack.addEventListener("mouseover",funcObj.reverseHover, false);
topBack.addEventListener("click",funcObj.resetHover, false);

funcObj.animateBackground();
funcObj.animateFindOutDetails();





/*var test100 = document.getElementById("top-back-container").style.marginLeft;
document.getElementById("find-out-title-text").innerHTML = test100;*/





