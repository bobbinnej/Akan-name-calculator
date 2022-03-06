/*Get century from year */
function centuryFromYear(yy){
  let cc= Math.floor(yy/100);
  if(yy % 100===0)
  return cc;
  else 
  return cc+1
  
}




/*Gather user input from html to js */

function getDay(){
    let dd=document.getElementById("day").value;
    return parseInt(day);
}

function getMonth(){
    let mm=document.getElementById("month").value;
    return parseInt(month);
}

function getYear(){
    let yy=document.getElementById("year").value;
    return parseInt(year)
}
   
function getGender(){
    let flexRadioDefault =document.getElementsByName("flexRadioDefault");
    var i;
    for(i=0; i<flexRadioDefault.length; i++){
        if(flexRadioDefault[i].checked){
            return(flexRadioDefault[i].value);
        }
      
        
   
    }
}

function myInput(){
    var cc;
    let dd=getDay();
    let mm=getMonth();
    let yy= getYear();
    let flexRadioDefault=getGender();
    let answer= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7;
  
    let statement =`You were born on ${dd} ${mm} ${yy} and ${cc} is ${answer}`

    let addressResultContainer= document.getElementById("addResult");
    addressResultContainer.textContent=statement;
    return statement;

    
}
   
   
   
   