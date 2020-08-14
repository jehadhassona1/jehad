
function fun_Enable1_Dis0(){
    var x= document.getElementById("table0");
    var y=document.getElementById("icon0");
if(x.style.display=="none"){
x.style.display="block";

y.style.transition="0.5s";
y.style.transform="rotate(180deg)";
}
else{
     x.style.display="none";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}
}

function fun_Enable1_Dis1(){
    var x= document.getElementById("table1");
    var y=document.getElementById("icon1");
if(x.style.display=="none"){

x.style.display="block";

y.style.transition="0.5s";
y.style.transform="rotate(180deg)";
}
else{
   
    x.style.display="none";
 
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}
}


function fun_Enable1_Dis2(){
    var x= document.getElementById("table2");
    var y=document.getElementById("icon2");
if(x.style.display=="none"){
x.style.display="block";

y.style.transition="0.5s";
y.style.transform="rotate(180deg)";
}
else{
     x.style.display="none";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}
}