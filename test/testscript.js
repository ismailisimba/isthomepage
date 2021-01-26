

var imagesBigobj = {images:[
"https://www.istafrica.com/uploaded/home_photos_2021/long/1.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/2.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/3.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/4.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/5.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/6.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/7.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/8.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/9.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/10.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/11.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/12.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/13.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/14.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/15.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/16.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/17.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/18.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/long/19.jpg",],

imagesSmall:[
  
"https://www.istafrica.com/uploaded/home_photos_2021/short/1.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/2.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/3.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/4.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/5.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/6.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/7.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/8.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/9.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/10.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/11.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/12.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/13.jpg",
"https://www.istafrica.com/uploaded/home_photos_2021/short/14.jpg",
],

                    captions:["We have two fully equipped libraries, one on each campus.",
                                "Tennis activities after classes (ASAs) at the elementary campus. circa 2020 - 2021",
                                "This is the way.",
                                "Home chemistry experiments! Part of after school activities at the elementary campus. circa 2020 -2021",
                                "International Day celebrations at the secondary campus. circa 2019 -2020",
                                "Guess who won the ISSEA Girls Swimming Championship 2020!",
                                "In-person classes at the elementary campus. circa 2020 - 2021",
                                "Elementary students from the Roots and Shoots club meet the founder, Dr Jane Goodall. circa 2019 - 2020",
                                "Into The Woods - secondary campus play. circa 2019 - 2020",
                                "We have two modern pools, one each campus.",
                                "Outdoor learning spaces inspire some out-of-the-box thinking!",
                                "Secondary campus theatre room.",
                                "Learning about fire safety at the elementary campus. circa 2020 - 2021",
                                "Preparing seedling containers for a reforestation project at secondary's Design Technology lab. circa 2019-2020"]}


let counter = 0;
let counter2 = 0;

var width = window.screen.width;
let myLeftGlobal = calculateLeftVal ();



setMyWidths(width);


function checkWidth (width) {

  if (width<=1024){

    imagesBigobj.images = imagesBigobj.imagesSmall;
  }
}






function animateBackground () {

    function animateStart () {

   

       let divArray = document.querySelectorAll(".top-big-back");
   


         divArray[0].remove();

      
        


        

          divArray[1].style.left = `-${width}px`;
          divArray[2].style.left ="0px";

        

        



           /* Add code starts here */
           let sp1 = document.createElement("div");
           sp1.className = "top-big-back";
           sp1.style.backgroundImage = `url(${imagesBigobj.images[counter]})`;


           

            sp1.style.width = `${width}px`;
            sp1.style.left =`${width}px`;

          

            
         
         
           

           let sp2 = document.getElementById("top-child4");
           let parentDiv = sp2.parentNode;
           parentDiv.insertBefore(sp1, sp2);
           /* Add code ends here */


      if (counter == (imagesBigobj.images.length-1)){

        counter=0;
      }else{
        counter++;
      }

      
         

     setTimeout(animateStart,5694.2);
    }

     animateStart();


    }



function theButton (buttonid) {
    let theButton = document.getElementById("footer-container");
   let leftValue = window.getComputedStyle(theButton).getPropertyValue("left");
   
   let leftContainer = document.getElementById("footer-left");
   let rightContainer = document.getElementById("footer-right");



   if(leftValue == "0px"){



       theButton.style.left = "-50%";
       //leftContainer.style.left = "0px";
       //rightContainer.style.left = "100%";

       rightContainer.style.backgroundImage = `url(${imagesBigobj.images[counter2]})`
  


   }else {

    

    theButton.style.left = "0px";
    //leftContainer.style.left = "-100%";
    //rightContainer.style.left = "0px";

   // rightContainer.innerHTML = leftValue;

   leftContainer.style.backgroundImage = `url(${imagesBigobj.images[counter2]})`
   
    
    

   }
   



   if (counter2 == (imagesBigobj.images.length-1)){

    counter2=0;
  }

  counter2++;

    

    
    
      }

    checkWidth(width);
    animateBackground();
    

    document.getElementById("footer-container").addEventListener("click", function () {theButton(this.id)});
    


function setMyWidths(width) {

  document.getElementById("boxtwoone").style.width = `${width*4}px`;
  document.getElementById("boxonetwo").style.width = `${width*4}px`;

  let myFooter = document.getElementById("mycustomfooter");

  myFooter.style.width = `${width*2}px`;
  myFooter.querySelectorAll("#footer-container")[0].style.width = `${width*2}px`;

  if(myLeftGlobal<=69){
    document.getElementById("boxonetwo").style.left = `-20px`;
    myFooter.style.left = `-20px`;
  }else{

    document.getElementById("boxonetwo").style.left = `-${myLeftGlobal}px`;
    myFooter.style.left = `-${myLeftGlobal}px`;
  }


  

  var myContainers = document.querySelectorAll(".top-big-back");

  myContainers[0].style.width = `${width}px`;
  myContainers[1].style.width = `${width}px`;
  myContainers[2].style.width = `${width}px`;
  myContainers[3].style.width = `${width}px`;


  myContainers[0].style.left = `-${width}px`;
  myContainers[1].style.left = `0px`;
  myContainers[2].style.left = `${width}px`;
  myContainers[3].style.left = `${width*2}px`;

}

function calculateLeftVal (){

  //let myBiggestCont = document.getElementById("boxonetwo").parentNode;
  let myBiggestCont = document.getElementById("fsPageBody");
  let compStyles = window.getComputedStyle(myBiggestCont);
  let thisDivsWidth = compStyles.getPropertyValue('max-width');

  let tempDiv = document.createElement("div");
  tempDiv.style.position = "absolute";
  tempDiv.style.width = "600px";
  tempDiv.style.height = "500px";
  tempDiv.style.backgroundColor = "#76bc43";
  tempDiv.style.color = "#1e4488";
  tempDiv.style.fontSize = "24px";

  thisDivsWidth = Array.from(thisDivsWidth);
  thisDivsWidth = thisDivsWidth.splice(0,thisDivsWidth.length-2);
  thisDivsWidth = myStringFunc(thisDivsWidth);
  thisDivsWidth = parseInt(thisDivsWidth,10);

  let leftVal = (width - thisDivsWidth)/2;

  if(leftVal<69){
    leftVal=69;
  }

  tempDiv.innerHTML = thisDivsWidth;

 // document.body.appendChild(tempDiv);



  return leftVal;
}



function myStringFunc(thisDivsWidth){

  let emptyString = "";
  
  thisDivsWidth.forEach(element=>{

    emptyString = emptyString+element;
  })

  return emptyString;
}