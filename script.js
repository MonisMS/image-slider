const leftBtn=document.querySelector(".btn-left")
const rightBtn=document.querySelector(".btn-right")
const image=document.querySelector(".images")
let imgArr=["1","2","3","4","5","6"];
let count=0;

leftBtn.addEventListener("click",left)

rightBtn.addEventListener("click",()=>right)

function left() {
    if(count===0)
        {
            count=imgArr.length-1;
        
        }
        else{
            count --;
        }
        image.style.background=`url("imgs/${imgArr[count]}.png")`
        
}

function right() {
    if(count===imgArr.length-1){
        count=0;
    }
    else{
        count++;
    }
image.style.background=`url("imgs/${imgArr[count]}.png")`
}