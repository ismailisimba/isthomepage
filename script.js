
    var imagesBig = ["https://www.istafrica.com/uploaded/photos/new_homepage_20/main1.png",
                      "https://www.istafrica.com/uploaded/photos/new_homepage_20/main2.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main3.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main4.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main5.png"];


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
                    

    var slideIndex = 1;
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

          setTimeout(animateContainer, 35000);

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

          setTimeout(animateMe, 35000);



    }

    animateContainer();
    animateMe();


  },



  animateFindOutDetails: function () {

    function animateDetails () {

      var linesArray = document.getElementsByClassName("find-out-details-text");
      var karibuTitle = document.getElementById("find-out-title");
      var randIndex = Math.floor((Math.random() * titleLine.length) + 0);

      linesArray[0].innerHTML = lineOne[slideIndexZero];
      linesArray[1].innerHTML = lineTwo[slideIndexZero];
      linesArray[2].innerHTML = lineThree[slideIndexZero];
      karibuTitle.innerHTML = titleLine[randIndex]; 
  
      
  
      if(slideIndexZero == 2) {
        slideIndexZero=0;
      }else{
        slideIndexZero++;
      }
      

      setTimeout(animateDetails,4000);

    }

    animateDetails();

  


  },

  theButton: function () {

    var randIndex = Math.floor((Math.random() * imagesBig.length) + 0);
    
    
    if(slideIndex == 1){

      document.getElementById("footer-left").style.backgroundImage = `url(${imagesBig[randIndex]})`;
      slideIndex++;
    }else {
      document.getElementById("footer-left").style.backgroundImage = `url(${imagesBig[randIndex]})`;
      
      /*var test100 = document.getElementById("top-back-container").style.marginLeft;
      document.getElementById("find-out-title-text").innerHTML = randIndex;*/
      
      slideIndex--;
     }



  }


}




let bottom = document.getElementById("footer-container");

bottom.addEventListener("click",funcObj.theButton, false);
funcObj.animateBackground();
funcObj.animateFindOutDetails();





/*var test100 = document.getElementById("top-back-container").style.marginLeft;
document.getElementById("find-out-title-text").innerHTML = test100;*/





