let switcherLis = document.querySelectorAll(".swithcer li")
let imgs = document.querySelectorAll('.collection .cards')
let box = document.querySelectorAll('.collection .container .box')

switcherLis.forEach((li) => {
    li.addEventListener('click',removeActive)
    li.addEventListener('click',manageImgs)
})
// remove active class from all lis and add to curent 
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active")
        this.classList.add('active')
    })
}
// manage images
function manageImgs(){
    imgs.forEach((el)=>{
        el.style.display = 'none'
    })
    document.querySelectorAll(this.dataset.filteer).forEach((el)=>{
        el.style.display = 'block'
    })
}

let btn = document.querySelector('.up')
window.onscroll = function(){
    if(window.scrollY >= "500"){
        btn.style.cssText = 'display:block;'
    }else{
        btn.style.cssText = 'display:none;'
    }
}
btn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})

// cursor animation

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "orange",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
