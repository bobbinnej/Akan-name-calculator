/*Call the onsubmit() function from html file */

function getInput(){
    let dd =parseInt(prompt("Enter day of birth"));
    let mm=parseInt(prompt("Enter month of birth"));
    let yy=parseInt(prompt("Enter year of birth"));

    console.log("User entered birth day:",dd);
    console.log("User entered birth month:", mm);
    console.log("User entered birth year:",yy);
    getOutput(dd,mm,yy);

}
getInput()
function getOutput(dd,mm,yy){
    console.log("Akan name is",dd*mm*yy);
    return("Akan name is ",dd*mm*yy);
}

