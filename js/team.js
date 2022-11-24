const leftT = document.getElementById("leftT");
const rightT = document.getElementById("rightT");
const teacherItem = document.querySelectorAll(".list-of-teachers>li");

rightT.addEventListener('click', () => {
    if (teacherItem[teacherItem.length - 1].getAttribute('class') == 'hidden') {
        let firstVisibleItem = 0;
        for (let i = 0; i < teacherItem.length; i++) {
            if (teacherItem[i].getAttribute('class') == 'visible') {
                firstVisibleItem = i;
                break;
            }
        }
        teacherItem[firstVisibleItem + 4].setAttribute('class', 'visible');
        teacherItem[firstVisibleItem].setAttribute('class', 'hidden');
        if (firstVisibleItem + 4 == teacherItem.length - 1) {
            rightT.setAttribute('class', 'disabled');
        }
        leftT.setAttribute('class', 'enabled');
    }
});

leftT.addEventListener('click', () => {
    if (teacherItem[0].getAttribute('class') == 'hidden') {
        let lastVisibleItem = 0;
        for (let i = 0; i < teacherItem.length; i++) {
            if (teacherItem[i].getAttribute('class') == 'visible') {
                lastVisibleItem = i;
            }
        }
        teacherItem[lastVisibleItem - 4].setAttribute('class', 'visible');
        teacherItem[lastVisibleItem].setAttribute('class', 'hidden');
        if (lastVisibleItem - 4 == 0) {
            leftT.setAttribute('class', 'disabled');
        }
        rightT.setAttribute('class', 'enabled');
    }
});

const teacherImgBack = document.querySelectorAll(".list-of-teachers>li>div");
const teacherImg = document.querySelector(".list-of-teachers>li>div>img");

teacherImgBack.forEach(item => {
    item.style.height = (teacherImg.clientHeight - 40) + "px";
});

const branchesList = document.querySelectorAll("ul.branches>li");
const map = document.getElementById("map");

branchesList.forEach(item => {
    item.addEventListener('click', () => {
        branchesList.forEach(item => {
            item.removeAttribute('class');
        });
        item.setAttribute('class', 'selected');
        changingMap(item.innerHTML);
    });
});

const changingMap = text => {
    if (text == branchesList[0].innerHTML) {
        map.style.setProperty("background-image", "url(../images/drujba.png)")
    } else if (text == branchesList[1].innerHTML) {
        map.style.setProperty("background-image", "url(../images/c1.png)")
    } else if (text == branchesList[2].innerHTML) {
        map.style.setProperty("background-image", "url(../images/c2.png)")
    } else if (text == branchesList[3].innerHTML) {
        map.style.setProperty("background-image", "url(../images/sergeli.png)")
    } else if (text == branchesList[4].innerHTML) {
        map.style.setProperty("background-image", "url(../images/chilonzor.png)")
    } else if (text == branchesList[5].innerHTML) {
        map.style.setProperty("background-image", "url(../images/oybek.png)")
    } else if (text == branchesList[6].innerHTML) {
        map.style.setProperty("background-image", "url(../images/yunusobod.png)")
    } else if (text == branchesList[7].innerHTML) {
        map.style.setProperty("background-image", "url(../images/westminster.png)")
    }
}