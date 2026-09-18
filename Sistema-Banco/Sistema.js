let form = document.querySelector("#invit-member");
let buttonInvit = document.querySelector("#button-submit-member");

buttonInvit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let formData = new FormData(form)
    let formObject = Object.fromEntries(formData);

    console.log(formObject)
})

