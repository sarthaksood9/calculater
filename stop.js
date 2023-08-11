const min = document.getElementById("min");
const sec = document.getElementById("sec");
const bg = document.getElementById("mainBody");
const SBtn = document.getElementById("SBtn");
const Cbtn = document.getElementById("Cbtn");

// const minSelecter = document.getElementById("minSelect");


// var e = document.getElementById("minSelect");
// function onChange() {
//   var value = e.value;
// }


// e.onchange = onChange;
// onChange();


function myColor() {
    var x = document.getElementById("ColorSelect").value;
    bg.style.backgroundColor=x;
  }
function myMin() {
    var x = document.getElementById("minSelect").value;
    min.innerHTML=x;
  }
function mySec() {
    var x = document.getElementById("secSelect").value;
    sec.innerHTML=x;
  }


// console.log(minSelecter.value);
// // console.log(min.innerHTML);
// const x=()=>{
//     minSelecter.value=min.innerHTML;
// }

let secinter;

const sopFun = () => {
    if(SBtn.innerHTML=="Start"){
        // secinter();
        secinter=setInterval(secfunc, 1000);
        SBtn.innerHTML="Stop";
    }
    else if(SBtn.innerHTML=="Stop"){
        SBtn.innerHTML="Start";
        clearInterval(secinter);
    }


    
    // minSelecter.value=min.innerHTML;

}
// clearInterval();

var a=min.innerHTML;

const secfunc = () => {
    if(a<=-1){
        min.innerHTML=0;
        sec.innerHTML=0;
        a--;
    }
    else{
        if(sec.innerHTML==0){
            a--;  
            if(a>-1){
                min.innerHTML = min.innerHTML-1;
                sec.innerHTML=60;
            }  
        }
        if(a>-1){
            sec.innerHTML = sec.innerHTML-1;
        }  
        
    }
}
const Clrfun=()=>{
    sec.innerHTML=0;
    min.innerHTML=0;
    clearInterval(secinter);
}



// window.onload(sopFun());