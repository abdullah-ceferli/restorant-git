fetch("https://raw.githubusercontent.com/abdullah-ceferli/restorant-finnal-project-api/main/data.json")
    .then(response => response.json())
    .then(data => {
        const cartList = document.getElementsByClassName("cart-list")[0]
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

        function bigIfFunction() {
            // 1
            if (savedGlobalCartCount1 == "1") {
                let elementJsonData = data.featured_Cards[0].featured_Cards1

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus1" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum1" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus1" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal1">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn1" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus1")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus1")
                const num = document.getElementById("cartListNewCartAdderNum1")
                const total = document.getElementById("cartListNewCartTotal1")
                const deleteBtn = document.getElementById("deleteBtn1")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount1 = "0"
                })
            }
            // 2
            if (savedGlobalCartCount2 == "2") {
                let elementJsonData = data.featured_Cards[0].featured_Cards2

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus2" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum2" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus2" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal2">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn2" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus2")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus2")
                const num = document.getElementById("cartListNewCartAdderNum2")
                const total = document.getElementById("cartListNewCartTotal2")
                const deleteBtn = document.getElementById("deleteBtn2")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount2 = "0"
                })
            }
            // 3
            if (savedGlobalCartCount3 == "3") {
                let elementJsonData = data.featured_Cards[0].featured_Cards3

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus3" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum3" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus3" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal3">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn3" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus3")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus3")
                const num = document.getElementById("cartListNewCartAdderNum3")
                const total = document.getElementById("cartListNewCartTotal3")
                const deleteBtn = document.getElementById("deleteBtn3")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount3 = "0"
                })
            }
            // 4
            if (savedGlobalCartCount4 == "4") {
                let elementJsonData = data.popular_Cards[0].popular_Cards1

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus4" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum4" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus4" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal4">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn4" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus4")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus4")
                const num = document.getElementById("cartListNewCartAdderNum4")
                const total = document.getElementById("cartListNewCartTotal4")
                const deleteBtn = document.getElementById("deleteBtn4")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount4 = "0"
                })
            }
            // 5
            if (savedGlobalCartCount5 == "5") {
                let elementJsonData = data.popular_Cards[0].popular_Cards2

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus5" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum5" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus5" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal5">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn5" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus5")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus5")
                const num = document.getElementById("cartListNewCartAdderNum5")
                const total = document.getElementById("cartListNewCartTotal5")
                const deleteBtn = document.getElementById("deleteBtn5")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount5 = "0"
                })
            }
            // 6
            if (savedGlobalCartCount6 == "6") {
                let elementJsonData = data.popular_Cards[0].popular_Cards3

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus6" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum6" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus6" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal6">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn6" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus6")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus6")
                const num = document.getElementById("cartListNewCartAdderNum6")
                const total = document.getElementById("cartListNewCartTotal6")
                const deleteBtn = document.getElementById("deleteBtn6")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount6 = "0"
                })
            }
            // 7
            if (savedGlobalCartCount7 == "7") {
                let elementJsonData = data.new_Added_Cards[0].new_Added_Cards1

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus7" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum7" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus7" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal7">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn7" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus7")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus7")
                const num = document.getElementById("cartListNewCartAdderNum7")
                const total = document.getElementById("cartListNewCartTotal7")
                const deleteBtn = document.getElementById("deleteBtn7")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount7 = "0"
                })
            }
            // 8
            if (savedGlobalCartCount8 == "8") {
                let elementJsonData = data.new_Added_Cards[0].new_Added_Cards2

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus8" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum8" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus8" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal8">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn8" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus8")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus8")
                const num = document.getElementById("cartListNewCartAdderNum8")
                const total = document.getElementById("cartListNewCartTotal8")
                const deleteBtn = document.getElementById("deleteBtn8")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount8 = "0"
                })
            }
            // 9
            if (savedGlobalCartCount9 == "9") {
                let elementJsonData = data.new_Added_Cards[0].new_Added_Cards3

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.name}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus9" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum9" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus9" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal9">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn9" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus9")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus9")
                const num = document.getElementById("cartListNewCartAdderNum9")
                const total = document.getElementById("cartListNewCartTotal9")
                const deleteBtn = document.getElementById("deleteBtn9")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount9 = "0"
                })
            }
            // 10
            if (savedGlobalCartCount10 == "10") {
                let elementJsonData = data.deals_Day_Cards[0].deals_Day_Card1

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.txt}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus10" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum10" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus10" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal10">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn10" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus10")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus10")
                const num = document.getElementById("cartListNewCartAdderNum10")
                const total = document.getElementById("cartListNewCartTotal10")
                const deleteBtn = document.getElementById("deleteBtn10")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount10 = "0"
                })
            }
            // 11
            if (savedGlobalCartCount11 == "11") {
                let elementJsonData = data.deals_Day_Cards[0].deals_Day_Card2

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.txt}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus11" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum11" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus11" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal11">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn11" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus11")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus11")
                const num = document.getElementById("cartListNewCartAdderNum11")
                const total = document.getElementById("cartListNewCartTotal11")
                const deleteBtn = document.getElementById("deleteBtn11")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount11 = "0"
                })
            }
            // 12
            if (savedGlobalCartCount12 == "12") {
                let elementJsonData = data.deals_Day_Cards[0].deals_Day_Card3

                const div = document.createElement("div")
                div.classList.add("cart-list-new-cart")
                div.innerHTML = `
        <div class="cart-list-new-cart-img">
            <img src="${elementJsonData.second_Img}" alt="">
            <p>${elementJsonData.txt}</p>
        </div>
        <div class="cart-list-new-cart-price">
            <p>$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-adder">
            <button id="cartListNewCartAdderPlus12" class="cart-list-new-cart-adder-plus">+</button>
            <p id="cartListNewCartAdderNum12" class="cart-list-new-cart-adder-num">1</p>
            <button id="cartListNewCartAdderMinus12" class="cart-list-new-cart-adder-minus">-</button>
        </div>
        <div class="cart-list-new-cart-total">
            <p id="cartListNewCartTotal12">$${elementJsonData.cost}</p>
        </div>
        <div class="cart-list-new-cart-trash">
            <i id="deleteBtn12" class="fa-regular fa-trash-can"></i>
        </div>
    `
                cartList.appendChild(div)

                let count = 1
                let price = elementJsonData.cost
                const plusBtn = document.getElementById("cartListNewCartAdderPlus12")
                const minusBtn = document.getElementById("cartListNewCartAdderMinus12")
                const num = document.getElementById("cartListNewCartAdderNum12")
                const total = document.getElementById("cartListNewCartTotal12")
                const deleteBtn = document.getElementById("deleteBtn12")

                plusBtn.addEventListener("click", function () {
                    count++
                    num.innerHTML = count
                    price += elementJsonData.cost
                    total.innerHTML = `$${price.toFixed(2)}`
                })

                minusBtn.addEventListener("click", function () {
                    count--
                    if (count > 0) {
                        num.innerHTML = count
                        price -= elementJsonData.cost
                        total.innerHTML = `$${price.toFixed(2)}`
                    } else {
                        count = 1
                        console.error("Sorry can't go down from 1")
                    }
                })

                deleteBtn.addEventListener("click", function () {
                    div.remove()
                    savedGlobalCartCount12 = "0"
                })
            }
        }
        bigIfFunction()

        let popularProductsCardsJsonData = Object.values(data[`popular_Products`][0])
        let popularProductsCards = document.getElementsByClassName("popular-products-cards")[0]

        popularProductsCardsJsonData.forEach(element => {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
            <a href="./shop.html">
                <div class="popular-products-card-img">
                    <img src="${element.img}" alt="${element.name}">
                </div>
                <div class="popular-products-card-txt">
                    <p>Snacks</p>
                    <p><span style="color: #F5885F; margin-right: 23px;">_ _ _ _</span> ${element.stars}</p>
                    <p>${element.name}</p>
                </div>
                <div class="popular-products-card-price">
                    <p>${element.cost}</p>
                    <p>${element.old_Cost}</p>
                </div>
            </a>
            `
            cardDiv.classList.add("popular-products-card")
            popularProductsCards.appendChild(cardDiv)
        })
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