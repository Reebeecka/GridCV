
let ulE = document.getElementById("header-lang");

let liEng = document.createElement("li");
let eng = document.createElement("button");
eng.innerHTML="Eng";
eng.addEventListener("click", english);

liEng.append(eng);

let liSve = document.createElement("li");
let sve = document.createElement("button");
sve.innerHTML="Sve";
sve.addEventListener("click", svenska)

liSve.append(sve);

ulE.append(eng);
ulE.append(sve);

let headerNameName = document.getElementById("header-name-name");
let headerAbout = document.getElementById("header-about");
let headerAboutText = document.getElementById("header-abouttext");
let project1Header = document.getElementById("project1-header");
let project1Text = document.getElementById("project1-text");
let project2Header = document.getElementById("project2-header");
let project2Text = document.getElementById("project2-text");
let project3Header = document.getElementById("project3-header");
let project3Text = document.getElementById("project3-text");
let project4Header = document.getElementById("project4-header");
let project4Text = document.getElementById("project4-text");
let projectLink1 = document.getElementById("project-link1");
let projectLink2 = document.getElementById("project-link2");
let projectLink3 = document.getElementById("project-link3");
let projectLink4 = document.getElementById("project-link4");

function english(){
    headerNameName.innerHTML="FrontEnd Developer";
    headerAbout.innerHTML="About me";
    headerAboutText.innerHTML="Hello! Im looking for a Lia-spot at yours! I´m a nice girl, 24 years old who loves front-end development. My favourite language is probably CSS even though JavaScript is a very close second. I live in Västerås with my partner and dog. I love to travel togheter with my family and I´m also very active in Swedish rugby as beeing on the board, managing a team and refereing. I´ve always done team sports and that have helped me in my collaboration with others. I´m a very social girl that likes to both work and hang out with others even if its sometimes very nice to sit done and write some code alone sometimes. I´ve always been praised for beeing a fast worker and learner even though I might sometimes be a bit too fast. In my latest workplace I worked in administration with solving technichal issues, salaries and economic reports, this has enhanced my ability to problemsolve but it also helped me become really good at excel. If you scroll down you see some of my skills and how good I feel that I am at those skills, you also see some of my projects from School. I hope to see you in October during my first Lia-period! Thank you!";
    project1Header.innerHTML="To the moon";
    project1Text.innerHTML="Above is a project from school with the purpose of learning positioning in CSS and also work from a clientspecification. Hover over the image to see page 2 of the website";
    project2Header.innerHTML="My first resumé";
    project2Text.innerHTML="Above is a self-designed project that we worked on in school. I was not happy, hence why i created the page you are currently on (haha)";
    project3Header.innerHTML="Cities and Countries";
    project3Text.innerHTML="Above is a JavaScript project that I created togheter with a group in school. The project is based on several API:s that shows you the population, wheater, comon facts and the most recent news from a country and its cities.";
    project4Header.innerHTML="Game Covid";
    project4Text.innerHTML="Above is also a groupproject where we had the assignment to create a game to learn about colision and keystrokes. In the game we have created to characters that are supose to chase eachother and score points";
    projectLink1.innerHTML="Press here to get to the GitHub Repo";
    projectLink2.innerHTML="Press here to get to the GitHub Repo";
    projectLink3.innerHTML="Press here to get to the GitHub Repo";
    projectLink4.innerHTML="Press here to get to the GitHub Repo";
}

function svenska(){
    headerNameName.innerHTML="FrontEnd Utvecklare";
    headerAbout.innerHTML="Kort om mig";
    headerAboutText.innerHTML="Hej! Jag söker en Lia-plats hos er! Jag är en trevlig tjej på 24 år som älskar front-end utveckling. Mitt favorit språk tror jag är CSS även om JavaScript kommer på en nära andra plats. Jag bor i Västerås tillsammans med min sambo och hund. Jag gillar att resa mycket tillsammans med familjen och är aktiv inom rugbyn i Sverige genom att sitta i styrelse, vara manager och dommare. Jag har alltid hållit på med lagsport vilket har hjälpt mig i mitt sammarbete med andra. Jag är en väldigt social tjej som gärna både arbetar och umgås med andra även om det är väldigt skönt att sitta och skriva kod i sin ensamhet ibland. Jag har alltid fått beröm för att vara snabb i mitt arbete samt snabb på att lära mig även om det ibland kan gå lite väl snabbt. På mitt senaste arbete jobbade jag administrativt med tekniska strul, löner och ekonomiska rapporter, detta har förstärkt min förmåga i problemlösning med även gjort att jag har blivit duktig på excel. Nedan ser du mina kompetenser och hur duktig jag är på dessa enligt mig själv samt några av mina projekt från skolan. Jag hoppas att vi ses i Oktober under min första Lia-period! Tack!";
    project1Header.innerHTML="Mot månen";
    project1Text.innerHTML="Ovan är ett projekt från skolan där grunden var att lära sig positionering i CSS. Samt jobba utifrån en kravspecifikation från kund. Håll muspekaren över bilden för att se sida två av webbplatsen";
    project2Header.innerHTML="Mitt första CV";
    project2Text.innerHTML="Ovan är ett egen-designat project som vi arbetade med i skolan. Jag var inte nöjd och skapade därför sidan du är på just nu (haha).";
    project3Header.innerHTML="Städer och Länder";
    project3Text.innerHTML="Ovan är ett JavaScript project som jag tillsammans med en grupp i skolan skapat. Projektet är uppbygt på API:er där du får fram population, väder, vanlig fakta samt den senaste nyheten från ett land samt de tillhörande städerna till landet.";
    project4Header.innerHTML="Spel Corona";
    project4Text.innerHTML="Ovan är även det ett grupparbete där vi fick i uppgift att skapa ett spel för att lära oss om kollision och tangenttryckningar. Vi har i spelet två karaktärer som ska jaga varandra och samla poäng.";
    projectLink1.innerHTML="Tryck här för att komma till GitHub Repot";
    projectLink2.innerHTML="Tryck här för att komma till GitHub Repot";
    projectLink3.innerHTML="Tryck här för att komma till GitHub Repot";
    projectLink4.innerHTML="Tryck här för att komma till GitHub Repot";
}

function hoverImg(img){
    img.src = "/project1hover.PNG";
}

function normalImg(img){
    img.src= "project1.PNG"
}