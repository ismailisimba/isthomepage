
    var imagesBig = ["https://www.istafrica.com/uploaded/photos/new_homepage_20/main1.png",
                      "https://www.istafrica.com/uploaded/photos/new_homepage_20/main2.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main3.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main4.png",
                    "https://www.istafrica.com/uploaded/photos/new_homepage_20/main5.png"]



    var slideIndex = 4;


const funcObj = {

  animateBackground: function() {


    //document.getElementById("top-big-back").style.backgroundImage = `url(${imageOne})`;


    document.getElementById("top-big-back").style.backgroundImage = `url(${imagesBig[slideIndex]})`;

    document.getElementById("top-big-back2").style.backgroundImage = `url(${imagesBig[0]})`;

  
      

   


  },


}





funcObj.animateBackground();





