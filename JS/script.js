
// mostra o menu hamburguer quando clicado e e configura o sub-menu para se adaptar
function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    let subMenu = document.querySelector('.sub-menu')

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        subMenu.classList.remove('top220px');
    }else{
        menuMobile.classList.add('open');
        subMenu.classList.add('top220px');
    }
    console.log(menuMobile)
    console.log(subMenu)
}

// pega as informações do select pelo seu ID
const Select = document.querySelector('#locais')
// pega as informações do span pelo seu ID
const showLocal = document.querySelector('#show-local')

// muda os locais no span quando são selecionados no select

Select.addEventListener('click',() => {
    const indice = Select.selectedIndex 
    const text = Select.options[indice].text

    if(text == 'SP'){
      showLocal.innerHTML = '<h4><i class="fa-solid fa-location-dot"></i>  R. Tau, Jd. Tau - São Paulo - SP </h4> <h4> <i class="fa-solid fa-phone"></i>  11 xxxxx-xxxx</h4>'
    }else if(text == 'RJ'){
     showLocal.innerHTML = '<h4><i class="fa-solid fa-location-dot"></i>  R. Tau, Jd. Tau - Rio de Janeiro - RJ  </h4> <h4>  <i class="fa-solid fa-phone"></i>  21 xxxxx-xxxx</h4>'  
    }else if(text == 'PE'){
     showLocal.innerHTML = '<h4><i class="fa-solid fa-location-dot"></i>  R. Tau, Jd. Tau - Caruaru - PE  </h4> <h4> <i class="fa-solid fa-phone"></i>  81 xxxxx-xxxx</h4>'   
    }

})

