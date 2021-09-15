const app = document.querySelector(".app");

const inactiveTime = 3000;
let mouseLastMoveTime = new Date();

document.addEventListener("mousemove",()=>{
    mouseLastMoveTime = new Date();
    app.classList.remove("inactive");
    document.body.style.cursor="auto";

})
function deactivateApp(){
    let now = new Date();
    let deltaTime = now - mouseLastMoveTime;

    if(deltaTime>=inactiveTime){
        app.classList.add("inactive");
    }
    requestAnimationFrame(deactivateApp);//loop, check every millisecond
}
deactivateApp();