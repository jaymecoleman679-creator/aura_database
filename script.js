/*

========================================================

AURA DATABASE

script.js

Version 1.0

========================================================

*/

console.log("⚡ AURA Database Initialized");

/* ==========================================

   Sample Character Database

   (Replace later with JSON files)

========================================== */

const characters = [

{

    name: "Fireflight",

    type: "Hero",

    power: "Pyrokinesis & Time Manipulation",

    universe: "Earth-1"

},

{

    name: "Bee",

    type: "Hero",

    power: "Bio-Electric Energy",

    universe: "Earth-10091"

},

{

    name: "Gate",

    type: "Hero",

    power: "Space Manipulation",

    universe: "Earth-1"

},

{

    name: "Sunstar",

    type: "Hero",

    power: "Solar Energy",

    universe: "Earth-10099"

},

{

    name: "Mischief Roswell",

    type: "Villain",

    power: "Cryo-Hydrokinesis",

    universe: "Earth-1"

}

];

/* ==========================================

   Build Character Cards

========================================== */

function loadCharacters(){

    const grid = document.getElementById("characterGrid");

    if(!grid) return;

    grid.innerHTML = "";

    characters.forEach(character=>{

        const card = document.createElement("div");

        card.className = "card fade-up";

        card.innerHTML = `

            <h2>${character.name}</h2>

            <p><strong>Type:</strong> ${character.type}</p>

            <p><strong>Power:</strong> ${character.power}</p>

            <p><strong>Universe:</strong> ${character.universe}</p>

        `;

        grid.appendChild(card);

    });

}

/* ==========================================

   Search

========================================== */

function searchCharacters(){

    const input = document

        .getElementById("search");

    if(!input) return;

    const filter =

    input.value.toLowerCase();

    const cards =

    document.querySelectorAll(".card");

    cards.forEach(card=>{

        const text =

        card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

/* ==========================================

   Theme Toggle

========================================== */

function toggleTheme(){

    document.body.classList.toggle("light");

    localStorage.setItem(

        "theme",

        document.body.classList.contains("light")

    );

}

function loadTheme(){

    const saved =

    localStorage.getItem("theme");

    if(saved==="true"){

        document.body.classList.add("light");

    }

}

/* ==========================================

   Smooth Scroll

========================================== */

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================

   Random Hero

========================================== */

function randomHero(){

    const hero=

    characters[

        Math.floor(

            Math.random()*characters.length

        )

    ];

    alert(

`${hero.name}

Power:

${hero.power}

Universe:

${hero.universe}`

    );

}

/* ==========================================

   Live Clock

========================================== */

function updateClock(){

    const clock =

    document.getElementById("clock");

    if(!clock) return;

    const now=new Date();

    clock.textContent=

    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

/* ==========================================

   Loading Screen

========================================== */

window.addEventListener("load",()=>{

    const loader=

    document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },600);

    }

});

/* ==========================================

   Keyboard Shortcuts

========================================== */

document.addEventListener("keydown",(e)=>{

    // CTRL + /

    if(e.ctrlKey && e.key==="/"){

        const input=

        document.getElementById("search");

        if(input){

            input.focus();

        }

    }

    // R

    if(e.key==="r"){

        randomHero();

    }

});

/* ==========================================

   Startup

========================================== */

loadTheme();

loadCharacters();

updateClock();

const searchBox =

document.getElementById("search");

if(searchBox){

searchBox.addEventListener(

"keyup",

searchCharacters

);

}

console.log("✅ Aura Ready");