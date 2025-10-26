fetch("https://raw.githubusercontent.com/abdullah-ceferli/restorant-finnal-project-api/main/data.json")
    .then(response => response.json())
    .then(data => {
        const savedGlobalCartCount = localStorage.getItem('savingGlobalCartData')
        const productCardsCount = Object.values(data[`count_All_Products`][0])
        let ShopCardsJsonData1 = Object.values(data[`all_Products_First_List`][0])
        let ShopCardsJsonData2 = Object.values(data[`all_Products_Second_List`][0])
        let ShopCardsJsonData3 = Object.values(data[`all_Products_Third_List`][0])
        const productSidebar = document.getElementsByClassName("product-sidebar")[0]

        function idDocuments() {
            const weightBtn1 = document.getElementById("weightBtn1")
            const weightBtn2 = document.getElementById("weightBtn2")
            const weightBtn3 = document.getElementById("weightBtn3")
            const weightBtn4 = document.getElementById("weightBtn4")
            const costTxt = document.getElementById("costTxt")
            const oldCostTxt = document.getElementById("oldCostTxt")
            const quantityPlus = document.getElementById("quantityPlus")
            const quantityMinus = document.getElementById("quantityMinus")
            const quantity = document.getElementById("quantity")
            const productIteam = document.getElementById("productIteam")
            const productDescriptionInfRev = document.getElementById("productDescriptionInfRev")
            const productDescription = document.getElementById("productDescription")
            const productInf = document.getElementById("productInf")
            const productRev = document.getElementById("productRev")
        }

        // 1
        if (savedGlobalCartCount >= productCardsCount[0].start && savedGlobalCartCount <= productCardsCount[0].end) {
            idDocuments()
            let indexInList = savedGlobalCartCount - productCardsCount[0].start
            let cardDiv = document.createElement('div')
            let count = 1
            let weightCount = 1
            let process = ShopCardsJsonData1[indexInList].cost
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
                                    <button id="weightBtn1">${ShopCardsJsonData1[indexInList].product_Weight.weight1}kg</button>
                                    <button id="weightBtn2">${ShopCardsJsonData1[indexInList].product_Weight.weight2}kg</button>
                                    <button id="weightBtn3">${ShopCardsJsonData1[indexInList].product_Weight.weight3}kg</button>
                                    <button id="weightBtn4">${ShopCardsJsonData1[indexInList].product_Weight.weight4}kg</button>
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
                                    <h3 id="productDescription">Description</h3>
                                    <h3 id="productInf">Information</h3>
                                    <h3 id="productRev">Review</h3>
                                </div>
                                <hr style="margin-bottom: 10px;">
                                <div id="productDescriptionInfRev">
                                    <p>${ShopCardsJsonData1[indexInList].product_Footer_Data.Description}</p>
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

            weightBtn1.addEventListener("click", function () {
                weightBtn1.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn1.style.color = "white"

                process = ShopCardsJsonData1[indexInList].cost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${ShopCardsJsonData1[indexInList].old_Cost}`
                weightCount = 1
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn2.addEventListener("click", function () {
                weightBtn2.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn2.style.color = "white"

                let newPriceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight2
                let OldPriceForKg = ShopCardsJsonData1[indexInList].old_Cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight2

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 2
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn3.addEventListener("click", function () {
                weightBtn3.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn1.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn1.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn3.style.color = "white"

                let newPriceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight3
                let OldPriceForKg = ShopCardsJsonData1[indexInList].old_Cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight3

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 3
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn4.addEventListener("click", function () {
                weightBtn4.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn2.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn2.style.color = "black"
                weightBtn4.style.color = "white"

                let newPriceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight4
                let OldPriceForKg = ShopCardsJsonData1[indexInList].old_Cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight4

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 4
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })

            quantityPlus.addEventListener("click", function () {
                count++
                quantity.innerHTML = count
                productIteam.innerHTML = `: ${count}`
                if (weightCount == 1) {
                    process += ShopCardsJsonData1[indexInList].cost
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 2) {
                    let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight2

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 3) {
                    let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight3

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else {
                    let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight4

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
            })
            quantityMinus.addEventListener("click", function () {
                if (count > 1) {
                    count--
                    quantity.innerHTML = count
                    productIteam.innerHTML = `: ${count}`
                    if (weightCount == 1) {
                        process -= ShopCardsJsonData1[indexInList].cost
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 2) {
                        let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight2

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 3) {
                        let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight3

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else {
                        let priceForKg = ShopCardsJsonData1[indexInList].cost / ShopCardsJsonData1[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData1[indexInList].product_Weight.weight4

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                }
                else {
                    console.error("Sorry, can't go down from 1")
                }
            })

            function footerClicks() {
                productDescription.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Description
                })
                productInf.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Information
                })
                productRev.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Review
                })
            }
            footerClicks()
        }
        // 2
        else if (savedGlobalCartCount >= productCardsCount[1].start && savedGlobalCartCount <= productCardsCount[1].end) {
            idDocuments()
            let indexInList = savedGlobalCartCount - productCardsCount[1].start
            let cardDiv = document.createElement('div')
            let count = 1
            let weightCount = 1
            let process = ShopCardsJsonData2[indexInList].cost
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
                                    <button id="weightBtn1">${ShopCardsJsonData2[indexInList].product_Weight.weight1}kg</button>
                                    <button id="weightBtn2">${ShopCardsJsonData2[indexInList].product_Weight.weight2}kg</button>
                                    <button id="weightBtn3">${ShopCardsJsonData2[indexInList].product_Weight.weight3}kg</button>
                                    <button id="weightBtn4">${ShopCardsJsonData2[indexInList].product_Weight.weight4}kg</button>
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

            weightBtn1.addEventListener("click", function () {
                weightBtn1.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn1.style.color = "white"

                process = ShopCardsJsonData2[indexInList].cost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${ShopCardsJsonData2[indexInList].old_Cost}`
                weightCount = 1
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn2.addEventListener("click", function () {
                weightBtn2.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn2.style.color = "white"

                let newPriceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight2
                let OldPriceForKg = ShopCardsJsonData2[indexInList].old_Cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight2

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 2
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn3.addEventListener("click", function () {
                weightBtn3.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn1.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn1.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn3.style.color = "white"

                let newPriceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight3
                let OldPriceForKg = ShopCardsJsonData2[indexInList].old_Cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight3

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 3
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn4.addEventListener("click", function () {
                weightBtn4.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn2.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn2.style.color = "black"
                weightBtn4.style.color = "white"

                let newPriceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight4
                let OldPriceForKg = ShopCardsJsonData2[indexInList].old_Cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight4

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 4
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })

            quantityPlus.addEventListener("click", function () {
                count++
                quantity.innerHTML = count
                productIteam.innerHTML = `: ${count}`
                if (weightCount == 1) {
                    process += ShopCardsJsonData2[indexInList].cost
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 2) {
                    let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight2

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 3) {
                    let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight3

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else {
                    let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight4

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
            })
            quantityMinus.addEventListener("click", function () {
                if (count > 1) {
                    count--
                    quantity.innerHTML = count
                    productIteam.innerHTML = `: ${count}`
                    if (weightCount == 1) {
                        process -= ShopCardsJsonData2[indexInList].cost
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 2) {
                        let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight2

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 3) {
                        let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight3

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else {
                        let priceForKg = ShopCardsJsonData2[indexInList].cost / ShopCardsJsonData2[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData2[indexInList].product_Weight.weight4

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                }
                else {
                    console.error("Sorry, can't go down from 1")
                }
            })

            function footerClicks() {
                productDescription.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Description
                })
                productInf.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Information
                })
                productRev.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Review
                })
            }
            footerClicks()
        }
        // 3
        else if (savedGlobalCartCount >= productCardsCount[2].start && savedGlobalCartCount <= productCardsCount[2].end) {
            idDocuments()
            let indexInList = savedGlobalCartCount - productCardsCount[2].start
            let cardDiv = document.createElement('div')
            let count = 1
            let weightCount = 1
            let process = ShopCardsJsonData3[indexInList].cost
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
                                    <button id="weightBtn1">${ShopCardsJsonData3[indexInList].product_Weight.weight1}kg</button>
                                    <button id="weightBtn2">${ShopCardsJsonData3[indexInList].product_Weight.weight2}kg</button>
                                    <button id="weightBtn3">${ShopCardsJsonData3[indexInList].product_Weight.weight3}kg</button>
                                    <button id="weightBtn4">${ShopCardsJsonData3[indexInList].product_Weight.weight4}kg</button>
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

            weightBtn1.addEventListener("click", function () {
                weightBtn1.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn1.style.color = "white"

                process = ShopCardsJsonData3[indexInList].cost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${ShopCardsJsonData3[indexInList].old_Cost}`
                weightCount = 1
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn2.addEventListener("click", function () {
                weightBtn2.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn2.style.color = "white"

                let newPriceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight2
                let OldPriceForKg = ShopCardsJsonData3[indexInList].old_Cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight2

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 2
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn3.addEventListener("click", function () {
                weightBtn3.style.backgroundColor = "#F53E32"
                weightBtn2.style.backgroundColor = "white"
                weightBtn1.style.backgroundColor = "white"
                weightBtn4.style.backgroundColor = "white"

                weightBtn2.style.color = "black"
                weightBtn1.style.color = "black"
                weightBtn4.style.color = "black"
                weightBtn3.style.color = "white"

                let newPriceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight3
                let OldPriceForKg = ShopCardsJsonData3[indexInList].old_Cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight3

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 3
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })
            weightBtn4.addEventListener("click", function () {
                weightBtn4.style.backgroundColor = "#F53E32"
                weightBtn1.style.backgroundColor = "white"
                weightBtn3.style.backgroundColor = "white"
                weightBtn2.style.backgroundColor = "white"

                weightBtn1.style.color = "black"
                weightBtn3.style.color = "black"
                weightBtn2.style.color = "black"
                weightBtn4.style.color = "white"

                let newPriceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let newCost = newPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight4
                let OldPriceForKg = ShopCardsJsonData3[indexInList].old_Cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                let oldCost = OldPriceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight4

                process = newCost
                costTxt.innerHTML = `$${process.toFixed(2)}`
                oldCostTxt.innerHTML = `$${oldCost.toFixed(2)}`
                weightCount = 4
                quantity.innerHTML = 1
                count = 1
                productIteam.innerHTML = `: ${count}`
            })

            quantityPlus.addEventListener("click", function () {
                count++
                quantity.innerHTML = count
                productIteam.innerHTML = `: ${count}`
                if (weightCount == 1) {
                    process += ShopCardsJsonData3[indexInList].cost
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 2) {
                    let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight2

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else if (weightCount == 3) {
                    let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight3

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
                else {
                    let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                    let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight4

                    process += a
                    costTxt.innerHTML = `$${process.toFixed(2)}`
                }
            })
            quantityMinus.addEventListener("click", function () {
                if (count > 1) {
                    count--
                    quantity.innerHTML = count
                    productIteam.innerHTML = `: ${count}`
                    if (weightCount == 1) {
                        process -= ShopCardsJsonData3[indexInList].cost
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 2) {
                        let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight2

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else if (weightCount == 3) {
                        let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight3

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                    else {
                        let priceForKg = ShopCardsJsonData3[indexInList].cost / ShopCardsJsonData3[indexInList].product_Weight.weight1
                        let a = priceForKg * ShopCardsJsonData3[indexInList].product_Weight.weight4

                        process -= a
                        costTxt.innerHTML = `$${process.toFixed(2)}`
                    }
                }
                else {
                    console.error("Sorry, can't go down from 1")
                }
            })

            function footerClicks() {
                productDescription.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Description
                })
                productInf.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Information
                })
                productRev.addEventListener("click", function () {
                    productDescriptionInfRev.innerHTML = ShopCardsJsonData1[indexInList].product_Footer_Data.Review
                })
            }
            footerClicks()
        }
        else {
            let cardDiv = document.createElement('div')
            cardDiv.innerHTML = `
                    <h1>Sorry join to shop to have here iteam</h1>
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