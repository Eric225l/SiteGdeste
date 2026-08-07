let buttonEquipe = document.querySelectorAll("#equipe");
let divPrincipal = document.querySelector("#EQUIPES");
let divEquipes = document.querySelector("#div-equipes");
let membros = document.querySelectorAll("#membros");
let setaMembrosGeral = document.querySelectorAll("#seta-equipes")

buttonEquipe.forEach((sectionAbrir) => {
    sectionAbrir.addEventListener("click", (section)=>{
        
        let setaMembrosIndividual = section.currentTarget.querySelector("#seta-equipes");

        if(sectionAbrir.className == "equipe"){
    
            buttonEquipe.forEach((sectionsFechar) =>{
                sectionsFechar.className = "equipe";
            })

            setaMembrosGeral.forEach((setaGeralFechar) => {
                setaGeralFechar.className = "seta-equipes";
            })

            sectionAbrir.className = "equipe-active";
            divPrincipal.className = "EQUIPES-ACTIVE";
            divEquipes.className = "div-equipes-active";
            setaMembrosIndividual.className = "seta-equipes-active";
        }
        else if(sectionAbrir.className == "equipe-active"){
            sectionAbrir.className = "equipe";
            divPrincipal.className = "EQUIPES";
            divEquipes.className = "div-equipes";
            setaMembrosIndividual.className = "seta-equipes";
        }
    
    })
})

let buttonVerMais = document.querySelector("#button-ver-mais");
let buttonFechar = document.querySelector("#button-fechar");
let overlay = document.querySelector("#overlay");
let popUp = document.querySelector("#pop-up-historia");
let body = document.getElementsByTagName("body")[0];

buttonVerMais.addEventListener("click", ()=>{
    overlay.className = "overlay-active";
    popUp.className = "pop-up-historia-active";
    body.style.overflow = "hidden";
})

buttonFechar.addEventListener("click", ()=>{
    overlay.className = "overlay";
    popUp.className = "pop-up-historia";
    body.style.overflow = "auto";
})
