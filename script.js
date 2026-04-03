function clickFX(){
  const s=document.getElementById("clickSound");
  s.currentTime=0;
  s.play().catch(()=>{});
}

document.addEventListener("click",clickFX);
function openBoost(){
  document.getElementById("boostModal").classList.add("active");
}

function addBoostLine(text){
  const box=document.getElementById("boostTerminal");

  const line=document.createElement("div");
  line.className="boost-line";
  line.textContent="$ "+text;

  box.appendChild(line);

  setTimeout(()=>{
    line.style.opacity="1";
    line.style.transform="translateX(0)";
  },50);

  box.scrollTop=box.scrollHeight;
}
function boostLine(text){

  const terminal = document.getElementById("codeTerminal");

  if(!terminal) {
    console.log("Không tìm thấy codeTerminal");
    return;
  }

  const line=document.createElement("div");
  line.className="code-line";
  line.innerHTML=`<span class="code-prompt">$</span> ${text}`;

  terminal.appendChild(line);
  terminal.scrollTop=terminal.scrollHeight;
}
document
.getElementById("closeBostramBtn")
.addEventListener("click",()=>{

  bostramModal.classList.remove("active");
  overlay.classList.remove("active");

});
