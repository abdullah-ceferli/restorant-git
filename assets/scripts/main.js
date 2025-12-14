fetch("https://raw.githubusercontent.com/abdullah-ceferli/restorant-finnal-project-api/main/data.json")
    .then(response => response.json())
    .then(data => {
        let cardsCustomerFavJsonData = Object.values(data[`cards_customer_fav`][0])
        let featuredCardsJsonData = data[`featured_Cards`][0]
        let popularCardsJsonData = data[`popular_Cards`][0]
        let newAddedCardsJsonData = data[`new_Added_Cards`][0]
        let specialDishesCardsJsonData = Object.values(data[`special_Dishes_Cards`][0])
        let dealsDayCardsJsonData = Object.values(data[`deals_Day_Cards`][0])

        function featuredCardsFunction() {
            const featuredCards1H3 = featuredSectionCard1.querySelector("h3")
            featuredCards1H3.innerHTML = featuredCardsJsonData.featured_Cards1.name
            const featuredCards2H3 = featuredSectionCard2.querySelector("h3")
            featuredCards2H3.innerHTML = featuredCardsJsonData.featured_Cards2.name
            const featuredCards3H3 = featuredSectionCard3.querySelector("h3")
            featuredCards3H3.innerHTML = featuredCardsJsonData.featured_Cards3.name

            const featuredCards1Img = featuredSectionCard1.querySelector("img")
            featuredCards1Img.src = featuredCardsJsonData.featured_Cards1.img
            const featuredCards2Img = featuredSectionCard2.querySelector("img")
            featuredCards2Img.src = featuredCardsJsonData.featured_Cards2.img
            const featuredCards3Img = featuredSectionCard3.querySelector("img")
            featuredCards3Img.src = featuredCardsJsonData.featured_Cards3.img

            const featuredCards1Sale = featuredSectionCard1.querySelector("p")
            featuredCards1Sale.innerHTML = featuredCardsJsonData.featured_Cards1.sale
            const featuredCards2Sale = featuredSectionCard2.querySelector("p")
            featuredCards2Sale.innerHTML = featuredCardsJsonData.featured_Cards2.sale
            const featuredCards3Sale = featuredSectionCard3.querySelector("p")
            featuredCards3Sale.innerHTML = featuredCardsJsonData.featured_Cards3.sale
        }
        featuredCardsFunction()

        function popularCardsFunction() {
            const popularCards1H3 = popularSectionCart1.querySelector("h3")
            popularCards1H3.innerHTML = popularCardsJsonData.popular_Cards1.name
            const popularCards2H3 = popularSectionCart2.querySelector("h3")
            popularCards2H3.innerHTML = popularCardsJsonData.popular_Cards2.name
            const popularCards3H3 = popularSectionCart3.querySelector("h3")
            popularCards3H3.innerHTML = popularCardsJsonData.popular_Cards3.name

            const popularCards1Img = popularSectionCart1.querySelector("img")
            popularCards1Img.src = popularCardsJsonData.popular_Cards1.img
            const popularCards2Img = popularSectionCart2.querySelector("img")
            popularCards2Img.src = popularCardsJsonData.popular_Cards2.img
            const popularCards3Img = popularSectionCart3.querySelector("img")
            popularCards3Img.src = popularCardsJsonData.popular_Cards3.img

            const popularCards1Sale = popularSectionCart1.querySelector("p")
            popularCards1Sale.innerHTML = popularCardsJsonData.popular_Cards1.sale
            const popularCards2Sale = popularSectionCart2.querySelector("p")
            popularCards2Sale.innerHTML = popularCardsJsonData.popular_Cards2.sale
            const popularCards3Sale = popularSectionCart3.querySelector("p")
            popularCards3Sale.innerHTML = popularCardsJsonData.popular_Cards3.sale
        }
        popularCardsFunction()

        function newAddedCardsFunction() {
            const newAddedCards1H3 = newAddedSectionCart1.querySelector("h3")
            newAddedCards1H3.innerHTML = newAddedCardsJsonData.new_Added_Cards1.name
            const newAddedCards2H3 = newAddedSectionCart2.querySelector("h3")
            newAddedCards2H3.innerHTML = newAddedCardsJsonData.new_Added_Cards2.name
            const newAddedCards3H3 = newAddedSectionCart3.querySelector("h3")
            newAddedCards3H3.innerHTML = newAddedCardsJsonData.new_Added_Cards3.name

            const newAddedCards1Img = newAddedSectionCart1.querySelector("img")
            newAddedCards1Img.src = newAddedCardsJsonData.new_Added_Cards1.img
            const newAddedCards2Img = newAddedSectionCart2.querySelector("img")
            newAddedCards2Img.src = newAddedCardsJsonData.new_Added_Cards2.img
            const newAddedCards3Img = newAddedSectionCart3.querySelector("img")
            newAddedCards3Img.src = newAddedCardsJsonData.new_Added_Cards3.img

            const newAddedCards1Sale = newAddedSectionCart1.querySelector("p")
            newAddedCards1Sale.innerHTML = newAddedCardsJsonData.new_Added_Cards1.sale
            const newAddedCards2Sale = newAddedSectionCart2.querySelector("p")
            newAddedCards2Sale.innerHTML = newAddedCardsJsonData.new_Added_Cards2.sale
            const newAddedCards3Sale = newAddedSectionCart3.querySelector("p")
            newAddedCards3Sale.innerHTML = newAddedCardsJsonData.new_Added_Cards3.sale
        }
        newAddedCardsFunction()

        cardsCustomerFavJsonData.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
            <img src="${element.img}" alt="${element.name}" />
            <h4>${element.name}</h4>
            <p>${element.item}</p>`
            cardsCustomerFav.appendChild(cardDiv)
        })
        specialDishesCardsJsonData.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div class="special-dishes-card">
                    <div class="love-special-dishes-card">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class = "img-special-dishes-card">
                        <img src="${element.img}" alt="${element.name}" />
                    </div>
                    <div class="txt-special-dishes-card">
                        <h3>${element.name}</h3>
                        <p>${element.item}</p>
                    </div>
                </div>`
            specialDishesCard.appendChild(cardDiv)
        })
        dealsDayCardsJsonData.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div class="deals-day-card">
                    <img style="height: 300px; width: 390px;" src="${element.img}" alt="">
                    <div class="deals-day-card-txt">
                        <h3>${element.txt}</h3>
                        <div class="deals-day-card-star">
                            <i class="fa-solid fa-star"></i>
                            <p style="color: gray;">${element.stars}</p>
                        </div>
                        <p>By <span style="color: #3BB77E;">X${element.by}</span></p>
                        <div class="deals-day-card-cost">
                            <div>
                                <p>$${element.cost}</p>
                                <p>$${element.old_cost}</p>
                            </div>
                            <button id="${element.id}" class="deals-day-card-cost-btn">
                                <i class="deals-day-card-cost-arrow fa-solid fa-arrow-down"></i>
                                <img class="deals-day-card-cost-cart" src="./assets/img/cart.png" alt="" />
                                <p class="deals-day-card-cost-txt">Add</p>
                            </button>
                        </div>
                    </div>
                </div>`
            dealsDayCards.appendChild(cardDiv)
        })


        function cartAdderFunction() {
            const dealsDayCardCostBtn1 = document.getElementById("dealsDayCard1")
            const dealsDayCardCostBtn2 = document.getElementById("dealsDayCard2")
            const dealsDayCardCostBtn3 = document.getElementById("dealsDayCard3")
            const featuredCardsBtn1 = document.getElementById("featuredCardsBtn1")
            const featuredCardsBtn2 = document.getElementById("featuredCardsBtn2")
            const featuredCardsBtn3 = document.getElementById("featuredCardsBtn3")
            const popularCardsBtn1 = document.getElementById("popularCardsBtn1")
            const popularCardsBtn2 = document.getElementById("popularCardsBtn2")
            const popularCardsBtn3 = document.getElementById("popularCardsBtn3")
            const newAddedCardsBtn1 = document.getElementById("newAddedCardsBtn1")
            const newAddedCardsBtn2 = document.getElementById("newAddedCardsBtn2")
            const newAddedCardsBtn3 = document.getElementById("newAddedCardsBtn3")
            let globalCartCount1 = 0
            let globalCartCount2 = 0
            let globalCartCount3 = 0
            let globalCartCount4 = 0
            let globalCartCount5 = 0
            let globalCartCount6 = 0
            let globalCartCount7 = 0
            let globalCartCount8 = 0
            let globalCartCount9 = 0
            let globalCartCount10 = 0
            let globalCartCount11= 0
            let globalCartCount12 = 0

            featuredCardsBtn1.addEventListener("click", function () {
                globalCartCount1 = 1
                localStorage.setItem('savingGlobalCartCount1', globalCartCount1)
            })
            featuredCardsBtn2.addEventListener("click", function () {
                globalCartCount2 = 2
                localStorage.setItem('savingGlobalCartCount2', globalCartCount2)
            })
            featuredCardsBtn3.addEventListener("click", function () {
                globalCartCount3 = 3
                localStorage.setItem('savingGlobalCartCount3', globalCartCount3)
            })
            popularCardsBtn1.addEventListener("click", function () {
                globalCartCount4 = 4
                localStorage.setItem('savingGlobalCartCount4', globalCartCount4)
            })
            popularCardsBtn2.addEventListener("click", function () {
                globalCartCount5 = 5
                localStorage.setItem('savingGlobalCartCount5', globalCartCount5)
            })
            popularCardsBtn3.addEventListener("click", function () {
                globalCartCount6 = 6
                localStorage.setItem('savingGlobalCartCount6', globalCartCount6)
            })
            newAddedCardsBtn1.addEventListener("click", function () {
                globalCartCount7 = 7
                localStorage.setItem('savingGlobalCartCount7', globalCartCount7)
            })
            newAddedCardsBtn2.addEventListener("click", function () {
                globalCartCount8 = 8
                localStorage.setItem('savingGlobalCartCount8', globalCartCount8)
            })
            newAddedCardsBtn3.addEventListener("click", function () {
                globalCartCount9 = 9
                localStorage.setItem('savingGlobalCartCount9', globalCartCount9)
            })
            dealsDayCardCostBtn1.addEventListener("click", function () {
                globalCartCount10 = 10
                localStorage.setItem('savingGlobalCartCount10', globalCartCount10)
            })
            dealsDayCardCostBtn2.addEventListener("click", function () {
                globalCartCount11 = 11
                localStorage.setItem('savingGlobalCartCount11', globalCartCount11)
            })
            dealsDayCardCostBtn3.addEventListener("click", function () {
                globalCartCount12 = 12
                localStorage.setItem('savingGlobalCartCount12', globalCartCount12)
            })
            // MUHAHHAHAAH YOU WILL NEVER KNOW WHAT I WRITE HERE
        }

        cartAdderFunction()
    })


const changerDailyTxt1 = document.getElementById("changerDailyTxt1")
const changerDailyTxt2 = document.getElementById("changerDailyTxt2")
const changerDailyTxt3 = document.getElementById("changerDailyTxt3")
const featuredSectionDailyCards = document.getElementById("featuredSectionDailyCards")
const popularSectionDailyCards = document.getElementById("popularSectionDailyCards")
const newAddedSectionDailyCards = document.getElementById("newAddedSectionDailyCards")
const cardsCustomerFav = document.getElementById("cardsCustomerFav")
const specialDishesCard = document.getElementsByClassName("special-dishes-cards")[0]
const dealsDayCards = document.getElementsByClassName("deals-day-cards")[0]
let count = 1

changerDailyTxt2.addEventListener("click", function () {
    changerDailyTxt2.style.color = "#3BB77E"
    changerDailyTxt1.style.color = "black"
    changerDailyTxt3.style.color = "black"
    featuredSectionDailyCards.style.display = "none"
    popularSectionDailyCards.style.display = "block"
    popularSectionDailyCards.style.display = "grid"
    newAddedSectionDailyCards.style.display = "none"
    count = 1
    setTimeout(function () {
        startRotation()
    }, 3000)
})
changerDailyTxt1.addEventListener("click", function () {
    changerDailyTxt2.style.color = "black"
    changerDailyTxt1.style.color = "#3BB77E"
    changerDailyTxt3.style.color = "black"
    featuredSectionDailyCards.style.display = "block"
    popularSectionDailyCards.style.display = "none"
    newAddedSectionDailyCards.style.display = "none"
    featuredSectionDailyCards.style.display = "grid"
    count = 1
    setTimeout(function () {
        startRotation()
    }, 3000)
})
changerDailyTxt3.addEventListener("click", function () {
    changerDailyTxt2.style.color = "black"
    changerDailyTxt1.style.color = "black"
    changerDailyTxt3.style.color = "#3BB77E"
    featuredSectionDailyCards.style.display = "none"
    popularSectionDailyCards.style.display = "none"
    newAddedSectionDailyCards.style.display = "block"
    newAddedSectionDailyCards.style.display = "grid"
    count = 1
    setTimeout(function () {
        startRotation()
    }, 3000)
})

const arrowLeftDailySells = document.getElementById("arrowLeftDailySells")
const arrowRightDailySells = document.getElementById("arrowRightDailySells")
const featuredSectionCard1 = document.getElementById("featuredSectionCard1")
const featuredSectionCard2 = document.getElementById("featuredSectionCard2")
const featuredSectionCard3 = document.getElementById("featuredSectionCard3")
const popularSectionCart1 = document.getElementById("popularSectionCart1")
const popularSectionCart2 = document.getElementById("popularSectionCart2")
const popularSectionCart3 = document.getElementById("popularSectionCart3")
const newAddedSectionCart1 = document.getElementById("newAddedSectionCart1")
const newAddedSectionCart2 = document.getElementById("newAddedSectionCart2")
const newAddedSectionCart3 = document.getElementById("newAddedSectionCart3")
let autoInterval

function cardPositions() {
    switch (count) {
        case 1:
            featuredSectionCard1.style.gridColumn = "1"
            popularSectionCart1.style.gridColumn = "1"
            newAddedSectionCart1.style.gridColumn = "1"
            featuredSectionCard3.style.gridColumn = "3"
            popularSectionCart3.style.gridColumn = "3"
            newAddedSectionCart3.style.gridColumn = "3"
            featuredSectionCard2.style.gridColumn = "2"
            newAddedSectionCart2.style.gridColumn = "2"
            popularSectionCart2.style.gridColumn = "2"
            break;
        case 2:
            featuredSectionCard1.style.gridColumn = "3"
            featuredSectionCard1.style.gridRow = "1"
            featuredSectionCard3.style.gridColumn = "2"
            featuredSectionCard3.style.gridRow = "1"
            featuredSectionCard2.style.gridColumn = "1"
            featuredSectionCard2.style.gridRow = "1"
            //
            popularSectionCart1.style.gridColumn = "3"
            popularSectionCart1.style.gridRow = "1"
            popularSectionCart3.style.gridColumn = "2"
            popularSectionCart3.style.gridRow = "1"
            popularSectionCart2.style.gridColumn = "1"
            popularSectionCart2.style.gridRow = "1"
            //
            newAddedSectionCart1.style.gridColumn = "3"
            newAddedSectionCart1.style.gridRow = "1"
            newAddedSectionCart3.style.gridColumn = "2"
            newAddedSectionCart3.style.gridRow = "1"
            newAddedSectionCart2.style.gridColumn = "1"
            newAddedSectionCart2.style.gridRow = "1"
            break;
        case 3:
            featuredSectionCard1.style.gridColumn = "2"
            featuredSectionCard1.style.gridRow = "1"
            featuredSectionCard3.style.gridColumn = "1"
            featuredSectionCard3.style.gridRow = "1"
            featuredSectionCard2.style.gridColumn = "3"
            featuredSectionCard2.style.gridRow = "1"
            //
            popularSectionCart1.style.gridColumn = "2"
            popularSectionCart1.style.gridRow = "1"
            popularSectionCart3.style.gridColumn = "1"
            popularSectionCart3.style.gridRow = "1"
            popularSectionCart2.style.gridColumn = "3"
            popularSectionCart2.style.gridRow = "1"
            //
            newAddedSectionCart1.style.gridColumn = "2"
            newAddedSectionCart1.style.gridRow = "1"
            newAddedSectionCart3.style.gridColumn = "1"
            newAddedSectionCart3.style.gridRow = "1"
            newAddedSectionCart2.style.gridColumn = "3"
            newAddedSectionCart2.style.gridRow = "1"
            break;
    }
}
function startRotation() {
    autoInterval = setInterval(function () {
        count++
        if (count > 3) {
            count = 1
        }
        cardPositions()
    }, 4500)
}
function pauseRotation5Seconds() {
    clearInterval(autoInterval)
    setTimeout(function () {
        startRotation()
    }, 5000)
}
arrowLeftDailySells.addEventListener("click", function () {
    count++
    if (count > 3) {
        count = 1
    }
    cardPositions()
    pauseRotation5Seconds()
});
arrowRightDailySells.addEventListener("click", function () {
    count--
    if (count < 1) {
        count = 3
    }
    cardPositions()
    pauseRotation5Seconds()
});

cardPositions()
startRotation()

function saveData() {
    const input = document.getElementById('dataInput')
    const email = input.value.trim()
    if (email.endsWith("@gmail.com")) {
        localStorage.setItem('userEmail', email)
        input.value = ""
        displayData()
        location.href = "./assets/pages/registion.html"
    }
    else {
        alert("Hey, can u write on end @gmail.com")
    }
}
function displayData() {
    const savedEmail = localStorage.getItem('userEmail')
    console.log(`Saved Email: ${savedEmail}`)
}

displayData()

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

function searchInput() {
    const searchInput = document.getElementById("searchInput")
    const searchBtn = document.getElementById("searchBtn")

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            searchInput.value = " "
            location.href = "./assets/pages/shop.html"
        }
    })
    searchBtn.addEventListener("click", function () {
        if (searchInput.value != "") {
            location.href = "./assets/pages/shop.html"
        }
        else {
            console.log("Can you write into input")
        }
    })

}

searchInput()