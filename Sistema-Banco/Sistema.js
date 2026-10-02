let formMembers = document.querySelector("#invit-member");
let buttonInvitMembers = document.querySelector("#button-submit-member");

const url = "http://localhost:3000/sistema";

async function GetDadosDatabase(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error result: ${response.status}`)
        
        }
        
    }catch(err){
        console.log(`Erro: ${err}`);
    }
}

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



