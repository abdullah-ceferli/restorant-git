fetch("https://raw.githubusercontent.com/abdullah-ceferli/restorant-finnal-project-api/main/data.json")
    .then(response => response.json())
    .then(data => {
        const rightSideCardsFirstList = document.getElementsByClassName("right-side-cards-first-list")[0]
        const rightSideCardsSecondList = document.getElementsByClassName("right-side-cards-second-list")[0]
        const rightSideCardsThirdList = document.getElementsByClassName("right-side-cards-third-list")[0]

        let ShopCardsJsonData1 = Object.values(data[`all_Products_First_List`][0])
        let ShopCardsJsonData2 = Object.values(data[`all_Products_Second_List`][0])
        let ShopCardsJsonData3 = Object.values(data[`all_Products_Third_List`][0])

        const productCardsStartCount = Object.values(data[`count_All_Products`][0])


        ShopCardsJsonData1.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div id="${element.id}">
                    <div class="right-side-card-img">
                        <img src="${element.img}" alt="">
                    </div>
                    <img class="right-side-card-bag" src="../img/bag.png" alt="">
                    <div class="right-side-card-txt">
                        <p>${element.txt}</p>
                        <div>
                            <div class="right-side-card-stars">
                                <i class="${element.star_Css[0]}"></i>
                                <i class="${element.star_Css[1]}"></i>
                                <i class="${element.star_Css[2]}"></i>
                                <i class="${element.star_Css[3]}"></i>
                                <i class="${element.star_Css[4]}"></i>
                            </div>
                            <p>(${element.star})</p>
                        </div>
                        <p>${element.name}</p>
                    </div>
                    <div class="right-side-card-price">
                        <p>$${element.cost}</p>
                        <p>$${element.old_Cost}</p>
                    </div>
                </div>
            
            `
            cardDiv.classList.add("right-side-card")
            rightSideCardsFirstList.appendChild(cardDiv)
        })
        ShopCardsJsonData2.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
            <div id="${element.id}">
                <div class="right-side-card-img">
                    <img src="${element.img}" alt="">
                </div>
                <img class="right-side-card-bag" src="../img/bag.png" alt="">
                <div class="right-side-card-txt">
                    <p>${element.txt}</p>
                    <div>
                        <div class="right-side-card-stars">
                            <i class="${element.star_Css[0]}"></i>
                            <i class="${element.star_Css[1]}"></i>
                            <i class="${element.star_Css[2]}"></i>
                            <i class="${element.star_Css[3]}"></i>
                            <i class="${element.star_Css[4]}"></i>
                        </div>
                        <p>(${element.star})</p>
                    </div>
                    <p>${element.name}</p>
                </div>
                <div class="right-side-card-price">
                    <p>$${element.cost}</p>
                    <p>$${element.old_Cost}</p>
                </div>
            </div>
            `
            cardDiv.classList.add("right-side-card")
            rightSideCardsSecondList.appendChild(cardDiv)
        })
        ShopCardsJsonData3.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
            <div id="${element.id}">
                <div class="right-side-card-img">
                    <img src="${element.img}" alt="">
                </div>
                <img class="right-side-card-bag" src="../img/bag.png" alt="">
                <div class="right-side-card-txt">
                    <p>${element.txt}</p>
                    <div>
                        <div class="right-side-card-stars">
                            <i class="${element.star_Css[0]}"></i>
                            <i class="${element.star_Css[1]}"></i>
                            <i class="${element.star_Css[2]}"></i>
                            <i class="${element.star_Css[3]}"></i>
                            <i class="${element.star_Css[4]}"></i>
                        </div>
                        <p>(${element.star})</p>
                    </div>
                    <p>${element.name}</p>
                </div>
                <div class="right-side-card-price">
                    <p>$${element.cost}</p>
                    <p>$${element.old_Cost}</p>
                </div>
            </div>
            `
            cardDiv.classList.add("right-side-card")
            rightSideCardsThirdList.appendChild(cardDiv)
        })
        let globalCartData = 0

        function locationHref() {
            location.href = "./product.html"
        }

        function setItem() {
            localStorage.setItem('savingGlobalCartData', globalCartData)
        }

        function globalcartDataTaker() {
            ShopCardsJsonData1.forEach((element, index) => {
                let forLoopCount = index + 1
                let IteamCount = index + productCardsStartCount[0].start
                const carts = document.getElementById(`productsCartFirst${forLoopCount}`)
                if (carts) {
                    carts.addEventListener("click", function () {
                        locationHref()
                        globalCartData = IteamCount
                        setItem()
                    })
                }
            })


            ShopCardsJsonData2.forEach((element, index) => {
                let forLoopCount = index + 1
                let itemCount = index + productCardsStartCount[1].start
                const carts = document.getElementById(`productsCartSecond${forLoopCount}`)
                if (carts) {
                    carts.addEventListener("click", function () {
                        locationHref()
                        globalCartData = itemCount
                        setItem()
                    })
                }
            })


            ShopCardsJsonData3.forEach((element, index) => {
                let forLoopCount = index + 1
                let itemCount = index + productCardsStartCount[2].start
                const carts = document.getElementById(`productsCartThird${forLoopCount}`)
                if (carts) {
                    carts.addEventListener("click", function () {
                        locationHref()
                        globalCartData = itemCount
                        setItem()
                    })
                }
            })
        }
        globalcartDataTaker()
    })



function dropDownFunction() {
    const dropDown1 = document.getElementById("dropDown1")
    const dropDown2 = document.getElementById("dropDown2")
    const dropDown3 = document.getElementById("dropDown3")
    const dropDown4 = document.getElementById("dropDown4")
    const dropDown5 = document.getElementById("dropDown5")
    const dropDown6 = document.getElementById("dropDown6")
    const dropDownList1 = document.getElementById("dropDownList1")
    const dropDownList2 = document.getElementById("dropDownList2")
    const dropDownList3 = document.getElementById("dropDownList3")
    const dropDownList4 = document.getElementById("dropDownList4")
    const dropDownList5 = document.getElementById("dropDownList5")
    const dropDownList6 = document.getElementById("dropDownList6")
    let dropDownLooker1 = true
    let dropDownLooker2 = true
    let dropDownLooker3 = true
    let dropDownLooker4 = true
    let dropDownLooker5 = true
    let dropDownLooker6 = true
    dropDown1.addEventListener("click", function () {
        if (dropDownLooker1) {
            dropDownList1.style.display = "flex"
            dropDownLooker1 = false
            dropDown1.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList1.style.display = "none"
            dropDownLooker1 = true
            dropDown1.style.transform = "rotate(0deg)"
        }
    })
    dropDown2.addEventListener("click", function () {
        if (dropDownLooker2) {
            dropDownList2.style.display = "flex"
            dropDownLooker2 = false
            dropDown2.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList2.style.display = "none"
            dropDownLooker2 = true
            dropDown2.style.transform = "rotate(0deg)"
        }
    })
    dropDown3.addEventListener("click", function () {
        if (dropDownLooker3) {
            dropDownList3.style.display = "flex"
            dropDownLooker3 = false
            dropDown3.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList3.style.display = "none"
            dropDownLooker3 = true
            dropDown3.style.transform = "rotate(0deg)"
        }
    })
    dropDown4.addEventListener("click", function () {
        if (dropDownLooker4) {
            dropDownList4.style.display = "flex"
            dropDownLooker4 = false
            dropDown4.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList4.style.display = "none"
            dropDownLooker4 = true
            dropDown4.style.transform = "rotate(0deg)"
        }
    })
    dropDown5.addEventListener("click", function () {
        if (dropDownLooker5) {
            dropDownList5.style.display = "flex"
            dropDownLooker5 = false
            dropDown5.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList5.style.display = "none"
            dropDownLooker5 = true
            dropDown5.style.transform = "rotate(0deg)"
        }
    })
    dropDown6.addEventListener("click", function () {
        if (dropDownLooker6) {
            dropDownList6.style.display = "flex"
            dropDownLooker6 = false
            dropDown6.style.transform = "rotate(180deg)"
        }
        else {
            dropDownList6.style.display = "none"
            dropDownLooker6 = true
            dropDown6.style.transform = "rotate(0deg)"
        }
    })
}
dropDownFunction()

function listerBtnFunction() {
    const listerBtn1 = document.getElementById("listerBtn1")
    const listerBtn2 = document.getElementById("listerBtn2")
    const listerBtn3 = document.getElementById("listerBtn3")
    const listerBtnNext = document.getElementById("listerBtnNext")
    const rightSideCardsFirstList = document.getElementsByClassName("right-side-cards-first-list")[0]
    const rightSideCardsSecondList = document.getElementsByClassName("right-side-cards-second-list")[0]
    const rightSideCardsThirdList = document.getElementsByClassName("right-side-cards-third-list")[0]
    let count = 1
    listerBtn1.addEventListener("click", function () {
        rightSideCardsFirstList.style.display = "flex"
        rightSideCardsSecondList.style.display = "none"
        rightSideCardsThirdList.style.display = "none"
        listerBtn1.style.backgroundColor = "#F53E32"
        listerBtn1.style.color = "white"
        listerBtn2.style.backgroundColor = "white"
        listerBtn2.style.color = "black"
        listerBtn3.style.backgroundColor = "white"
        listerBtn3.style.color = "black"
        count = 1
    })
    listerBtn2.addEventListener("click", function () {
        rightSideCardsFirstList.style.display = "none"
        rightSideCardsSecondList.style.display = "flex"
        rightSideCardsThirdList.style.display = "none"
        listerBtn1.style.backgroundColor = "white"
        listerBtn1.style.color = "black"
        listerBtn2.style.backgroundColor = "#F53E32"
        listerBtn2.style.color = "white"
        listerBtn3.style.backgroundColor = "white"
        listerBtn3.style.color = "black"
        count = 2
    })
    listerBtn3.addEventListener("click", function () {
        rightSideCardsFirstList.style.display = "none"
        rightSideCardsSecondList.style.display = "none"
        rightSideCardsThirdList.style.display = "flex"
        listerBtn1.style.backgroundColor = "white"
        listerBtn1.style.color = "black"
        listerBtn2.style.backgroundColor = "white"
        listerBtn2.style.color = "black"
        listerBtn3.style.backgroundColor = "#F53E32"
        listerBtn3.style.color = "white"
        count = 3
    })
    listerBtnNext.addEventListener("click", function () {
        switch (count) {
            case 1:
                rightSideCardsFirstList.style.display = "none"
                rightSideCardsSecondList.style.display = "flex"
                rightSideCardsThirdList.style.display = "none"
                listerBtn1.style.backgroundColor = "white"
                listerBtn1.style.color = "black"
                listerBtn2.style.backgroundColor = "#F53E32"
                listerBtn2.style.color = "white"
                listerBtn3.style.backgroundColor = "white"
                listerBtn3.style.color = "black"
                count = 2
                break;
            case 2:
                rightSideCardsFirstList.style.display = "none"
                rightSideCardsSecondList.style.display = "none"
                rightSideCardsThirdList.style.display = "flex"
                listerBtn1.style.backgroundColor = "white"
                listerBtn1.style.color = "black"
                listerBtn2.style.backgroundColor = "white"
                listerBtn2.style.color = "black"
                listerBtn3.style.backgroundColor = "#F53E32"
                listerBtn3.style.color = "white"
                count = 3
                break;
            case 3:
                rightSideCardsFirstList.style.display = "flex"
                rightSideCardsSecondList.style.display = "none"
                rightSideCardsThirdList.style.display = "none"
                listerBtn1.style.backgroundColor = "#F53E32"
                listerBtn1.style.color = "white"
                listerBtn2.style.backgroundColor = "white"
                listerBtn2.style.color = "black"
                listerBtn3.style.backgroundColor = "white"
                listerBtn3.style.color = "black"
                count = 1
                break;
        }
    })
}
listerBtnFunction()


const dropDownButtonRightSide = document.getElementById("dropDownButtonRightSide")
const dropDownRightSide = document.getElementById("dropDownRightSide")
const dropTxtRightSide = document.getElementById("dropTxtRightSide")
let dropDownBoolean = true

dropDownButtonRightSide.addEventListener("click", function () {
    if (dropDownBoolean) {
        dropDownRightSide.style.transform = "rotate(180deg)"
        dropTxtRightSide.style.display = "flex"
        dropDownBoolean = false
    }
    else {
        dropDownRightSide.style.transform = "rotate(0deg)"
        dropTxtRightSide.style.display = "none"
        dropDownBoolean = true
    }
})


const topRightSideFilter = document.getElementById("topRightSideFilter")
const sideBar = document.getElementById("sideBar")

topRightSideFilter.addEventListener("click", function () {
    topRightSideFilter.style.display = "none"
    sideBar.style.display = "flex"
})


const rangeInput = document.getElementById("rangeInput")
const rangeInputTxt = document.getElementById("rangeInputTxt")

rangeInput.addEventListener("input", function () {
    let rangeInputValue = rangeInput.value

    switch (rangeInputValue) {
        case "25":
            rangeInputTxt.innerHTML = "Price: <span>$20 - $75</span>";
            break;
        case "50":
            rangeInputTxt.innerHTML = "Price: <span>$75 - $150</span>";
            break;
        case "75":
            rangeInputTxt.innerHTML = "Price: <span>$150 - $200</span>";
            break;
        case "100":
            rangeInputTxt.innerHTML = "Price: <span>$200 - $250</span>";
            break;
        case "125":
            rangeInputTxt.innerHTML = "Price: <span>$250+</span>";
            break;
        default:
            rangeInputTxt.innerHTML = "Price: <span>$20 - $250</span>";
            break;
    }
})


function searchInput() {
    const searchInput = document.getElementById("searchInput")
    const searchBtn = document.getElementById("searchBtn")

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            searchInput.value = " "
            location.href = "./shop.html"
        }
    })
    searchBtn.addEventListener("click", function () {
        if (searchInput.value != "") {
            location.href = "./shop.html"
        }
        else {
            console.log("Can you write into input")
        }
    })

}
searchInput()