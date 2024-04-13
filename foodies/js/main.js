// nva section fixed
let navBar=document.querySelector(".navigation-wrap");
navBar.classList.add("scroll-in");
window.onscroll= function(){
    if(document.documentElement.scrollTop > 30){
        navBar.classList.add("scroll-in");
    }else{
        navBar.classList.remove("scroll-in");
    }
}

