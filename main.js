const section = document.querySelectorAll('.slide');
const nav = document.querySelectorAll('.navigation_item');
let cont = 0;

for(let i = 0; i < section.length; i++){
    section[i].style.display='none';
    nav[i].firstElementChild.firstElementChild.classList.remove('ativo');
}

nav.forEach((e) =>{
    e.addEventListener('click', () =>{
        if (cont > -1 && cont < 9){
        nav[cont].firstElementChild.firstElementChild.classList.remove('ativo');
        section[cont].style.display = 'none';
        cont = e.classList[1];
        section[cont].style.display='block';
        nav[cont].firstElementChild.firstElementChild.classList.add('ativo');
        } else if (cont < 0 || cont > 8) {
            window.alert('Invalid slide');
            location.reload();
        }
    })
});

window.addEventListener('keydown', (e) =>{
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown'){
        if (cont > 0 && cont < 9){
        nav[cont].firstElementChild.firstElementChild.classList.remove('ativo');
        section[cont].style.display = 'none';
        cont--;
        section[cont].style.display='block';
        nav[cont].firstElementChild.firstElementChild.classList.add('ativo');
        } else if (cont === 0){
            cont = cont;
        } else if (cont < 0 || cont > 8) {
            window.alert('Invalid slide');
            location.reload();
        }
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp'){
        if (cont > -1 && cont < 7){
        nav[cont].firstElementChild.firstElementChild.classList.remove('ativo');
        section[cont].style.display = 'none';
        cont++;
        section[cont].style.display='block';
        nav[cont].firstElementChild.firstElementChild.classList.add('ativo');
        } else if (cont === 8){
            cont = cont;
        } else if (cont < 0 || cont > 8) {
            window.alert('Invalid slide');
            location.reload();
        }
    }

})

nav[cont].firstElementChild.firstElementChild.classList.add('ativo');
section[cont].style.display='block';
