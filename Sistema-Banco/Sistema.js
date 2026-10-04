const url = "http://localhost:3000/sistema";

let formMember = document.querySelector(".invit-member");
let buttonInvitMember = document.querySelector("#button-invit-member");

buttonInvitMember.addEventListener("click", (evt)=>{
    evt.preventDefault();

    const formData = new FormData(formMember);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);
})

let formPublication = document.querySelector(".invit-publication");
let buttonInvitPublication = document.querySelector(".button-invit-publication");

buttonInvitPublication.addEventListener("click", (evt)=>{
    evt.preventDefault()

    const formData = new FormData(formPublication);
    const formObject = Object.fromEntries(formData);

    console.log(formObject)
})

