// cursor initialize
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

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