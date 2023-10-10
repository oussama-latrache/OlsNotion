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