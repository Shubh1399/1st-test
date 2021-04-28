var a = document.getElementById('list');
var b = document.getElementById('main');
document.getElementById("icon").addEventListener("click",function (){
   
  if ( a.style.display == "block") {

      a.style.display = "none";
      b.style.display = "block";
     }
  else{

   a.style.display = "block";
   b.style.display = "none";
   
     }

 });