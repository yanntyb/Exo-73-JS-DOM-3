function newObject(classe,position){
    let object = document.createElement("div");
    object.className = classe;
    object.style.left = position[0];
    object.style.top = position[1]
    document.body.appendChild(object);
}

let name = ["planet","moon"]

for(let i = 0; i<10;i++){
    let random = Math.floor(Math.random()*2);
    let position = [Math.trunc(Math.random()*100) + "px", Math.trunc(Math.random()*100) + "px"];
    newObject(name[random],position);
}