const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const branchImg = document.querySelector("div.img");
const locationStreet = document.querySelector(".location>div>h3");
const locationInfo = document.querySelector(".location>div>p");
const branchCount = document.querySelector(".branch-container>h1");
const list = [
    [
        "Islom Karimov str., 8/1",
        "Drujba Narodov, former. 'UzBowling'",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/Drujba-converted.jpg"
    ],
    [
        "Amir Temur str., 86",
        "Former Kazakstan cinema or Minor metro station",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/Yunusabad-converted.jpg"
    ],
    [
        "Shakhrisabz str., 1",
        "TBC Bank of Uzbekistan, former Tommy Hilfiger shop",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/C2-convertedv1.jpg"
    ],
    [
        "Istiqbol str., 14",
        "Westminster University, Uzneftgaz",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/west-converted.jpg"
    ],
    [
        "Afrasiyab str., 16",
        'Former "Angel`s food" (metro OYBEK)',
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/Oybek-converted.jpg"
    ],
    [
        "Shakhrisabz str., 1",
        "Former 'Detskiy Mir'",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/C1-converted.jpg"
    ],
    [
        "Bunyodkor str., 52/2",
        "KFC(Metro Chilanzar)",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/Chilonzor-converted.jpg.webp"
    ],
    [
        "Yangi Sergeli str., 21B",
        "In front of 'Criminal Court of the Sergeli District', 'Credit Asia Technics'",
        "https://web.inter-nation.uz/wp-content/uploads/2022/09/Sergeli-converted.jpg"
    ],
];

let currentBranchNumber = 1;

leftBtn.addEventListener('click', () => {
    if (currentBranchNumber != 1) {
        currentBranchNumber--;
        branchImg.style = "background-image: url(" + list[currentBranchNumber - 1][2] + ")";
        locationStreet.innerHTML = list[currentBranchNumber - 1][0];
        locationInfo.innerHTML = list[currentBranchNumber - 1][1];
        branchCount.innerHTML = currentBranchNumber;
        refreshingDirectionItemStyle();
        changingDirectionItemStyle(currentBranchNumber)
    } else {
        currentBranchNumber = 8;
        branchImg.style = "background-image: url(" + list[list.length - 1][2] + ")";
        locationStreet.innerHTML = list[list.length - 1][0];
        locationInfo.innerHTML = list[list.length - 1][1];
        branchCount.innerHTML = currentBranchNumber;
        refreshingDirectionItemStyle();
        changingDirectionItemStyle(currentBranchNumber)
    }
});

rightBtn.addEventListener('click', () => {
    if (currentBranchNumber != list.length) {
        currentBranchNumber++;
        branchImg.style = "background-image: url(" + list[currentBranchNumber - 1][2] + ")";
        locationStreet.innerHTML = list[currentBranchNumber - 1][0];
        locationInfo.innerHTML = list[currentBranchNumber - 1][1];
        branchCount.innerHTML = currentBranchNumber;
        refreshingDirectionItemStyle();
        changingDirectionItemStyle(currentBranchNumber)
    } else {
        currentBranchNumber = 1;
        branchImg.style = "background-image: url(" + list[0][2] + ")";
        locationStreet.innerHTML = list[0][0];
        locationInfo.innerHTML = list[0][1];
        branchCount.innerHTML = currentBranchNumber;
        refreshingDirectionItemStyle();
        changingDirectionItemStyle(currentBranchNumber)
    }
});

const directionsList = document.querySelectorAll(".directions>li");
directionsList[0].setAttribute('class', 'chosen');

directionsList.forEach(item => {
    item.addEventListener('click', () => {
        refreshingDirectionItemStyle();
        currentBranchNumber = item.innerHTML
        locationStreet.innerHTML = list[currentBranchNumber - 1][0];
        locationInfo.innerHTML = list[currentBranchNumber - 1][1];
        branchCount.innerHTML = currentBranchNumber;
        changingDirectionItemStyle(item.innerHTML);
    });
});

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