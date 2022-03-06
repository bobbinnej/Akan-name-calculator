/*Call the onsubmit() function from html file */


/*Gather user input from html to js */
function myInput(){
    
 var days=document.getElementById("days").value;
 var months=document.getElementById("months").value;
 var years=document.getElementById("years").value;

 var flexRadioDefault =document.getElementsByName("flexRadioDefault");

 var i;
 for(i=0; i<flexRadioDefault.length; i++){
     if(flexRadioDefault[i].checked){
         alert(flexRadioDefault[i].value);
     }
   
     

 }

 if(days <=0){

    console.log("invalid date");
    alert("invalid date");
 }
 else if(days>31){
     console.log("Invalid");
     alert("invalid date");
 }
 else{
     alert("date inputted");
 }

}


