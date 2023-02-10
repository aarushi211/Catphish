document.getElementById("sub").addEventListener("click",function(){
let img;
let data="";
let report= document.getElementById("sub").value;
if(report==1){
    data="This Site is PHISHED! Please report at ......";
    img=".Images/alert.gif";
}
else if(report==0){
    data="This Site is Safe! You may Proceed...";
    img=".Images/alert.gif";
}
else{
    data="Value out of bounds"
}
document.getElementById("body").setAttribute("src",img);
document.getElementById("res").innerHTML=` ${data}.`;
document.getElementById("result").innerHTML=`Your site score is <strong>${report}</strong>.`;
document.getElementById("info").setAttribute("class","show");

});
