let buttonEquipe = document.querySelectorAll("#equipe");
let divPrincipal = document.querySelector("#EQUIPES");
let divEquipes = document.querySelector("#div-equipes");

buttonEquipe.forEach(sectionAbrir => {
    sectionAbrir.addEventListener("click", ()=>{
        if(sectionAbrir.className == "equipe"){

            buttonEquipe.forEach(sectionsFechar =>{
                sectionsFechar.className = "equipe";
            })
            sectionAbrir.className = "equipe-active";
            divPrincipal.className = "EQUIPES-ACTIVE";
            divEquipes.className = "div-equipes-active";
        }
        else if(sectionAbrir.className == "equipe-active"){
            sectionAbrir.className = "equipe";
            divPrincipal.className = "EQUIPES";
            divEquipes.className = "div-equipes";
        }
    
    })
})

