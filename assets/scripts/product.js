fetch("../api/data.json")
    .then(response => response.json())
    .then(data => {
        const savedGlobalCartCount = localStorage.getItem('savingGlobalCartData')
        const productCardsCount = Object.values(data[`count_All_Products`][0])
        let ShopCardsJsonData1 = Object.values(data[`all_Products_First_List`][0])
        let ShopCardsJsonData2 = Object.values(data[`all_Products_Second_List`][0])
        let ShopCardsJsonData3 = Object.values(data[`all_Products_Third_List`][0])
        const productSidebar = document.getElementsByClassName("product-sidebar")[0]

        
        if (savedGlobalCartCount >= productCardsCount[0].start && savedGlobalCartCount <= productCardsCount[0].end) {
            let indexInList = savedGlobalCartCount - productCardsCount[0].start
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div class="product">
                        <div class="product-top">
                            <div class="product-top-left">
                                <div>
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                </div>
                                <div>
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData1[indexInList].img}" alt="">
                                </div>
                            </div>
                            <div class="product-top-right">
                                <div class="product-top-right-title">
                                    <h3>${ShopCardsJsonData1[indexInList].name}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                                        minus error doloribus saepe natus?</p>
                                </div>
                                <hr style="margin: 20px 0 20px 0;">
                                <div class="product-top-right-stars-main">
                                    <div class="product-top-right-stars">
                                        <i class="${ShopCardsJsonData1[indexInList].star_Css[0]}"></i>
                                        <i class="${ShopCardsJsonData1[indexInList].star_Css[1]}"></i>
                                        <i class="${ShopCardsJsonData1[indexInList].star_Css[2]}"></i>
                                        <i class="${ShopCardsJsonData1[indexInList].star_Css[3]}"></i>
                                        <i class="${ShopCardsJsonData1[indexInList].star_Css[4]}"></i>
                                    </div>
                                    <div>
                                        <p>( ${ShopCardsJsonData1[indexInList].star} Review )</p>
                                    </div>
                                </div>
                                <div class="product-top-right-full">
                                    <div style="gap: 40px;">
                                        <h4>Brand</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.brand}</p>
                                    </div>
                                    <div style="gap: 29px;">
                                        <h4>Flavour</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.flavour}</p>
                                    </div>
                                    <div style="gap: 16px;">
                                        <h4>Diet Type</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.diet_type}</p>
                                    </div>
                                    <div style="gap: 34px;">
                                        <h4>Weight</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.weight} Grams</p>
                                    </div>
                                    <div style="gap: 13px;">
                                        <h4>Speciality</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.speciality}</p>
                                    </div>
                                    <div style="gap: 59px;">
                                        <h4>Info</h4>
                                        <p> : ${ShopCardsJsonData1[indexInList].product_Parameters.info}</p>
                                    </div>
                                    <div style="gap: 47px;">
                                        <h4>Items</h4>
                                        <p id="productIteam"> : 1</p>
                                    </div>
                                </div>
                                <div class="product-about-right-cost">
                                    <h2 id="costTxt">$${ShopCardsJsonData1[indexInList].cost}</h2>
                                    <p id="oldCostTxt">$${ShopCardsJsonData1[indexInList].old_Cost}</p>
                                </div>
                                <div class="product-about-right-weight">
                                    <h3>Size/Weight :</h3>
                                    <button id="weightBtn1">50kg</button>
                                    <button id="weightBtn2">80kg</button>
                                    <button id="weightBtn3">120kg</button>
                                    <button id="weightBtn4">200kg</button>
                                </div>
                                <div class="product-about-right-quantity">
                                    <div class="product-about-right-quantity-adder">
                                        <div>
                                            <p id="quantity">1</p>
                                        </div>
                                        <div>
                                            <button id="quantityPlus">+</button>
                                            <button id="quantityMinus">-</button>
                                        </div>
                                    </div>
                                    <button class="product-about-right-quantity-cart">Add to cart</button>
                                    <button class="product-about-right-quantity-fav"><i
                                            class="fa-regular fa-heart"></i></button>
                                    <button class="product-about-right-quantity-eye"><img src="../img/Eye-icon.png"
                                            alt=""></button>
                                </div>
                            </div>
                        </div>
                        <div class="product-footer">
                            <div class="product-footer-top">
                                <div class="product-footer-top-title">
                                    <h3>Description</h3>
                                    <h3>Information</h3>
                                    <h3>Review</h3>
                                </div>
                                <hr style="margin-bottom: 10px;">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio,
                                        error dolore vero temporibus
                                        consequatur, nobis veniam odit dignissimos consectetur quae in perferendis
                                        doloribusdebitis corporis, eaque dicta,
                                        repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio,
                                        error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis
                                        provident quis.</p>
                                </div>
                            </div>
                            <footer class="product-footer-footer">
                                <div>
                                    <h3>Packaging & Delivery</h3>
                                </div>
                                <hr>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis
                                        dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur,
                                        nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis provident quis.</p>
                                </div>
                            </footer>
                        </div>
                    </div>     
                `
            cardDiv.classList.add("product")
            productSidebar.appendChild(cardDiv)
        }
        else if (savedGlobalCartCount >= productCardsCount[1].start && savedGlobalCartCount <= productCardsCount[1].end) {
            let indexInList = savedGlobalCartCount - productCardsCount[1].start
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div class="product">
                        <div class="product-top">
                            <div class="product-top-left">
                                <div>
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                </div>
                                <div>
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData2[indexInList].img}" alt="">
                                </div>
                            </div>
                            <div class="product-top-right">
                                <div class="product-top-right-title">
                                    <h3>${ShopCardsJsonData2[indexInList].name}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                                        minus error doloribus saepe natus?</p>
                                </div>
                                <hr style="margin: 20px 0 20px 0;">
                                <div class="product-top-right-stars-main">
                                    <div class="product-top-right-stars">
                                        <i class="${ShopCardsJsonData2[indexInList].star_Css[0]}"></i>
                                        <i class="${ShopCardsJsonData2[indexInList].star_Css[1]}"></i>
                                        <i class="${ShopCardsJsonData2[indexInList].star_Css[2]}"></i>
                                        <i class="${ShopCardsJsonData2[indexInList].star_Css[3]}"></i>
                                        <i class="${ShopCardsJsonData2[indexInList].star_Css[4]}"></i>
                                    </div>
                                    <div>
                                        <p>( ${ShopCardsJsonData2[indexInList].star} Review )</p>
                                    </div>
                                </div>
                                <div class="product-top-right-full">
                                    <div style="gap: 40px;">
                                        <h4>Brand</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.brand}</p>
                                    </div>
                                    <div style="gap: 29px;">
                                        <h4>Flavour</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.flavour}</p>
                                    </div>
                                    <div style="gap: 16px;">
                                        <h4>Diet Type</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.diet_type}</p>
                                    </div>
                                    <div style="gap: 34px;">
                                        <h4>Weight</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.weight} Grams</p>
                                    </div>
                                    <div style="gap: 13px;">
                                        <h4>Speciality</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.speciality}</p>
                                    </div>
                                    <div style="gap: 59px;">
                                        <h4>Info</h4>
                                        <p> : ${ShopCardsJsonData2[indexInList].product_Parameters.info}</p>
                                    </div>
                                    <div style="gap: 47px;">
                                        <h4>Items</h4>
                                        <p id="productIteam"> : 1</p>
                                    </div>
                                </div>
                                <div class="product-about-right-cost">
                                    <h2 id="costTxt">$${ShopCardsJsonData2[indexInList].cost}</h2>
                                    <p id="oldCostTxt">$${ShopCardsJsonData2[indexInList].old_Cost}</p>
                                </div>
                                <div class="product-about-right-weight">
                                    <h3>Size/Weight :</h3>
                                    <button id="weightBtn1">50kg</button>
                                    <button id="weightBtn2">80kg</button>
                                    <button id="weightBtn3">120kg</button>
                                    <button id="weightBtn4">200kg</button>
                                </div>
                                <div class="product-about-right-quantity">
                                    <div class="product-about-right-quantity-adder">
                                        <div>
                                            <p id="quantity">1</p>
                                        </div>
                                        <div>
                                            <button id="quantityPlus">+</button>
                                            <button id="quantityMinus">-</button>
                                        </div>
                                    </div>
                                    <button class="product-about-right-quantity-cart">Add to cart</button>
                                    <button class="product-about-right-quantity-fav"><i
                                            class="fa-regular fa-heart"></i></button>
                                    <button class="product-about-right-quantity-eye"><img src="../img/Eye-icon.png"
                                            alt=""></button>
                                </div>
                            </div>
                        </div>
                        <div class="product-footer">
                            <div class="product-footer-top">
                                <div class="product-footer-top-title">
                                    <h3>Description</h3>
                                    <h3>Information</h3>
                                    <h3>Review</h3>
                                </div>
                                <hr style="margin-bottom: 10px;">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio,
                                        error dolore vero temporibus
                                        consequatur, nobis veniam odit dignissimos consectetur quae in perferendis
                                        doloribusdebitis corporis, eaque dicta,
                                        repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio,
                                        error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis
                                        provident quis.</p>
                                </div>
                            </div>
                            <footer class="product-footer-footer">
                                <div>
                                    <h3>Packaging & Delivery</h3>
                                </div>
                                <hr>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis
                                        dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur,
                                        nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis provident quis.</p>
                                </div>
                            </footer>
                        </div>
                    </div>     
                `
            cardDiv.classList.add("product")
            productSidebar.appendChild(cardDiv)
        }
        else if (savedGlobalCartCount >= productCardsCount[2].start && savedGlobalCartCount <= productCardsCount[2].end) {
            let indexInList = savedGlobalCartCount - productCardsCount[2].start
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                <div class="product">
                        <div class="product-top">
                            <div class="product-top-left">
                                <div>
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                </div>
                                <div>
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                    <img src="${ShopCardsJsonData3[indexInList].img}" alt="">
                                </div>
                            </div>
                            <div class="product-top-right">
                                <div class="product-top-right-title">
                                    <h3>${ShopCardsJsonData3[indexInList].name}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                                        minus error doloribus saepe natus?</p>
                                </div>
                                <hr style="margin: 20px 0 20px 0;">
                                <div class="product-top-right-stars-main">
                                    <div class="product-top-right-stars">
                                        <i class="${ShopCardsJsonData3[indexInList].star_Css[0]}"></i>
                                        <i class="${ShopCardsJsonData3[indexInList].star_Css[1]}"></i>
                                        <i class="${ShopCardsJsonData3[indexInList].star_Css[2]}"></i>
                                        <i class="${ShopCardsJsonData3[indexInList].star_Css[3]}"></i>
                                        <i class="${ShopCardsJsonData3[indexInList].star_Css[4]}"></i>
                                    </div>
                                    <div>
                                        <p>( ${ShopCardsJsonData3[indexInList].star} Review )</p>
                                    </div>
                                </div>
                                <div class="product-top-right-full">
                                    <div style="gap: 40px;">
                                        <h4>Brand</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.brand}</p>
                                    </div>
                                    <div style="gap: 29px;">
                                        <h4>Flavour</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.flavour}</p>
                                    </div>
                                    <div style="gap: 16px;">
                                        <h4>Diet Type</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.diet_type}</p>
                                    </div>
                                    <div style="gap: 34px;">
                                        <h4>Weight</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.weight} Grams</p>
                                    </div>
                                    <div style="gap: 13px;">
                                        <h4>Speciality</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.speciality}</p>
                                    </div>
                                    <div style="gap: 59px;">
                                        <h4>Info</h4>
                                        <p> : ${ShopCardsJsonData3[indexInList].product_Parameters.info}</p>
                                    </div>
                                    <div style="gap: 47px;">
                                        <h4>Items</h4>
                                        <p id="productIteam"> : 1</p>
                                    </div>
                                </div>
                                <div class="product-about-right-cost">
                                    <h2 id="costTxt">$${ShopCardsJsonData3[indexInList].cost}</h2>
                                    <p id="oldCostTxt">$${ShopCardsJsonData3[indexInList].old_Cost}</p>
                                </div>
                                <div class="product-about-right-weight">
                                    <h3>Size/Weight :</h3>
                                    <button id="weightBtn1">50kg</button>
                                    <button id="weightBtn2">80kg</button>
                                    <button id="weightBtn3">120kg</button>
                                    <button id="weightBtn4">200kg</button>
                                </div>
                                <div class="product-about-right-quantity">
                                    <div class="product-about-right-quantity-adder">
                                        <div>
                                            <p id="quantity">1</p>
                                        </div>
                                        <div>
                                            <button id="quantityPlus">+</button>
                                            <button id="quantityMinus">-</button>
                                        </div>
                                    </div>
                                    <button class="product-about-right-quantity-cart">Add to cart</button>
                                    <button class="product-about-right-quantity-fav"><i
                                            class="fa-regular fa-heart"></i></button>
                                    <button class="product-about-right-quantity-eye"><img src="../img/Eye-icon.png"
                                            alt=""></button>
                                </div>
                            </div>
                        </div>
                        <div class="product-footer">
                            <div class="product-footer-top">
                                <div class="product-footer-top-title">
                                    <h3>Description</h3>
                                    <h3>Information</h3>
                                    <h3>Review</h3>
                                </div>
                                <hr style="margin-bottom: 10px;">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio,
                                        error dolore vero temporibus
                                        consequatur, nobis veniam odit dignissimos consectetur quae in perferendis
                                        doloribusdebitis corporis, eaque dicta,
                                        repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio,
                                        error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis
                                        provident quis.</p>
                                </div>
                            </div>
                            <footer class="product-footer-footer">
                                <div>
                                    <h3>Packaging & Delivery</h3>
                                </div>
                                <hr>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis
                                        dolor! Quis vel consequuntur repellat
                                        distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur,
                                        nobis veniam odit laborum dignissimos
                                        consectetur quae vero in perferendis provident quis.</p>
                                </div>
                            </footer>
                        </div>
                    </div>     
                `
            cardDiv.classList.add("product")
            productSidebar.appendChild(cardDiv)
        }
        else {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                    <img src="../img/monkey.jpg" alt="">
                `
            cardDiv.classList.add("product")
            productSidebar.appendChild(cardDiv)
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

function btnColorChanger() {
    style.backgroundColor = "#F53E32"
}