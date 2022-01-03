let content = document.getElementById("content");

let header = document.createElement("header");
header.className="header";

let headerName = document.createElement("h1");
headerName.className="header-name";
headerName.innerText="Rebecka Larsson"

let headerNameName = document.createElement("h2");
headerNameName.className="header-name-name";
headerNameName.innerText="Front End Utvecklare"

let headerContact = document.createElement("nav");
headerContact.className="header-contact";
    /*let ul = document.createElement("ul");
        let li1 = document.createElement("li");
            let a1 = document.createElement("a");
            a1.href="tel:0707693442";
                let i1 = document.createElement("i");
                il.className="fas fa-phone fa-2x";
        let li2 = document.createElement("li");
            let a2 = document.createElement("a");
            a2.href="mailto:rebecka.larsson@medieinstitutet.se";
                let i2 = document.createElement("i");
                i2.className="fas fa-envelope fa-2x"
        let li3 = document.createElement("li");
            let a3 = document.createElement("a");
            a3.href="https://www.linkedin.com/in/rebecka-larsson-68434b222/";
                let i3 = document.createElement("i");
                i3.className="fab fa-linkedin fa-2x";

a1.append(i1);
a2.append(i2);
a3.append(i3);

li1.append(a1);
li2.append(a2);
li3.append(a3);

ul.append(li1, li2, li3);
headerContact.append(ul);*/

let ul = document.createElement("ul");
ul.className ="header-lang"

let li1 = document.createElement("li");
let headerLang = document.createElement("button");
headerLang.innerText="English";
headerLang.addEventListener("click", eng);

let li2 = document.createElement("li");
let headerLang1 = document.createElement("button");
headerLang1.innerText="Svenska";
headerLang1.addEventListener("click",swe);

li1.append(headerLang);
li2.append(headerLang1);
ul.append(li1, li2);

let headerAbout = document.createElement("h2");
headerAbout.className="header-about";
headerAbout.innerText="Kort om mig";

let headerAboutText = document.createElement("p");
headerAboutText.className="header-abouttext";
headerAboutText.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let headerImg = document.createElement("img");
headerImg.className="header-img";
headerImg.src="./img/me.png";



header.append(headerName, headerNameName, headerContact, ul, headerAbout, headerAboutText, headerImg);


let skills =document.createElement("section");
skills.className="skills";

p1 = document.createElement("p");
p1.innerText="HTML"
let skillsContainer1 = document.createElement("div");
skillsContainer1.className="skills-container";
    let SkillHTML = document.createElement("div");
    SkillHTML.className = "skill html";
skillsContainer1.append(SkillHTML);

p2 = document.createElement("p");
p2.innerText="CSS"
let skillsContainer2 = document.createElement("div");
skillsContainer2.className="skills-container";
    let SkillCSS = document.createElement("div");
    SkillCSS.className = "skill html";
skillsContainer2.append(SkillCSS);

p3 = document.createElement("p");
p3.innerText="JavaScript"
let skillsContainer3 = document.createElement("div");
skillsContainer3.className="skills-container";
    let SkillJava = document.createElement("div");
    SkillJava.className = "skill java";
skillsContainer3.append(SkillJava);

p4 = document.createElement("p");
p4.innerText="GIT"
let skillsContainer4 = document.createElement("div");
skillsContainer4.className="skills-container";
    let Skillgit = document.createElement("div");
    Skillgit.className = "skill git";
skillsContainer4.append(Skillgit);

skills.append(p1, skillsContainer1, p2, skillsContainer2, p3, skillsContainer3, p4, skillsContainer4);

let project1 = document.createElement("article");
project1.className="project1";
    let ProjectHeader1 = document.createElement("h2");
    ProjectHeader1.className="project-header";
    ProjectHeader1.innerText="Till månen";
    let ProjectImg1 = document.createElement("img");
    ProjectImg1.className="project-img";
    ProjectImg1.src="./img/project1.png";
    let Overlay1 =document.createElement("div");
    Overlay1.className="overlay";
    let overlaytext1 = document.createElement("p");
    overlaytext1.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    Overlay1.append(overlaytext1);
project1.append(ProjectHeader1, ProjectImg1, Overlay1);

let project2 = document.createElement("article");
project2.className="project2";
    let ProjectHeader2 = document.createElement("h2");
    ProjectHeader2.className="project-header";
    ProjectHeader2.innerText="Rebecka CV";
    let ProjectImg2 = document.createElement("img");
    ProjectImg2.className="project-img";
    ProjectImg2.src="./img/project2.png";
    let Overlay2 =document.createElement("div");
    Overlay2.className="overlay";
    let overlaytext2 = document.createElement("p");
    overlaytext2.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    Overlay2.append(overlaytext2);
project2.append(ProjectHeader2, ProjectImg2, Overlay2);


let project3 = document.createElement("article");
project3.className="project3";
    let ProjectHeader3 = document.createElement("h2");
    ProjectHeader3.className="project-header";
    ProjectHeader3.innerText="Utforska Rymden";
    let ProjectImg3 = document.createElement("img");
    ProjectImg3.className="project-img";
    ProjectImg3.src="./img/project3.png";
    let Overlay3 =document.createElement("div");
    Overlay3.className="overlay";
    let overlaytext3 = document.createElement("p");
    overlaytext3.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    Overlay3.append(overlaytext3);
project3.append(ProjectHeader3, ProjectImg3, Overlay3);

let project4 = document.createElement("article");
project4.className="project4";
    let ProjectHeader4 = document.createElement("h2");
    ProjectHeader4.className="project-header";
    ProjectHeader4.innerText="Parallax hemsida";
    let ProjectImg4 = document.createElement("div");
    ProjectImg4.className="project-img-p4";
    let ProjectText4 = document.createElement("p");
    ProjectText4.className="project-text";

project4.append(ProjectHeader4, ProjectImg4, ProjectText4);

content.append(header, skills, project1, project2, project3, project4);

function eng(){
    headerAbout.innerText="About me";
    headerNameName.innerText="Front End Developer"
    ProjectHeader1.innerText="To the Moon";
    ProjectHeader2.innerText="Rebecka Resume";
    ProjectHeader3.innerText="Space Ventures";
    ProjectHeader4.innerText="Parallax Website";
}


function swe(){
    headerAbout.innerText="Kort om mig";
    headerNameName.innerText="Front End Utvecklare"
    ProjectHeader1.innerText="Till månen";
    ProjectHeader2.innerText="Rebecka CV";
    ProjectHeader3.innerText="Utforska Rymden";
    ProjectHeader4.innerText="Parallax hemsida";
}