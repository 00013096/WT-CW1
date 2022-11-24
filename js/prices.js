const infoList = document.querySelectorAll(".info>div>ul>li");
const navBar = document.querySelectorAll(".nav-bar>li");
const priceText = document.querySelector(".info>div>p");
const infoImg = document.querySelector(".info>div.img");

navBar[0].style = "background-color: rgb(54,52,53); color: white;";
infoList[0].innerHTML = "Group 13 (±1) Students";
infoList[1].innerHTML = "2 books (Students book and Home book)";
infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
infoList[3].innerHTML = "Service Academic Support";
infoList[4].innerHTML = "Video Arsenal for each lesson";
infoList[5].innerHTML = "Speaking Club and Master class";

console.log(infoImg)

const changeInfo = text => {
    if (text == navBar[0].innerHTML) {
        priceText.style = "visibility: visible";
        infoList[4].style = "margin-bottom: 1.5rem";
        infoList[5].style = "visibility: visible";
        infoImg.style = "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-1.jpg.webp')";
        infoList[0].innerHTML = "Group 13 (±1) Students";
        infoList[1].innerHTML = "2 books (Students book and Home book)";
        infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
        infoList[3].innerHTML = "Service Academic Support";
        infoList[4].innerHTML = "Video Arsenal for each lesson";
        infoList[5].innerHTML = "Speaking Club and Master class";
    } else if (text == navBar[1].innerHTML) {
        priceText.style = "visibility: visible";
        infoList[4].style = "margin-bottom: 1.5rem";
        infoList[5].style = "visibility: visible";
        infoImg.style = "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-2.jpg.webp')";
        infoList[0].innerHTML = "Group 13 (±1) Students";
        infoList[1].innerHTML = "4 books (Writing, Reading, Listening and Speaking, Vocabulary)";
        infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
        infoList[3].innerHTML = "Service Academic Support";
        infoList[4].innerHTML = "Video Arsenal for each lesson";
        infoList[5].innerHTML = "Mock IELTS every week";
    } else {
        infoImg.style = "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-3.jpg.webp')";
        infoList[0].innerHTML = "The number of employees is unlimited";
        infoList[1].innerHTML = "2 books (Students book and Home book)";
        infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
        infoList[3].innerHTML = "Service Academic Support";
        infoList[4].innerHTML = "The teacher comes to you with all the devices";
        infoList[4].style = "margin-bottom: 0";
        infoList[5].style = "display: none";
        priceText.style = "visibility: hidden";
    }
};

const removingBackground = () => {
    navBar.forEach(item => {
        item.style = "background-color: rgb(226, 226, 226)";
    });
};

navBar.forEach(item => {
    item.addEventListener('click', () => {
        removingBackground();
        item.style = "background-color: rgb(54,52,53); color: white;";
        changeInfo(item.innerHTML);
    });
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