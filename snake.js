
let fd=document.querySelector('#snkFd')
let snkLen=document.querySelector('#snkBdy')
const bdy = document.querySelector("body");
let snk=[];
let posX = 0;
let posY = 0;
let score=0;
let crntsc=0
posFdX=0;
posFdY=0;
turn=0
act = "";

bdy.addEventListener("keydown", (event) => {
  act = event.key;
  runGame();
});

function runGame() {
  clearInterval(window.hi);
  window.hi = setInterval(runMain, 200);
  
}


function runMain() {
 
  for(x=snk.length-1;x>0;x--){
    snk[x].style.transform =snk[x-1].style.transform
    snk[x].style.display='block'}
    
    switch (act) {
      case "ArrowUp":
        posY -= 30;turn=- 180;
        break;
      case "ArrowDown":
        posY += 30;turn=0;
        break;
      case "ArrowLeft":
        console.log("hello")
        posX -= 30;turn=90;
        break;
      case "ArrowRight":
        posX += 30;turn=-90;
        break;
      default:
        break;
    }

    if(posX>570||posX<0||posY>480||posY<0)
      gameOver();
    
    snk[0].style.transform = `translate(${posX}px,${posY}px) rotate(${turn}deg)`;
  if(posFdX==posX&&posFdY==posY)
  { 
    crntsc++;
    document.getElementById('lnb').innerHTML=crntsc;
    console.log('Food matched ')
    addFood();
    addTail();
    
  }
}

addTail=function () {
  snkLen=document.querySelector('#snkBdy')
  newNode = document.createElement("div");
  newNode.setAttribute("id","snkNode");
  newNode.setAttribute('style','background-image: url(snk.png); background-size: 30px;background-color:transparent');
  snkLen.append(newNode);
  newNode.style.display="none"
  snk = document.querySelectorAll("#snkNode");
}

addFood=function (){
  posFdX=Math.floor(Math.random()*20)*30;
  posFdY=Math.floor(Math.random()*17)*30;
  console.log(`translate(${posFdX}px,${posFdY}px)`);
  fd.style.display='block';
  fd.style.transform=`translate(${posFdX}px,${posFdY}px)`;
}


gameOver=()=>{
  if(score<crntsc){
    score=crntsc;
    document.getElementById('lna').innerHTML=score;
  }
  document.getElementsByClassName('ovr')[0].style.display="flex"
  document.getElementById("mt-btn").value="RE-START"
  snk[0].parentElement.remove();


}

gameStart=()=>{
  document.getElementsByClassName('ovr')[0].style.display="none"
  snkBdyVar=document.createElement("div")
  snkNodeVar=document.createElement("div")
  snkBdyVar.setAttribute('id','snkBdy')
  snkNodeVar.setAttribute('style','background-image: url(snkHead.png); background-size: 30px;background-color:transparent')
  snkNodeVar.setAttribute('id','snkNode')
  document.querySelector("#playGrd").append(snkBdyVar)
  document.querySelector("#snkBdy").append(snkNodeVar)
  addTail()
  addTail()
  initGame()
  addFood()
  runGame()
}

initGame=()=>{
  crntsc=0
  posX=0,posY=0;
  act = "ArrowRight";
  snk = document.querySelectorAll("#snkNode");
  document.getElementById('lnb').innerHTML=crntsc;
}