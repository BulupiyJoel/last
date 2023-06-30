let menuToogle = document.querySelector('.toogle');
let navigation = document.querySelector('.navigation')
menuToogle.onclick = function(){
    menuToogle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//ajouter une classe active dans la liste deselection item
let list = document.querySelectorAll('.list');
for (let i = 0; i<list.length; i++) {
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}