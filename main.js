// cursor initialize
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

// spash sreen init
let intro = document.querySelector('.intro');
let logoSplash = document.querySelector('.logo-splash');
let logoContent = document.querySelectorAll('.logo-content');


// scroll progress init
let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num');

//menu toggle and menu bar old
// let menuIcon = document.querySelector('.menu-icon');
// let menuClose = document.querySelector('.menu-close');
// let menu = document.querySelector('.menu');
// let navLinks = document.querySelectorAll('.nav-link');

//menu toggle and menu bar new init
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.querySelector('.menu-close');
const navLink = document.querySelectorAll('.nav-link');
 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.add('active-menu');
   })
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('active-menu');
   })

function linkAction(){
    navMenu.classList.remove('active-menu');
}

navLink.forEach(n=> n.addEventListener('click', linkAction))




// cursor section code
document.addEventListener('mousemove', moveCursor);
function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}   

// splash screen code
document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoContent.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1 )* 400)
        });

        setTimeout(()=>{
            logoContent.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                })
            })
        }, 2000);


        setTimeout(()=>{
            intro.style.top='-100vh';
        },2100)
    })
})


// scroll progress code
let px,py;


function updateProgressBar(){
    progressBar.style.height=`${getScrollPercentage()}%`;
    progressNum.innerText=`${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage(){
    return((window.scrollY)/ (document.body.scrollHeight- window.innerHeight)*100 )
}


updateProgressBar()






//menu toggle and menu bar code  

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.add('active-menu');
   })
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('active-menu');
   })

function linkAction(){
    navMenu.classList.remove('active-menu');
}

navLink.forEach(n=> n.addEventListener('click', linkAction))
