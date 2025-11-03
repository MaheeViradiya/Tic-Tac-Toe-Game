let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let restartbtn = document.querySelector("#restart-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//players

const winnpatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if(turn0){
        box.innerText = "0";
        turn0 = false;
       }
       else{
        box.innerText = "x";
        turn0=true;
       }
       box.disabled = true;

       checkwin();

    });
});

const disablebtn = () => {
    for( let box of boxes){
        box.disabled = true;
    }
};

const showwinner = (winner) => {
  msg.innerText = 'Congratulations'; 
  msgcontainer.classList.remove("hide");
  disablebtn();
};

const checkwin = () => {
    for (let pattern of winnpatt){
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 ===pos3){
            showwinner(pos1);
        }
      }
    }
};

const resetgame = () => {
    let turn0 = true;
    enablebtn();
    msgcontainer.classList.add("hide");
};

const enablebtn = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
};

restartbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);