const min = document.getElementById("min");
const sec = document.getElementById("sec");

// console.log(min.innerHTML);

const sopFun = () => {
    var secinter=setInterval(secfunc, 1000);

}

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




window.onload(sopFun());