


    var imagesBig = ["./Wide/791A7992.webp",  
    "./Wide/7P7A1203.webp",  
    "./Wide/7P7A1209.jpg.webp",  
    "./Wide/7P7A1503.webp",  
    "./Wide/7P7A2441.webp",  
    "./Wide/7P7A5439.webp",  
    "./Wide/7P7A5897.webp",  
    "./Wide/7P7A6478.jpg.webp",  
    "./Wide/IMG_1333.webp",  
    "./Wide/IMG_2606.webp",  
    "./Wide/IMG_9487.webp",  
    "./Wide/tall101.webp",  
    "./Wide/tall4.webp" ];


  var imagesSmall = ["./Tall/7P7A0008.webp",  
  "./Tall/7P7A5389.webp",  
  "./Tall/7P7A6173.jpg.webp",  
  "./Tall/7P7A9766.webp",  
  "./Tall/IMG_0291.webp",  
  "./Tall/IMG_1563.webp",  
  "./Tall/tall1.webp",  
  "./Tall/tall3.webp",  
  "./Tall/tall5.webp",
  "./Tall/7P7A1223.webp",  
  "./Tall/7P7A5491.webp",  
  "./Tall/7P7A6658.webp",      
  "./Tall/IMG_0055.webp",  
  "./Tall/IMG_1337.webp",  
  "./Tall/IMG_9688.webp",  
  "./Tall/tall2.webp",  
  "./Tall/tall4.webp",  
  "./Tall/tall90.webp" ];




    var imagesCaption = { "0": ["Pictures from IST","button-left-top"],
                          "1": ["Pictures from IST","button-left-top"],
                          "2": ["Pictures from IST","button-right-top"],
                          "3": ["Pictures from IST","button-left-top"],
                          "4": ["Pictures from IST","button-right-top"],
                          "5": ["Pictures from IST","button-left-top"],
                          "6": ["Pictures from IST","button-right-top"],
                          "7": ["Pictures from IST","button-left-top"],
                          "8": ["Pictures from IST","button-right-top"],
                          "9": ["Pictures from IST","button-right-top"]};


  var mainCaptions = { "0": ["International Baccalaureate Diploma (IBDP) <br>Grade 11 & 12","button-left-top"],
  "1": ["Middle Years Program <br> Grade 6 - 10","button-left-top"],
  "2": ["Elementary Campus <br> Primary Years Program <br> Age 3(EC) - Grade 5","button-right-top"],
  "3": ["World class education!","button-right-top"]};
                          

                  /*never use left bottom here!!*/ 


    var previousBox = document.getElementById("button-right-top");
    var previousTitle = "Karibu IST";

/*
    var lineOne = ["",
                    "",
                    ""];

    var lineTwo = ["",
                    "",
                    ""];

    var lineThree = ["",
                    "",
                    ""];

    var titleLine = ["Karibu IST",
                    "Welcome to IST",
                    "Bienvenue chez IST",
                    "Bienvenida a IST"];

    var titleLineCounter = titleLine.length-1;*/


    var width = window.screen.width;

    var mainTextTexty = document.getElementById("main-text-mask");
    mainTextTexty.style.width = (width-70)+"px";
                    

    var slideIndex = 1;
    var buttonIndex = true;
    var slideIndexZero = 0;
    var divArray = document.getElementsByClassName("top-big-back");

    
    
    


    const funcObj = {

      animateBackground: function() {

       function animateStart () {

        let randIndex = Math.floor((Math.random() * imagesBig.length) + 0);

        divArray = document.getElementsByClassName("top-big-back");
      


       


             /* Remove code starts here*/
            // let d = document.getElementById("top-back-container");
             divArray[0].remove();
            // throwawayNode = null;
            /* Remove code ends here*/
   
            divArray[0].style.left = "-"+ (window.screen.availWidth)+"px";;
            divArray[1].style.left ="0";
   
              /* Add code starts here */
              let sp1 = document.createElement("div");
              sp1.className = "top-big-back";
              sp1.style.backgroundImage = `url(${imagesBig[randIndex]})`;
            
            
              sp1.style.width = window.screen.availWidth+"px";
              sp1.style.left = window.screen.availWidth+"px";

              let sp2 = document.getElementById("top-child4");
              let parentDiv = sp2.parentNode;
              parentDiv.insertBefore(sp1, sp2);
              /* Add code ends here */
   


            

        setTimeout(animateStart,4500);
       }

        animateStart();
  

       },

       setScene: function(){
        let topBackWidth = width*4;
        let height = "600px";
        width = width+"px";
        topBackWidth = topBackWidth+"px";

        
        
        let topBackContainer = document.getElementById("top-back-container");
        divArray = document.getElementsByClassName("top-big-back");

       // document.getElementById("welcome-to-div").innerHTML = "Yes";
        topBackContainer.style.width = topBackWidth;
       topBackContainer.style.backgroundColor = "red";
        topBackContainer.style.height = height;
        
        divArray[0].style.width = width;
        divArray[0].style.position = "absolute";
        divArray[0].style.top = "0";
        divArray[0].style.left = "-"+ (window.screen.availWidth)+"px";
        divArray[0].style.backgroundImage = `url(${imagesBig[1]})`;
       // divArray[0].innerHTML = "I am div One!";

        divArray[1].style.width = width;
        divArray[1].style.position = "absolute";
        divArray[1].style.top = "0";
        //divArray[1].style.left = (window.screen.availWidth)+"px";
        divArray[1].style.left = "0px";
        divArray[1].style.backgroundImage = `url(${imagesBig[2]})`;
       // divArray[1].innerHTML = "I am div Two!";

        divArray[2].style.width = width;
        divArray[2].style.position = "absolute";
        divArray[2].style.top = "0";
        divArray[2].style.left = (window.screen.availWidth)+"px";
        divArray[2].style.backgroundImage = `url(${imagesBig[2]})`;
        //divArray[2].innerHTML = "I am div Three!";

        divArray[3].style.width = width;
        divArray[3].style.position = "absolute";
        divArray[3].style.top = "0";
        divArray[3].style.left = (window.screen.availWidth*2)+"px";
        divArray[3].style.backgroundColor = "red";
       // divArray[3].innerHTML = "I am div Four!";

       },



       animateMainCaptions: function () {
         let currentIndex = 0;
         var mainCaptionBox = document.getElementById("main-text-captions");
         var colorBox = document.getElementById("main-text-hiding");

        function animatemyCaptions () {

          if (currentIndex <= 3){

           
            // var randIndex = Math.floor((Math.random() * mainCaptions.length) + 0);
            let compStyles = window.getComputedStyle(colorBox);
            let top = compStyles.getPropertyValue('top');

            if (top == "100px") {
              colorBox.style.top = "-100px";

            }else if (top == "-100px") {
              colorBox.style.top = "100px";

            }else{
             colorBox.style.top = "100px";
            }

        
            var randIndexString = currentIndex.toString();

            setTimeout(function() {
              mainCaptionBox.innerHTML = mainCaptions[randIndexString][0];
            },2000);

           
             //mainCaptionBox.innerHTML = top;

            currentIndex++;

          }else{

            let compStyles = window.getComputedStyle(colorBox);
            let top = compStyles.getPropertyValue('top');

            if (top == "100px") {
              colorBox.style.top = "-100px";

            }else if (top == "-100px") {
              colorBox.style.top = "100px";

            }else{
             colorBox.style.top = "100px";
            }

            currentIndex = 0;
            var randIndexString = currentIndex.toString();

            setTimeout(function() {
              mainCaptionBox.innerHTML = mainCaptions[randIndexString][0];
            },2000);

            currentIndex++;

           

            
          }

        
           setTimeout(animatemyCaptions,4500);

        }

        animatemyCaptions ();

    

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

  smallifyImages: function () {
    var specialcheck = null;
    specialcheck = document.querySelectorAll("html")[0].parentNode;
    var specialwidth = null;
    specialwidth = window.getComputedStyle(specialcheck).getPropertyValue(width);

    if( width <= 1024){
      imagesBig = imagesSmall;
    } else if(specialwidth){
        console.log(specialwidth);
    };
  }


}

funcObj.smallifyImages();
funcObj.setScene();


funcObj.animateMainCaptions();
funcObj.animateBackground();




let bottom = document.getElementById("footer-container");
let topBack = document.getElementById("top-back-container");
let findOutBox = document.getElementById("find-out-title");
let welcomeToDiv = document.getElementById("welcome-to-div");

bottom.addEventListener("click",funcObj.theButton, false);








/*var test100 = document.getElementById("top-back-container").style.marginLeft;
document.getElementById("find-out-title-text").innerHTML = test100;*/



//document.getElementById("welcome-to-div").innerHTML = "Hello???";

