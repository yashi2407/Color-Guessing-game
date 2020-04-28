 var numsquares=6;
 var colors= generaterandomcolors(numsquares);

var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var h1=document.querySelector("h1");
var button=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var messagedisplay=document.getElementById("message");


button.addEventListener("click",function(){
    
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colourdisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        h1.style.backgroundColor="cornflowerblue";
        messagedisplay.textContent="";
        
    }
    

});
hard.addEventListener("click",function(){
    numsquares=6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colourdisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
       squares[i].style.backgroundColor=colors[i];        
       squares[i].style.display="block";
    }
    h1.style.backgroundColor="cornflowerblue";
    

});
easy.addEventListener("click",function(){
    numsquares=3;
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colourdisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];        
        }
 
    else{
        squares[i].style.display="none";
    }
    h1.style.backgroundColor="cornflowerblue";
}
});
var colourdisplay=document.getElementById("colordisplay");
colourdisplay.textContent=pickedcolor;
for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
         
         if (clickedColor === pickedcolor){
             messagedisplay.textContent="correct";
             changecolor(pickedcolor);
             h1.style.backgroundColor=pickedcolor;
             button.textContent="Play Again??"

         }
         else{
            this.style.backgroundColor =" #232323";
            message.textContent="try again!";
         }

    });
}
function changecolor(color){
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;

}
}
function pickcolor(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];
}
function generaterandomcolors(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(randomColor());


    }
    return arr;

}
function randomColor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g +", " + b + ")";

}