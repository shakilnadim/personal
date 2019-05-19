const txtElement = document.querySelector('.name');
const name = txtElement.getAttribute('data-name');
const nav = document.querySelector('nav');
const loc = document.querySelector('.location');
const modified = document.querySelector('.modified');
const hobbies = document.querySelector('#hobbies');
const img = document.querySelector('.img');
let txt = '';

// navbar sticky
window.onscroll = function() {stickyNav()};
function stickyNav() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.classList.add('sticky');
    }else {
        nav.classList.remove('sticky');
    }
}

// footer content
document.addEventListener('DOMContentLoaded', typeWriter());
loc.textContent = window.location.href;
modified.textContent = document.lastModified;

function typeWriter(){
    txt = name.substring(0, txt.length+1)
    txtElement.innerHTML = `<span>${txt}</span>`;
    document.querySelector('.name span').style.borderRight = '1px soilid #ccc';

    if(txt.length != name.length){
        if(txt.length%2 != 0){
            document.querySelector('.name span').style.borderRight = 'none';
        }
        setTimeout(()=>this.typeWriter(name), 150);
    }else{
        document.querySelector('.name span').style.borderRight = 'none';
    }
}

// console.log(window.innerHeight);
window.addEventListener('scroll', function(){
    const scrollable = hobbies.offsetTop - window.innerHeight;
    const scrolled = window.scrollY;
    if(scrollable*2-100 < scrolled){
        img.classList.add('animation');
    }
});
