//navegação da area de publicações e membros

let buttonMembers = document.querySelector("#area-member");
let buttonPubli = document.querySelector("#area-publi");

let areaMembers = document.querySelector(".operations-members");
let areaPubli = document.querySelector(".operations-publi");


buttonMembers.addEventListener("click", ()=>{
    areaMembers.style.display = "flex";
    areaPubli.style.display = "none";
})

buttonPubli.addEventListener("click", ()=>{
    areaPubli.style.display = "flex";
    areaMembers.style.display = "none";
})

//navegação da area de publicações

let buttonNavigateLeft = document.querySelector("#navigate-publi-left");
let buttonNavigateRight = document.querySelector("#navigate-publi-right");

let invitPubli = document.querySelector(".area-invit-publi");
let listPubli = document.querySelector(".list-publi");
 
buttonNavigateLeft.addEventListener("click", ()=>{
    invitPubli.style.display = "flex";
    listPubli.style.display = "none";

    buttonNavigateRight.style.display = "flex";
    buttonNavigateLeft.style.display = "none";
})

buttonNavigateRight.addEventListener("click", ()=>{
    invitPubli.style.display = "none";
    listPubli.style.display = "grid";

    buttonNavigateLeft.style.display = "flex";
    buttonNavigateRight.style.display = "none";

})