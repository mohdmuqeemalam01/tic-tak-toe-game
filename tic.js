let boxes = document.querySelectorAll(".box");
let butt = document.querySelector("button");
let p= document.querySelector(".div");
let sound=new Audio('tic.mp3');
let turn0=true   ;
let aa=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=1;


boxes.forEach((box) => {
  box.addEventListener("click", () => {
  sound.play();
    if (turn0) {
      box.innerHTML = "X";
      turn0 = false;
    } else {
      box.innerHTML = "O";
      turn0 = true;
    }
    box.style.pointerEvents = "none"; 

    check();
  });
});

  
const check=()=>{
    for(let  x of aa){
        
     let pos1= boxes[x[0]].innerText;
     let pos2= boxes[x[1]].innerText;
     let pos3= boxes[x[2]].innerText;
        
    
    if( pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
         console.log("wiiner",pos1)
        p.innerHTML=`winner ${pos1} <br> we played ${count} time`;
          reset();
          count++;

      }
    
  
    }
  
  }
}


function reset(){


  boxes.forEach((box)=>{
    box.innerHTML="";
    box.style.pointerEvents = 'auto'; 
    turn0=true;
  })
  
  
}

butt.addEventListener('click',reset);
