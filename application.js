

const sec_about = document.querySelector("#about");
const sec_experience = document.querySelector("#experience");
const sec_education = document.querySelector("#education");
const sec_skills = document.querySelector("#skills");
const sec_interests = document.querySelector("#interests");
const sec_awards = document.querySelector("#awards");


const a_about = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='ABOUT']")
const a_experience = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='EXPERIENCE']")
const a_education = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='EDUCATION']")
const a_skills = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='SKILLS']")
const a_interests = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='INTERESTS']")
const a_award = document.querySelector("div.container-menu-side-bar menu.menu a[VALUE='AWARDS']")

const list_options_menu = [a_about, a_experience, a_education, a_skills, a_interests, a_award]

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}



const intersection = new IntersectionObserver((entries,)=>{ // <-- Função criada para o disparar uma alerta quando chegar na seção escolhida
    entries.forEach(entry => {
        if(entry.isIntersecting){
            list_options_menu.forEach( item => {
                if (item.getAttribute("value").toLowerCase() == entry.target.getAttribute("id")){
                    item.style.color = "white"
                }
            })

        }else{
            list_options_menu.forEach( item => {
                if (item.getAttribute("value").toLowerCase() == entry.target.getAttribute("id")){
                    item.style.color = "rgb(231, 206, 138)"
                }
            })
        }
    })
}, {threshold: 0.3, root: document.querySelector("#scroll-main")} );



const on_scroll = ()=>{
    debounce(intersection.observe(sec_about),
    intersection.observe(sec_experience),
    intersection.observe(sec_education),
    intersection.observe(sec_skills),
    intersection.observe(sec_interests),
    intersection.observe(sec_awards))
}


window.addEventListener("scroll" , on_scroll(), {once: false});




function onclick_download(){
    console.log("Free Download")
}

function onclick_delete_frame(){
    console.log("Delete frame")
}


