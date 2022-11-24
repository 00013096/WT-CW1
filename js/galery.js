const reviews = document.querySelectorAll(".reviews>div");
const directionsList = document.querySelectorAll(".directions>li");
directionsList[0].setAttribute('class', 'chosen');

let currentBranchNumber = 1;

directionsList.forEach(item => {
    item.addEventListener('click', () => {
        refreshingDirectionItemStyle();
        currentBranchNumber = item.innerHTML
        closingReviews();
        reviews[currentBranchNumber - 1].removeAttribute('class');
        changingDirectionItemStyle(item.innerHTML);
    });
});

const closingReviews = () => {
    reviews.forEach(item => {
        if (item.getAttribute('class') == null) {
            item.setAttribute('class', 'hidden');
            return;
        }
    });
};

const changingDirectionItemStyle = number => {
    directionsList[number - 1].style = "width: 20px; background-color: #ffcf00";
}

const refreshingDirectionItemStyle = () => {
    directionsList.forEach(item => {
        item.style = "width: 10px; background-color: #d6d6d6";
    });
}

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