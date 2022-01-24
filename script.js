const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', ()=>{
const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');

        
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
            document.querySelector('nav a[href*="'+ sectionId +'"]').classList.add('navActive');
            // console.log(sectionId);
        }


        else {
            document.querySelector('nav a[href*="'+ sectionId +'"]').classList.remove('navActive');
            
        }
});
});
