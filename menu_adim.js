function fun_En_task(){
    var x= document.getElementById("task_menu");
    var y=document.getElementById("icon-task");
if(x.style.height=="0px"){

x.style.height="100%";
x.style.marginLeft="5px";
x.style.transition="0.2s height";
y.style.transform="rotate(180deg)";
}
else{
   
    x.style.height="0px";
    x.style.marginTop="0px";
    x.style.transition="0.2s height";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}


}

function fun_En_account(){

    var x= document.getElementById("content");
    var y=document.getElementById("icon-Account");
if(x.style.height=="0px"){

x.style.height="100%";
x.style.marginLeft="5px";
x.style.transition="0.2s height";
y.style.transform="rotate(180deg)";
}
else{
   
    x.style.height="0px";
    x.style.marginTop="0px";
    x.style.transition="0.2s height";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}



}