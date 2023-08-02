const menuBtn = document.querySelector('.menu');
const sideBar = document.querySelector('.sidebar');

menuBtn.addEventListener('click',()=>{
    sideBar.classList.add('showSidebar');
})

document.addEventListener('mouseup',(e)=>{

    if(!sideBar.contains(e.target)){
        sideBar.classList.remove('showSidebar');
    }

})