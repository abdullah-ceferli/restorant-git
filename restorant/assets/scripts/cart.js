fetch("../api/data.json")
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

        if (savedGlobalCartCount1 == "1") {
            let elementJsonData1 = data[`featured_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="cart-list-new-cart-img">
                    <img src="${elementJsonData1.featured_Cards1.second_Img}" alt="">
                    <p>${elementJsonData1.featured_Cards1.name}</p>
                </div>
                <div class="cart-list-new-cart-price">
                    <p>$${elementJsonData1.featured_Cards1.cost}</p>
                </div>
                <div class="cart-list-new-cart-adder">
                    <button id="cartListNewCartAdderPlus1" class="cart-list-new-cart-adder-plus">+</button>
                    <p id="cartListNewCartAdderNum1" class="cart-list-new-cart-adder-num">1</p>
                    <button id="cartListNewCartAdderMinus1" class="cart-list-new-cart-adder-minus">-</button>
                </div>
                <div class="cart-list-new-cart-total">
                    <p id="cartListNewCartTotal1">$${elementJsonData1.featured_Cards1.cost}</p>
                </div>
                <div class="cart-list-new-cart-trash">
                    <i id="deleteBtn1" class="fa-regular fa-trash-can"></i>
                </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)
            let price1 = elementJsonData1.featured_Cards1.cost

            const cartListNewCartAdderPlus1 = document.getElementById("cartListNewCartAdderPlus1")
            const cartListNewCartAdderNum1 = document.getElementById("cartListNewCartAdderNum1")
            const cartListNewCartAdderMinus1 = document.getElementById("cartListNewCartAdderMinus1")
            const cartListNewCartTotal1 = document.getElementById("cartListNewCartTotal1")
            let count1 = 1

            cartListNewCartAdderPlus1.addEventListener("click", function () {
                count1++
                cartListNewCartAdderNum1.innerHTML = count1
                cartListNewCartTotal1.innerHTML = `$${Math.floor(price1 += elementJsonData1.featured_Cards1.cost)}`
            })
            cartListNewCartAdderMinus1.addEventListener("click", function () {
                count1--
                if (count1 != 0) {
                    cartListNewCartAdderNum1.innerHTML = count1
                    cartListNewCartTotal1.innerHTML = `$${Math.floor(price1 -= elementJsonData1.featured_Cards1.cost)}`
                }
                else {
                    count1 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn1 = document.getElementById("deleteBtn1")
            deleteBtn1.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount1 = "0"
            })
        }
        if (savedGlobalCartCount2 == "2") {
            let elementJsonData2 = data[`featured_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData2.featured_Cards2.second_Img}" alt="">
                            <p>${elementJsonData2.featured_Cards2.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData2.featured_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus2" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum2" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus2" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal2">$${elementJsonData2.featured_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn2" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus2 = document.getElementById("cartListNewCartAdderPlus2")
            const cartListNewCartAdderNum2 = document.getElementById("cartListNewCartAdderNum2")
            const cartListNewCartAdderMinus2 = document.getElementById("cartListNewCartAdderMinus2")
            const cartListNewCartTotal2 = document.getElementById("cartListNewCartTotal2")
            let count2 = 1
            let price2 = elementJsonData2.featured_Cards2.cost
            cartListNewCartAdderPlus2.addEventListener("click", function () {
                count2++
                cartListNewCartAdderNum2.innerHTML = count2
                cartListNewCartTotal2.innerHTML = `$${Math.floor(price2 += elementJsonData2.featured_Cards2.cost)}`
            })
            cartListNewCartAdderMinus2.addEventListener("click", function () {
                count2--
                if (count2 != 0) {
                    cartListNewCartAdderNum2.innerHTML = count2
                    cartListNewCartTotal2.innerHTML = `$${Math.floor(price2 -= elementJsonData2.featured_Cards2.cost)}`
                }
                else {
                    count2 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn2 = document.getElementById("deleteBtn2")
            deleteBtn2.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount2 = "0"
            })
        }
        if (savedGlobalCartCount3 == "3") {
            let elementJsonData3 = data[`featured_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData3.featured_Cards3.second_Img}" alt="">
                            <p>${elementJsonData3.featured_Cards3.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData3.featured_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus3" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum3" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus3" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal3">$${elementJsonData3.featured_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn3" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus3 = document.getElementById("cartListNewCartAdderPlus3")
            const cartListNewCartAdderNum3 = document.getElementById("cartListNewCartAdderNum3")
            const cartListNewCartAdderMinus3 = document.getElementById("cartListNewCartAdderMinus3")
            const cartListNewCartTotal3 = document.getElementById("cartListNewCartTotal3")
            let count3 = 1
            let price3 = elementJsonData3.featured_Cards3.cost
            cartListNewCartAdderPlus3.addEventListener("click", function () {
                count3++
                cartListNewCartAdderNum3.innerHTML = count3
                cartListNewCartTotal3.innerHTML = `$${Math.floor(price3 += elementJsonData3.featured_Cards3.cost)}`
            })
            cartListNewCartAdderMinus3.addEventListener("click", function () {
                count3--
                if (count3 != 0) {
                    cartListNewCartAdderNum3.innerHTML = count3
                    cartListNewCartTotal3.innerHTML = `$${Math.floor(price3 -= elementJsonData3.featured_Cards3.cost)}`
                }
                else {
                    count3 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn3 = document.getElementById("deleteBtn3")
            deleteBtn3.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount3 = "0"
            })
        }
        if (savedGlobalCartCount4 == "4") {
            let elementJsonData4 = data[`popular_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData4.popular_Cards1.second_Img}" alt="">
                            <p>${elementJsonData4.popular_Cards1.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData4.popular_Cards1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus4" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum4" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus4" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal4">$${elementJsonData4.popular_Cards1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn4" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus4 = document.getElementById("cartListNewCartAdderPlus4")
            const cartListNewCartAdderNum4 = document.getElementById("cartListNewCartAdderNum4")
            const cartListNewCartAdderMinus4 = document.getElementById("cartListNewCartAdderMinus4")
            const cartListNewCartTotal4 = document.getElementById("cartListNewCartTotal4")
            let count4 = 1
            let price4 = elementJsonData4.popular_Cards1.cost
            cartListNewCartAdderPlus4.addEventListener("click", function () {
                count4++
                cartListNewCartAdderNum4.innerHTML = count4
                cartListNewCartTotal4.innerHTML = `$${Math.floor(price4 += elementJsonData4.popular_Cards1.cost)}`
            })
            cartListNewCartAdderMinus4.addEventListener("click", function () {
                count4--
                if (count4 != 0) {
                    cartListNewCartAdderNum4.innerHTML = count4
                    cartListNewCartTotal4.innerHTML = `$${Math.floor(price4 -= elementJsonData4.popular_Cards1.cost)}`
                }
                else {
                    count4 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn4 = document.getElementById("deleteBtn4")
            deleteBtn4.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount4 = "0"
            })
        }
        if (savedGlobalCartCount5 == "5") {
            let elementJsonData5 = data[`popular_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData5.popular_Cards2.second_Img}" alt="">
                            <p>${elementJsonData5.popular_Cards2.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData5.popular_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus5" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum5" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus5" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal5">$${elementJsonData5.popular_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn5" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus5 = document.getElementById("cartListNewCartAdderPlus5")
            const cartListNewCartAdderNum5 = document.getElementById("cartListNewCartAdderNum5")
            const cartListNewCartAdderMinus5 = document.getElementById("cartListNewCartAdderMinus5")
            const cartListNewCartTotal5 = document.getElementById("cartListNewCartTotal5")
            let count5 = 1
            let price5 = elementJsonData5.popular_Cards2.cost
            cartListNewCartAdderPlus5.addEventListener("click", function () {
                count5++
                cartListNewCartAdderNum5.innerHTML = count5
                cartListNewCartTotal5.innerHTML = `$${Math.floor(price5 += elementJsonData5.popular_Cards2.cost)}`
            })
            cartListNewCartAdderMinus5.addEventListener("click", function () {
                count5--
                if (count5 != 0) {
                    cartListNewCartAdderNum5.innerHTML = count5
                    cartListNewCartTotal5.innerHTML = `$${Math.floor(price5 -= elementJsonData5.popular_Cards2.cost)}`
                }
                else {
                    count5 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn5 = document.getElementById("deleteBtn5")
            deleteBtn5.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount5 = "0"
            })
        }
        if (savedGlobalCartCount6 == "6") {
            let elementJsonData6 = data[`popular_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData6.popular_Cards3.second_Img}" alt="">
                            <p>${elementJsonData6.popular_Cards3.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData6.popular_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus6" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum6" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus6" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal6">$${elementJsonData6.popular_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn6" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus6 = document.getElementById("cartListNewCartAdderPlus6")
            const cartListNewCartAdderNum6 = document.getElementById("cartListNewCartAdderNum6")
            const cartListNewCartAdderMinus6 = document.getElementById("cartListNewCartAdderMinus6")
            const cartListNewCartTotal6 = document.getElementById("cartListNewCartTotal6")
            let count6 = 1
            let price6 = elementJsonData6.popular_Cards3.cost
            cartListNewCartAdderPlus6.addEventListener("click", function () {
                count6++
                cartListNewCartAdderNum6.innerHTML = count6
                cartListNewCartTotal6.innerHTML = `$${Math.floor(price6 += elementJsonData6.popular_Cards3.cost)}`
            })
            cartListNewCartAdderMinus6.addEventListener("click", function () {
                count6--
                if (count6 != 0) {
                    cartListNewCartAdderNum6.innerHTML = count6
                    cartListNewCartTotal6.innerHTML = `$${Math.floor(price6 -= elementJsonData6.popular_Cards3.cost)}`
                }
                else {
                    count6 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn6 = document.getElementById("deleteBtn6")
            deleteBtn6.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount6 = "0"
            })
        }
        if (savedGlobalCartCount7 == "7") {
            let elementJsonData7 = data[`new_Added_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData7.new_Added_Cards1.second_Img}" alt="">
                            <p>${elementJsonData7.new_Added_Cards1.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData7.new_Added_Cards1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus7" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum7" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus7" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal7">$${elementJsonData7.new_Added_Cards1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn7" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus7 = document.getElementById("cartListNewCartAdderPlus7")
            const cartListNewCartAdderNum7 = document.getElementById("cartListNewCartAdderNum7")
            const cartListNewCartAdderMinus7 = document.getElementById("cartListNewCartAdderMinus7")
            const cartListNewCartTotal7 = document.getElementById("cartListNewCartTotal7")
            let count7 = 1
            let price7 = elementJsonData7.new_Added_Cards1.cost
            cartListNewCartAdderPlus7.addEventListener("click", function () {
                count7++
                cartListNewCartAdderNum7.innerHTML = count7
                cartListNewCartTotal7.innerHTML = `$${Math.floor(price7 += elementJsonData7.new_Added_Cards1.cost)}`
            })
            cartListNewCartAdderMinus7.addEventListener("click", function () {
                count7--
                if (count7 != 0) {
                    cartListNewCartAdderNum7.innerHTML = count7
                    cartListNewCartTotal7.innerHTML = `$${Math.floor(price7 -= elementJsonData7.new_Added_Cards1.cost)}`
                }
                else {
                    count7 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn7 = document.getElementById("deleteBtn7")
            deleteBtn7.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount7 = "0"
            })
        }
        if (savedGlobalCartCount8 == "8") {
            let elementJsonData8 = data[`new_Added_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData8.new_Added_Cards2.second_Img}" alt="">
                            <p>${elementJsonData8.new_Added_Cards2.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData8.new_Added_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus8" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum8" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus8" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal8">$${elementJsonData8.new_Added_Cards2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn8" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus8 = document.getElementById("cartListNewCartAdderPlus8")
            const cartListNewCartAdderNum8 = document.getElementById("cartListNewCartAdderNum8")
            const cartListNewCartAdderMinus8 = document.getElementById("cartListNewCartAdderMinus8")
            const cartListNewCartTotal8 = document.getElementById("cartListNewCartTotal8")
            let count8 = 1
            let price8 = elementJsonData8.new_Added_Cards2.cost
            cartListNewCartAdderPlus8.addEventListener("click", function () {
                count8++
                cartListNewCartAdderNum8.innerHTML = count8
                cartListNewCartTotal8.innerHTML = `$${Math.floor(price8 += elementJsonData8.new_Added_Cards2.cost)}`
            })
            cartListNewCartAdderMinus8.addEventListener("click", function () {
                count8--
                if (count8 != 0) {
                    cartListNewCartAdderNum8.innerHTML = count8
                    cartListNewCartTotal8.innerHTML = `$${Math.floor(price8 -= elementJsonData8.new_Added_Cards2.cost)}`
                }
                else {
                    count8 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn8 = document.getElementById("deleteBtn8")
            deleteBtn8.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount8 = "0"
            })
        }
        if (savedGlobalCartCount9 == "9") {
            let elementJsonData9 = data[`new_Added_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData9.new_Added_Cards3.second_Img}" alt="">
                            <p>${elementJsonData9.new_Added_Cards3.name}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData9.new_Added_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus9" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum9" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus9" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal9">$${elementJsonData9.new_Added_Cards3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn9" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus9 = document.getElementById("cartListNewCartAdderPlus9")
            const cartListNewCartAdderNum9 = document.getElementById("cartListNewCartAdderNum9")
            const cartListNewCartAdderMinus9 = document.getElementById("cartListNewCartAdderMinus9")
            const cartListNewCartTotal9 = document.getElementById("cartListNewCartTotal9")
            let count9 = 1
            let price9 = elementJsonData9.new_Added_Cards3.cost
            cartListNewCartAdderPlus9.addEventListener("click", function () {
                count9++
                cartListNewCartAdderNum9.innerHTML = count9
                cartListNewCartTotal9.innerHTML = `$${Math.floor(price9 += elementJsonData9.new_Added_Cards3.cost)}`
            })
            cartListNewCartAdderMinus9.addEventListener("click", function () {
                count9--
                if (count9 != 0) {
                    cartListNewCartAdderNum9.innerHTML = count9
                    cartListNewCartTotal9.innerHTML = `$${Math.floor(price9 -= elementJsonData9.new_Added_Cards3.cost)}`
                }
                else {
                    count9 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn9 = document.getElementById("deleteBtn9")
            deleteBtn9.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount9 = "0"
            })
        }
        if (savedGlobalCartCount10 == "10") {
            let elementJsonData10 = data[`deals_Day_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData10.deals_Day_Card1.second_Img}" alt="">
                            <p>${elementJsonData10.deals_Day_Card1.txt}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData10.deals_Day_Card1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus10" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum10" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus10" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal10">$${elementJsonData10.deals_Day_Card1.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn10" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus10 = document.getElementById("cartListNewCartAdderPlus10")
            const cartListNewCartAdderNum10 = document.getElementById("cartListNewCartAdderNum10")
            const cartListNewCartAdderMinus10 = document.getElementById("cartListNewCartAdderMinus10")
            const cartListNewCartTotal10 = document.getElementById("cartListNewCartTotal10")
            let count10 = 1
            let price10 = elementJsonData10.deals_Day_Card1.cost
            cartListNewCartAdderPlus10.addEventListener("click", function () {
                count10++
                cartListNewCartAdderNum10.innerHTML = count10
                cartListNewCartTotal10.innerHTML = `$${Math.floor(price10 += elementJsonData10.deals_Day_Card1.cost)}`
            })
            cartListNewCartAdderMinus10.addEventListener("click", function () {
                count10--
                if (count10 != 0) {
                    cartListNewCartAdderNum10.innerHTML = count10
                    cartListNewCartTotal10.innerHTML = `$${Math.floor(price10 -= elementJsonData10.deals_Day_Card1.cost)}`
                }
                else {
                    count10 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn10 = document.getElementById("deleteBtn10")
            deleteBtn10.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount10 = "0"
            })
        }
        if (savedGlobalCartCount11 == "11") {
            let elementJsonData11 = data[`deals_Day_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData11.deals_Day_Card2.second_Img}" alt="">
                            <p>${elementJsonData11.deals_Day_Card2.txt}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData11.deals_Day_Card2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus11" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum11" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus11" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal11">$${elementJsonData11.deals_Day_Card2.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn11" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus11 = document.getElementById("cartListNewCartAdderPlus11")
            const cartListNewCartAdderNum11 = document.getElementById("cartListNewCartAdderNum11")
            const cartListNewCartAdderMinus11 = document.getElementById("cartListNewCartAdderMinus11")
            const cartListNewCartTotal11 = document.getElementById("cartListNewCartTotal11")
            let count11 = 1
            let price11 = elementJsonData11.deals_Day_Card2.cost
            cartListNewCartAdderPlus11.addEventListener("click", function () {
                count11++
                cartListNewCartAdderNum11.innerHTML = count11
                cartListNewCartTotal11.innerHTML = `$${Math.floor(price11 += elementJsonData11.deals_Day_Card2.cost)}`
            })
            cartListNewCartAdderMinus11.addEventListener("click", function () {
                count11--
                if (count11 != 0) {
                    cartListNewCartAdderNum11.innerHTML = count11
                    cartListNewCartTotal11.innerHTML = `$${Math.floor(price11 -= elementJsonData11.deals_Day_Card2.cost)}`
                }
                else {
                    count11 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn11 = document.getElementById("deleteBtn11")
            deleteBtn11.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount11 = "0"
            })
        }
        if (savedGlobalCartCount12 == "12") {
            let elementJsonData12 = data[`deals_Day_Cards`][0]
            const div = document.createElement("div")
            div.innerHTML = `
                        <div class="cart-list-new-cart-img">
                            <img src="${elementJsonData12.deals_Day_Card3.second_Img}" alt="">
                            <p>${elementJsonData12.deals_Day_Card3.txt}</p>
                        </div>
                        <div class="cart-list-new-cart-price">
                            <p>$${elementJsonData12.deals_Day_Card3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-adder">
                            <button id="cartListNewCartAdderPlus12" class="cart-list-new-cart-adder-plus">+</button>
                            <p id="cartListNewCartAdderNum12" class="cart-list-new-cart-adder-num">1</p>
                            <button id="cartListNewCartAdderMinus12" class="cart-list-new-cart-adder-minus">-</button>
                        </div>
                        <div class="cart-list-new-cart-total">
                            <p id="cartListNewCartTotal12">$${elementJsonData12.deals_Day_Card3.cost}</p>
                        </div>
                        <div class="cart-list-new-cart-trash">
                            <i id="deleteBtn12" class="fa-regular fa-trash-can"></i>
                        </div>`
            div.classList.add("cart-list-new-cart")
            cartList.appendChild(div)

            const cartListNewCartAdderPlus12 = document.getElementById("cartListNewCartAdderPlus12")
            const cartListNewCartAdderNum12 = document.getElementById("cartListNewCartAdderNum12")
            const cartListNewCartAdderMinus12 = document.getElementById("cartListNewCartAdderMinus12")
            const cartListNewCartTotal12 = document.getElementById("cartListNewCartTotal12")
            let count12 = 1
            let price12 = elementJsonData12.deals_Day_Card3.cost
            cartListNewCartAdderPlus12.addEventListener("click", function () {
                count12++
                cartListNewCartAdderNum12.innerHTML = count12
                cartListNewCartTotal12.innerHTML = `$${Math.floor(price12 += elementJsonData12.deals_Day_Card3.cost)}`
            })
            cartListNewCartAdderMinus12.addEventListener("click", function () {
                count12--
                if (count12 != 0) {
                    cartListNewCartAdderNum12.innerHTML = count12
                    cartListNewCartTotal12.innerHTML = `$${Math.floor(price12 -= elementJsonData12.deals_Day_Card3.cost)}`
                }
                else {
                    count12 = 1
                    alert("CAN'T")
                }
            })
            const deleteBtn12 = document.getElementById("deleteBtn12")
            deleteBtn12.addEventListener("click", function () {
                div.remove()
                savedGlobalCartCount12 = "0"
            })
        }

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