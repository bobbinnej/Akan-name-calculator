
     const submitButton=document.getElementById("submit-btn");
   




/*Get user input from html to js */
function computeAkanName(){
    let birthdate=document.getElementById("getBirthDate").value;
    var flexRadioDefault=document.getElementsByName("flexRadioDefault");
    
    for(i=0; i<flexRadioDefault.length; i++){
        if(flexRadioDefault[i].checked){
        alert(flexRadioDefault[i].value);
        }
       
   
    }



/*Arrays for male,female and days */

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var addResult=document.getElementById("addResult");

var dateborn= new Date (birthdate);
var dayOfTheWeek= dateborn.getDay();
console.log("dateborn",dateborn.getDay());

if(flexRadioDefault === "Male"){
  alert(`Wow! You were born on a ,${days[dayOfTheWeek]} and Your Akan name is ${maleAkanNames[dayOfTheWeek]}`);
}

else{
alert(`Wow! You were born on a ,${days[dayOfTheWeek]} and Your Akan name is ${femaleAkanNames[dayOfTheWeek]}`);

}

}