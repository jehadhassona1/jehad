function fun_Enable1_Dis1(){
    var x= document.getElementById("table1");
    var y=document.getElementById("icon1");
if(x.style.display=="none"){

x.style.display="table";

x.style.transition="0.5s height";
y.style.transform="rotate(180deg)";
}
else{
   
    x.style.display="none";
   
    x.style.transition="0.5s height";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}
}

function fun_Enable1_Dis2(){
    var x= document.getElementById("table2");
    var y=document.getElementById("icon2");
if(x.style.display=="none"){

x.style.display="table";

x.style.transition="0.5s height";
y.style.transform="rotate(180deg)";
}
else{
   
    x.style.display="none";
   
    x.style.transition="0.5s height";
     y.style.transform="rotate(0deg)";
     y.style.transition="0.5s";
    
}
}

function disData() {
    var data1 = document.getElementById("start0");
    var data2 = document.getElementById("start1");



    if (data1.value >= data2.value) {
      document.getElementById("error2").style.display = "block";

      return false;


    }
    else {
      document.getElementById("error2").style.display = "none";
      return true;
    }

  }