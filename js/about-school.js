const listItem1 = document.getElementById("first");
const listItem2 = document.getElementById("second");
const listItem4 = document.getElementById("fourth");
const listItem5 = document.getElementById("fifth");

listItem4.setAttribute('class', 'hidden');
listItem5.setAttribute('class', 'hidden');

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener('click', () => {
    if (listItem1.getAttribute('class') == 'hidden') {
        listItem4.setAttribute('class', 'hidden');
        listItem5.setAttribute('class', 'hidden');
        listItem1.removeAttribute('class');
        listItem2.setAttribute('class', 'margin');
        leftBtn.setAttribute('class', 'disabled');
        rightBtn.setAttribute('class', 'enabled');
    }
});

rightBtn.addEventListener('click', () => {
    if (listItem4.getAttribute('class') == 'hidden') {
        listItem1.setAttribute('class', 'hidden');
        listItem2.setAttribute('class', 'hidden');
        listItem4.setAttribute('class', 'margin');
        listItem5.removeAttribute('class');
        rightBtn.setAttribute('class', 'disabled');
        leftBtn.setAttribute('class', 'enabled');
    }
});

const branchesList = document.querySelectorAll("ul.branches>li");
const map = document.getElementById("map");

branchesList.forEach(item => {
    item.addEventListener('click', () => {
        branchesList.forEach(item => {
            item.removeAttribute('class');
        });
        item.setAttribute('class', 'selected');
        changingMap(item.innerHTML)
    });
});

const changingMap = text => {
    if (text == branchesList[0].innerHTML){
        map.style.setProperty("background-image", "url(../images/drujba.png)")
    }else if (text == branchesList[1].innerHTML){
        map.style.setProperty("background-image", "url(../images/c1.png)")
    }else if (text == branchesList[2].innerHTML){
        map.style.setProperty("background-image", "url(../images/c2.png)")
    }else if (text == branchesList[3].innerHTML){
        map.style.setProperty("background-image", "url(../images/sergeli.png)")
    }else if (text == branchesList[4].innerHTML){
        map.style.setProperty("background-image", "url(../images/chilonzor.png)")
    }else if (text == branchesList[5].innerHTML){
        map.style.setProperty("background-image", "url(../images/oybek.png)")
    }else if (text == branchesList[6].innerHTML){
        map.style.setProperty("background-image", "url(../images/yunusobod.png)")
    }else if (text == branchesList[7].innerHTML){
        map.style.setProperty("background-image", "url(../images/westminster.png)")
    }
}