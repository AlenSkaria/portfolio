const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left= e.pageX + 'px';
    cursor.style.top= e.pageY + 'px';
});




const t1 = new gsap.timeline();

t1.from(".whoami h4,.whoami h1,.passion h1,.passion h4,.btn-resume,.connect h1,.connect h4, .btn-connect",{
    duration:.9,
    stagger:{
        amount:.2
    },
    y:150,
    skewX:30,
    opacity:0
})







