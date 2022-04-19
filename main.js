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
            intro.style.opacity='0';
        },2700)
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