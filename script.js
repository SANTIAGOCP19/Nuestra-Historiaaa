/*====================================================
        NUESTRA HISTORIA 💜🌻
====================================================*/

/*====================================
            ELEMENTOS
====================================*/

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

const days = document.getElementById("days");

const typingText = document.getElementById("typingText");

const yes = document.getElementById("yes");
const yes2 = document.getElementById("yes2");

/*====================================
            MÚSICA
====================================*/

let playing = false;

musicButton.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicButton.innerHTML="⏸️";

        playing=true;

    }

    else{

        music.pause();

        musicButton.innerHTML="🎵";

        playing=false;

    }

});

/*====================================
        CONTADOR DE DÍAS
====================================*/

// CAMBIA ESTA FECHA

// Año, Mes-1, Día

const startDate = new Date(2024,11,27);

const today = new Date();

const difference = today - startDate;

const totalDays = Math.floor(

difference/(1000*60*60*24)

);

days.innerHTML = totalDays;

/*====================================
        CARTA
====================================*/

const carta = `

Hola, mi mona 🤍

Si estás leyendo esto...

es porque quería regalarte algo diferente.

Quería que recorrieras conmigo
todos esos momentos que vivimos,
que recordaras cada risa,
cada salida,
cada conversación
y cada instante que hizo que poco a poco
me enamorara de ti.

Gracias por aparecer en mi vida.

Gracias por regalarme tu tiempo.

Gracias por hacerme tan feliz.

Y lo mejor...

es que esta historia
todavía apenas está comenzando.

💜🌻

`;

let i=0;

function escribirCarta(){

    if(i<carta.length){

        typingText.innerHTML += carta.charAt(i);

        i++;

        setTimeout(escribirCarta,35);

    }

}

window.addEventListener("load",()=>{

    escribirCarta();

});

/*====================================================
        ANIMACIÓN AL HACER SCROLL
====================================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/*====================================================
        CORAZONES FLOTANDO
====================================================*/

function crearCorazon(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML=Math.random()>0.5 ? "💜" : "❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(crearCorazon,900);

/*====================================================
        ABRIR IMÁGENES
====================================================*/

const imagenes=document.querySelectorAll("img");

const modal=document.createElement("div");

modal.className="image-modal";

modal.innerHTML="<img>";

document.body.appendChild(modal);

const modalImg=modal.querySelector("img");

imagenes.forEach((img)=>{

    img.addEventListener("click",()=>{

        modal.classList.add("show");

        modalImg.src=img.src;

    });

});

modal.addEventListener("click",()=>{

    modal.classList.remove("show");

});

/*====================================================
        MODAL FINAL
====================================================*/

const finalModal=document.createElement("div");

finalModal.className="final-modal";

finalModal.innerHTML=`

<div class="final-card">

<h2>

💜

</h2>

<h3>

¡¡Gracias!!

</h3>

<p>

Espero que este pequeño detalle
te haya sacado una sonrisa.

Quería recordarte
lo importante que eres para mí.

❤️

</p>

<button id="closeModal">

Seguir ❤️

</button>

</div>

`;

document.body.appendChild(finalModal);

/*====================================================
        CONFETTI
====================================================*/

function lanzarConfetti(){

    confetti({

        particleCount:180,

        spread:150,

        origin:{y:0.6}

    });

}

/*====================================================
        BOTONES
====================================================*/

function abrirFinal(){

    lanzarConfetti();

    finalModal.classList.add("show");

}

yes.addEventListener("click",abrirFinal);

yes2.addEventListener("click",abrirFinal);

/*====================================================
        CERRAR MODAL
====================================================*/

document.addEventListener("click",(e)=>{

    if(e.target.id==="closeModal"){

        finalModal.classList.remove("show");

    }

});

/*====================================================
        MENSAJE
====================================================*/

console.clear();

console.log("%c💜 Nuestra Historia 💜","font-size:28px;color:#FFD54F;font-weight:bold;");

console.log("%cProyecto hecho con muchísimo amor 🌻","font-size:18px;color:white;");