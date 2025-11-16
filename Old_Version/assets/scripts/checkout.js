fetch("https://raw.githubusercontent.com/abdullah-ceferli/restorant-finnal-project-api/main/data.json")
    .then(response => response.json())
    .then(data => {
        let savedGlobalCartCount1 = localStorage.getItem('savingGlobalCartCount1')
        let savedGlobalCartCount2 = localStorage.getItem('savingGlobalCartCount2')
        let savedGlobalCartCount3 = localStorage.getItem('savingGlobalCartCount3')
        let savedGlobalCartCount4 = localStorage.getItem('savingGlobalCartCount4')
        let savedGlobalCartCount5 = localStorage.getItem('savingGlobalCartCount5')
        let savedGlobalCartCount6 = localStorage.getItem('savingGlobalCartCount6')
        let savedGlobalCartCount7 = localStorage.getItem('savingGlobalCartCount7')
        let savedGlobalCartCount8 = localStorage.getItem('savingGlobalCartCount8')
        let savedGlobalCartCount9 = localStorage.getItem('savingGlobalCartCount9')
        let savedGlobalCartCount10 = localStorage.getItem('savingGlobalCartCount10')
        let savedGlobalCartCount11 = localStorage.getItem('savingGlobalCartCount11')
        let savedGlobalCartCount12 = localStorage.getItem('savingGlobalCartCount12')
        const totalAmountCarts = document.getElementsByClassName("total-amount-carts")[0]
        let elementJsonData1 = data[`featured_Cards`][0]
        let elementJsonData2 = data[`popular_Cards`][0]
        let elementJsonData3 = data[`new_Added_Cards`][0]
        let elementJsonData4 = data[`deals_Day_Cards`][0]


        if (savedGlobalCartCount1 == "1") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData1.featured_Cards1.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData1.featured_Cards1.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData1.featured_Cards1.cost}</p>
                    <p>$${elementJsonData1.featured_Cards1.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount2 == "2") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData1.featured_Cards2.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData1.featured_Cards2.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData1.featured_Cards2.cost}</p>
                    <p>$${elementJsonData1.featured_Cards2.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount3 == "3") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData1.featured_Cards3.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData1.featured_Cards3.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData1.featured_Cards3.cost}</p>
                    <p>$${elementJsonData1.featured_Cards3.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount4 == "4") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData2.popular_Cards1.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData2.popular_Cards1.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData2.popular_Cards1.cost}</p>
                    <p>$${elementJsonData2.popular_Cards1.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount5 == "5") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData2.popular_Cards2.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData2.popular_Cards2.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData2.popular_Cards2.cost}</p>
                    <p>$${elementJsonData2.popular_Cards2.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount6 == "6") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData2.popular_Cards3.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData2.popular_Cards3.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData2.popular_Cards3.cost}</p>
                    <p>$${elementJsonData2.popular_Cards3.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount7 == "7") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData3.new_Added_Cards1.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData3.new_Added_Cards1.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData3.new_Added_Cards1.cost}</p>
                    <p>$${elementJsonData3.new_Added_Cards1.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount8 == "8") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData3.new_Added_Cards2.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData3.new_Added_Cards2.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData3.new_Added_Cards2.cost}</p>
                    <p>$${elementJsonData3.new_Added_Cards2.old_Cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount9 == "9") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData3.new_Added_Cards3.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData3.new_Added_Cards3.name}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData3.new_Added_Cards3.cost}</p>
                    <p>$${elementJsonData3.new_Added_Cards3.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount10 == "10") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData4.deals_Day_Card1.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData4.deals_Day_Card1.txt}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData4.deals_Day_Card1.cost}</p>
                    <p>$${elementJsonData4.deals_Day_Card1.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount11 == "11") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData4.deals_Day_Card2.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData4.deals_Day_Card2.txt}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData4.deals_Day_Card2.cost}</p>
                    <p>$${elementJsonData4.deals_Day_Card2.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }
        if (savedGlobalCartCount12 == "12") {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="total-amount-cart-img">
                <img src="${elementJsonData4.deals_Day_Card2.second_Img}" alt="">
            </div>
            <div class="total-amount-cart-txt">
                <p>${elementJsonData4.deals_Day_Card2.txt}</p>
                <div class="total-amount-cart-txt-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div>
                    <p>$${elementJsonData4.deals_Day_Card2.cost}</p>
                    <p>$${elementJsonData4.deals_Day_Card2.old_cost}</p>
                </div>
            </div>
            `
            div.classList.add("total-amount-cart")
            totalAmountCarts.appendChild(div)
        }

        function cartAllCost() {
            const cost1 = document.getElementById("cost1")
            const cost2 = document.getElementById("cost2")
            const cost3 = document.getElementById("cost3")
            const rateFree = document.getElementById("rateFree")
            const rateMoney = document.getElementById("rateMoney")

            let cost1Amount = 0
            let costAmount = 0
            if (savedGlobalCartCount1 == "1") {
                cost1Amount += elementJsonData1.featured_Cards1.cost
                costAmount += elementJsonData1.featured_Cards1.cost
            }
            if (savedGlobalCartCount2 == "2") {
                cost1Amount += elementJsonData1.featured_Cards2.cost
                costAmount += elementJsonData1.featured_Cards2.cost
            }
            if (savedGlobalCartCount3 == "3") {
                cost1Amount += elementJsonData1.featured_Cards3.cost
                costAmount += elementJsonData1.featured_Cards3.cost
            }
            if (savedGlobalCartCount4 == "4") {
                cost1Amount += elementJsonData2.popular_Cards1.cost
                costAmount += elementJsonData2.popular_Cards1.cost
            }
            if (savedGlobalCartCount5 == "5") {
                cost1Amount += elementJsonData2.popular_Cards2.cost
                costAmount += elementJsonData2.popular_Cards2.cost
            }
            if (savedGlobalCartCount6 == "6") {
                cost1Amount += elementJsonData2.popular_Cards3.cost
                costAmount += elementJsonData2.popular_Cards3.cost
            }
            if (savedGlobalCartCount7 == "7") {
                cost1Amount += elementJsonData3.new_Added_Cards1.cost
                costAmount += elementJsonData3.new_Added_Cards1.cost
            }
            if (savedGlobalCartCount8 == "8") {
                cost1Amount += elementJsonData3.new_Added_Cards2.cost
                costAmount += elementJsonData3.new_Added_Cards2.cost
            }
            if (savedGlobalCartCount9 == "9") {
                cost1Amount += elementJsonData3.new_Added_Cards3.cost
                costAmount += elementJsonData3.new_Added_Cards3.cost
            }
            if (savedGlobalCartCount10 == "10") {
                cost1Amount += elementJsonData4.deals_Day_Card1.cost
                costAmount += elementJsonData4.deals_Day_Card1.cost
            }
            if (savedGlobalCartCount11 == "11") {
                cost1Amount += elementJsonData4.deals_Day_Card2.cost
                costAmount += elementJsonData4.deals_Day_Card2.cost
            }
            if (savedGlobalCartCount12 == "12") {
                cost1Amount += elementJsonData4.deals_Day_Card3.cost
                costAmount += elementJsonData4.deals_Day_Card3.cost
            }
            cost1.innerHTML = `$${Math.round(cost1Amount)}`
            cost2.innerHTML = `$${Math.round(cost1Amount)}`
            cost3.innerHTML = `$${Math.round(cost1Amount)}`

            rateFree.addEventListener("click", function () {
                costAmount -= 5
                cost2.innerHTML = `$${Math.round(costAmount)}`
                cost3.innerHTML = `$${Math.round(costAmount)}`
            })
            rateMoney.addEventListener("click", function () {
                costAmount += 5
                cost2.innerHTML = `$${Math.round(costAmount)}`
                cost3.innerHTML = `$${Math.round(costAmount)}`
            })
        }
        cartAllCost()
    })
let locationLooker = true

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


function radioInputs() {
    const existingAddress = document.getElementById("existingAddress")
    const newAddress = document.getElementById("newAddress")
    const billingDetailsInputs = document.getElementsByClassName("right-section-billing-details-inputs")[0]

    existingAddress.addEventListener("click", function () {
        billingDetailsInputs.style.display = "none"
        locationLooker = false
    })
    newAddress.addEventListener("click", function () {
        billingDetailsInputs.style.display = "flex"
        locationLooker = true
    })
}
radioInputs()


function inputDropDowns() {
    const cityDrop = document.getElementById("cityDrop")
    const cityDropDown = document.getElementById("cityDropDown")
    const savedCity = localStorage.getItem('registerCityGlobal')
    const cityInput = document.getElementById("cityInput")
    let cityDropLooker = true
    let CityTxtLooker = true

    const passwordDrop = document.getElementById("passwordDrop")
    const passwordDropDown = document.getElementById("passwordDropDown")
    const savedPassword = localStorage.getItem('registerPasswordGlobal')
    const passwordInput2 = document.getElementById("passwordInput2")
    let passwordDropLooker = true
    let passwordTxtLooker = true

    const countryDrop = document.getElementById("countryDrop")
    const countryDropDown = document.getElementById("countryDropDown")
    const savedCountry = localStorage.getItem('registerCountryGlobal')
    const countryInput = document.getElementById("countryInput")
    let countryDropLooker = true
    let countryTxtLooker = true

    const regionDrop = document.getElementById("regionDrop")
    const regionDropDown = document.getElementById("regionDropDown")
    const savedRegion = localStorage.getItem('registerRegionGlobal')
    const regionInput = document.getElementById("regionInput")
    let regionDropLooker = true
    let regionTxtLooker = true

    cityDropDown.addEventListener("click", function () {
        if (cityDropLooker) {
            cityDrop.style.display = "flex"
            cityDropDown.style.transform = "rotate(180deg)"
            cityDropLooker = false
            if (CityTxtLooker) {
                const p = document.createElement("p")
                p.innerHTML = savedCity
                cityDrop.appendChild(p)
                CityTxtLooker = false
                p.addEventListener("click", function () {
                    cityInput.value = savedCity
                })
            }
        }
        else {
            cityDrop.style.display = "none"
            cityDropDown.style.transform = "rotate(0deg)"
            cityDropLooker = true
        }
    })
    passwordDropDown.addEventListener("click", function () {
        if (passwordDropLooker) {
            passwordDrop.style.display = "flex"
            passwordDropDown.style.transform = "rotate(180deg)"
            passwordDropLooker = false
            if (passwordTxtLooker) {
                const p = document.createElement("p")
                p.innerHTML = savedPassword
                passwordDrop.appendChild(p)
                passwordTxtLooker = false
                p.addEventListener("click", function () {
                    passwordInput2.value = savedPassword
                })
            }
        }
        else {
            passwordDrop.style.display = "none"
            passwordDropDown.style.transform = "rotate(0deg)"
            passwordDropLooker = true
        }
    })
    countryDropDown.addEventListener("click", function () {
        if (countryDropLooker) {
            countryDrop.style.display = "flex"
            countryDropDown.style.transform = "rotate(180deg)"
            countryDropLooker = false
            if (countryTxtLooker) {
                const p = document.createElement("p")
                p.innerHTML = savedCountry
                countryDrop.appendChild(p)
                countryTxtLooker = false
                p.addEventListener("click", function () {
                    countryInput.value = savedCountry
                })
            }
        }
        else {
            countryDrop.style.display = "none"
            countryDropDown.style.transform = "rotate(0deg)"
            countryDropLooker = true
        }
    })
    regionDropDown.addEventListener("click", function () {
        if (regionDropLooker) {
            regionDrop.style.display = "flex"
            regionDropDown.style.transform = "rotate(180deg)"
            regionDropLooker = false
            if (regionTxtLooker) {
                const p = document.createElement("p")
                p.innerHTML = savedRegion
                regionDrop.appendChild(p)
                regionTxtLooker = false
                p.addEventListener("click", function () {
                    regionInput.value = savedRegion
                })
            }
        }
        else {
            regionDrop.style.display = "none"
            regionDropDown.style.transform = "rotate(0deg)"
            regionDropLooker = true
        }
    })


}
inputDropDowns()


function inputLogin() {
    const secondSavedEmail = localStorage.getItem('registerEmailGlobal')
    console.log(`Saved Email: ${secondSavedEmail}`)
    const savedPassword = localStorage.getItem('registerPasswordGlobal')
    console.log(`Saved Password: ${savedPassword}`)

    const emailInput = document.getElementById("emailInput")
    const passwordInput = document.getElementById("passwordInput")
    const loginBtn = document.getElementById("loginBtn")
    const registting = document.getElementsByClassName("registting")[0]
    const placeOrderBtn = document.getElementById("placeOrderBtn")

    loginBtn.addEventListener("click", function () {
        if (emailInput.value != "" && passwordInput.value != "") {
            if (passwordInput.value == savedPassword && emailInput.value == secondSavedEmail) {
                registting.style.display = "none"
            }
            else {
                alert("Hey, please write wrong email or password")
            }
        }
        else {
            alert("Hey, please fill in all the inputs")
        }
    })
    placeOrderBtn.addEventListener("click", function () {
        if (locationLooker == false) {
            location.href = "/index.html"
        }
        else if (emailInput.value != "" && passwordInput.value != "") {
            if (passwordInput.value == savedPassword && emailInput.value == secondSavedEmail) {
                location.href = "/index.html"
            }
            else {
                alert("Hey, please write wrong email or password")
            }
        }
        else {
            alert("Hey, please fill in all the inputs")
        }
    })
}
inputLogin()


function radioVariantOfAccount() {
    const accountsRegisterRadio = document.getElementById("accountsRegisterRadio")
    const accountsGuestRadio = document.getElementById("accountsGuestRadio")
    const registting = document.getElementsByClassName("registting")[0]

    accountsRegisterRadio.addEventListener("click", function () {
        registting.style.display = "flex"
    })
    accountsGuestRadio.addEventListener("click", function () {
        registting.style.display = "none"
    })
}
radioVariantOfAccount()
