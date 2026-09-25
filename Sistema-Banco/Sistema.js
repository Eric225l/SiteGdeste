let formMembers = document.querySelector("#invit-member");
let buttonInvitMembers = document.querySelector("#button-submit-member");

buttonInvitMembers.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let formData = new FormData(formMembers)
    let formObject = Object.fromEntries(formData);

    console.log(formObject)

    
})

//Area das operações de publicações

let formPublications = document.querySelector("#invit-publi");
let buttonInvitPubli = document.querySelector("#button-submit-publi");

buttonInvitPubli.addEventListener("click", (e)=>{
    e.preventDefault();

    let formData = new FormData(formPublications);
    let formObject = Object.fromEntries(formData);

    console.log(formObject);

})



