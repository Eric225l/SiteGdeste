const url = "http://localhost:3000/sistema";

let formMember = document.querySelector(".invit-member");
let buttonInvitMember = document.querySelector("#button-invit-member");


async function listMembers(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        let listMembers = document.querySelector(".list-members")

        console.log(data);

        data.forEach(member => {
            console.log(member);

            const div = document.createElement('div');
            div.className = "member";
            div.textContent = member.nome
            listMembers.appendChild(div)
        });

    }catch(err){
        console.log(`ERRO get: ${err}`)
    }
}

listMembers();

buttonInvitMember.addEventListener("click", (evt)=>{
    evt.preventDefault();

    const formData = new FormData(formMember);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);

    async function insertMember(){
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    nome: formObject.nome,
                    curso: formObject.curso,
                    time: formObject.time,
                    lattes: formObject.lattes,
                    status: formObject.status
    
                })
            })
    
            return await response;

        }catch(err){
            console.log(`ERRO post: ${err}`);
        }
    
    }

    insertMember();

})

let formPublication = document.querySelector(".invit-publication");
let buttonInvitPublication = document.querySelector(".button-invit-publication");

buttonInvitPublication.addEventListener("click", (evt)=>{
    evt.preventDefault()

    const formData = new FormData(formPublication);
    const formObject = Object.fromEntries(formData);

    console.log(formObject)
})

