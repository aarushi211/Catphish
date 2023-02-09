document.getElementById('sub').addEventListener('click',function(){
let img;
let data='';
let value= document.getElementById('sub').value;
if(value==1){
    data='This Site is PHISHED! Please report at ......';
    img="D:\Github\Phishing\Images\alert.gif";
}
else if(value==0){
    data='This Site is Safe! You may Proceed...';
    img="D:\Github\Phishing\Images\alert.gif";
}
document.getElementById('body').setAttribute("src",img);
document.getElementById('res').innerHTML=` ${data}.`;
});
