// Dark Mode




  function DarkMode(){
      document.body.classList.toggle("dark")
  }



  function showTime(){
    var date = new Date();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    var timeZone = "Am";
    if(Hours === 0){
      Hours = 12;
    }
    if(Hours > 12){
      Hours = Hours - 12 ;
      timeZone = "pm";
    }

    Hours = (Hours < 10) ? "0" + Hours : Hours;
    Minutes = (Minutes < 10) ? "0" + Minutes : Minutes;
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;

    var time = Hours + ':'+ Minutes + ':' + Seconds + ':' + timeZone;
    
    document.getElementById("myclockdisplay").innerHTML = time;

    setTimeout(showTime , 1000);

   }
    showTime()



    // window.onload = Showtime;


    














  
  // function showtime(){
  //   var date = new Date();

  //   var hours = date.gethours();
  //   var minutes = date.getminutes();
  //   var secondes = date.getsecondes();
  //   var timezone = "Am";
  //   console.log (now),
  //   console.log (hours),
  //   console.log (minutes),
  //   console.log (secondes);

  //   if (hours === 0){
  //     hours = -12;
  //   }
  //   document.getElementById("clock").textContent = hours +':'+ minutes + ':' + secondes + ':'Am ;
  //    setTimeout(setTime,"500")
  //   }
  //    showtime();
   
                                                                            


      
      
      
      
      
      
      
      
      
      
      
      



         



         



        


            


  








// function DarkMode(){
    
//     document.body.classList.toggle("dark")
// }