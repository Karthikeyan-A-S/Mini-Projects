let sliderLeft=document.querySelector(".left");
let sliderRight=document.querySelector(".right");
let slideCount=sliderLeft.childElementCount;
let leftButton=document.querySelector(".left-button");
let rightButton=document.querySelector(".right-button");
sliderLeft.style.width=`${document.querySelector(".left-container").offsetWidth *slideCount}px`;
leftButton.addEventListener("click",()=>{mover("left");});
rightButton.addEventListener("click",()=>{mover("right");});
let indexNumber=0;
leftButton.style.display="none";

document.addEventListener('keydown',function(e){
    if(e.key=="ArrowLeft"){
        leftButton.click()}
    else if(e.key=="ArrowRight"){
        rightButton.click();}
});

function mover(condition){
    leftButton.style.display="block";
    rightButton.style.display="block";
    let sliderWidth=sliderLeft.firstElementChild.offsetWidth;
    let sliderHeight=sliderRight.firstElementChild.offsetHeight;
    if(condition=="left"){
        if(indexNumber>0)
            indexNumber--;
        if(indexNumber==0)
           leftButton.style.display="none";
    }
    else if(condition=="right"){
        if(indexNumber<slideCount-1)
            indexNumber++;
        if(indexNumber==slideCount-1)
            rightButton.style.display="none";
    }

    sliderLeft.style.transform = `translateX(-${indexNumber*sliderWidth}px)`
    sliderRight.style.transform = `translateY(-${indexNumber*sliderHeight}px)`
}