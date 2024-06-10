let menu=document.querySelector('#menu');
let list=document.querySelector('#list');
menu.addEventListener('click',()=>{
    list.classList.toggle('active');
})