/*Area para as operações nos membros presentes no laboratorio */

const url = "http://localhost:3000/sistema";/*Link para as rotas das operações nos membros*/

const formMember = document.querySelector(".invit-member");
const buttonInvitMember = document.querySelector("#button-invit-member");

/*Requisição para listar os membros do banco de dados*/

async function listMembers(){
    try{
        let listMembers = document.querySelector(".list-members")
        const response = await fetch(url);
        const data = await response.json();

        listMembers.textContent = "";

        data.forEach(member => {
            const divMember = document.createElement("div");
            const spanName = document.createElement("span");
            const spanCourse = document.createElement("span");
            const buttonEdt = document.createElement("button");
            const buttonDel = document.createElement("button");
            const divButtons = document.createElement("div");
            const divInfos = document.createElement("div")

            spanName.textContent = member.nome;
            spanCourse.textContent = `${member.curso} - ${member.time}`;

            buttonEdt.textContent = "Edt";
            buttonDel.textContent = "Del";

            divInfos.appendChild(spanName);
            divInfos.appendChild(spanCourse)

            divButtons.appendChild(buttonDel);
            divButtons.appendChild(buttonEdt);

            divMember.className = "member";
            divInfos.className = "member-infos";
            divButtons.className = "member-buttons";

            divMember.appendChild(divInfos)
            divMember.appendChild(divButtons)
            listMembers.appendChild(divMember)

            /*Requesição para deletar membros do banco de dados*/

            buttonDel.addEventListener("click", ()=>{
                async function deleteMember(){
                    try{
                        const response = await fetch(`${url}/${member.id}`,{
                            method: "DELETE",
                            headers: {
                                "Content-Type":"application/json"
                            }
                        })

                        const data = await response.json();
                        console.log(data);

                        return await response;

                    }catch(err){
                        console.log(`ERRO delete: ${err}`);
                    }
                } 

                deleteMember();
                window.location.reload();
            })

            /*Requisição para editar os dados de um membro no banco de dados*/

            buttonEdt.addEventListener("click", ()=>{
                console.log("edt")
            })
        });

    }catch(err){
        console.log(`ERRO get: ${err}`)
    }
}

listMembers();

/*Requisição para criar um membro dentro do banco de dados */

buttonInvitMember.addEventListener("click", (evt)=>{
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

            const data = await response.json();
            console.log(data);
    
            return await response;

        }catch(err){
            console.log(`ERRO post: ${err}`);
        }
    
    }

    insertMember();
    window.location.reload()
})

/*Final das operações dos membros presentes no laboratório*/

/*Area para as operações das publicações feitas pelo laboratorio */

let formPublication = document.querySelector(".invit-publication");
let buttonInvitPublication = document.querySelector(".button-invit-publication");

buttonInvitPublication.addEventListener("click", (evt)=>{
    evt.preventDefault()

    const formData = new FormData(formPublication);
    const formObject = Object.fromEntries(formData);

    console.log(formObject)
})

