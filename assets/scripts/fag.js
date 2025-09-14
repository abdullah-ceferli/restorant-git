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


function openingDropDownFunction() {
    const openingListGroupSectionTitle1 = document.getElementById("openingListGroupSectionTitle1")
    const openingListGroupSectionTitle2 = document.getElementById("openingListGroupSectionTitle2")
    const openingListGroupSectionTitle3 = document.getElementById("openingListGroupSectionTitle3")
    const openingListGroupSectionTitle4 = document.getElementById("openingListGroupSectionTitle4")
    const openingListGroupSectionTitle5 = document.getElementById("openingListGroupSectionTitle5")
    const openingListGroupSectionTitle6 = document.getElementById("openingListGroupSectionTitle6")
    const openingListGroupSectionTitle7 = document.getElementById("openingListGroupSectionTitle7")

    const openingListGroupSectionTitleArrow1 = document.getElementById("openingListGroupSectionTitleArrow1")
    const openingListGroupSectionTitleArrow2 = document.getElementById("openingListGroupSectionTitleArrow2")
    const openingListGroupSectionTitleArrow3 = document.getElementById("openingListGroupSectionTitleArrow3")
    const openingListGroupSectionTitleArrow4 = document.getElementById("openingListGroupSectionTitleArrow4")
    const openingListGroupSectionTitleArrow5 = document.getElementById("openingListGroupSectionTitleArrow5")
    const openingListGroupSectionTitleArrow6 = document.getElementById("openingListGroupSectionTitleArrow6")
    const openingListGroupSectionTitleArrow7 = document.getElementById("openingListGroupSectionTitleArrow7")

    const openingListGroupSectionEntrails1 = document.getElementsByClassName("opening-list-group-section-entrails")[0]
    const openingListGroupSectionEntrails2 = document.getElementsByClassName("opening-list-group-section-entrails")[1]
    const openingListGroupSectionEntrails3 = document.getElementsByClassName("opening-list-group-section-entrails")[2]
    const openingListGroupSectionEntrails4 = document.getElementsByClassName("opening-list-group-section-entrails")[3]
    const openingListGroupSectionEntrails5 = document.getElementsByClassName("opening-list-group-section-entrails")[4]
    const openingListGroupSectionEntrails6 = document.getElementsByClassName("opening-list-group-section-entrails")[5]
    const openingListGroupSectionEntrails7 = document.getElementsByClassName("opening-list-group-section-entrails")[6]

    let boolean1 = true
    let boolean2 = true
    let boolean3 = true
    let boolean4 = true
    let boolean5 = true
    let boolean6 = true
    let boolean7 = true

    openingListGroupSectionTitle1.addEventListener("click", function () {
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean2 = true
        boolean3 = true
        boolean4 = true
        boolean5 = true
        boolean6 = true
        boolean7 = true
        if (boolean1) {
            openingListGroupSectionTitleArrow1.style.transform = "rotate(90deg)"
            boolean1 = false
            openingListGroupSectionEntrails1.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
            boolean1 = true
            openingListGroupSectionEntrails1.style.display = "none"
        }
    })
    openingListGroupSectionTitle2.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean1 = true
        boolean3 = true
        boolean4 = true
        boolean5 = true
        boolean6 = true
        boolean7 = true
        if (boolean2) {
            openingListGroupSectionTitleArrow2.style.transform = "rotate(90deg)"
            boolean2 = false
            openingListGroupSectionEntrails2.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
            boolean2 = true
            openingListGroupSectionEntrails2.style.display = "none"
        }
    })
    openingListGroupSectionTitle3.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean1 = true
        boolean2 = true
        boolean4 = true
        boolean5 = true
        boolean6 = true
        boolean7 = true
        if (boolean3) {
            openingListGroupSectionTitleArrow3.style.transform = "rotate(90deg)"
            boolean3 = false
            openingListGroupSectionEntrails3.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
            boolean3 = true
            openingListGroupSectionEntrails3.style.display = "none"
        }
    })
    openingListGroupSectionTitle4.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean1 = true
        boolean2 = true
        boolean3 = true
        boolean5 = true
        boolean6 = true
        boolean7 = true
        if (boolean4) {
            openingListGroupSectionTitleArrow4.style.transform = "rotate(90deg)"
            boolean4 = false
            openingListGroupSectionEntrails4.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
            boolean4 = true
            openingListGroupSectionEntrails4.style.display = "none"
        }
    })
    openingListGroupSectionTitle5.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean1 = true
        boolean2 = true
        boolean3 = true
        boolean4 = true
        boolean6 = true
        boolean7 = true
        if (boolean5) {
            openingListGroupSectionTitleArrow5.style.transform = "rotate(90deg)"
            boolean5 = false
            openingListGroupSectionEntrails5.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
            boolean5 = true
            openingListGroupSectionEntrails5.style.display = "none"
        }
    })
    openingListGroupSectionTitle6.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails7.style.display = "none"

        boolean1 = true
        boolean2 = true
        boolean3 = true
        boolean4 = true
        boolean5 = true
        boolean7 = true
        if (boolean6) {
            openingListGroupSectionTitleArrow6.style.transform = "rotate(90deg)"
            boolean6 = false
            openingListGroupSectionEntrails6.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
            boolean6 = true
            openingListGroupSectionEntrails6.style.display = "none"
        }
    })
    openingListGroupSectionTitle7.addEventListener("click", function () {
        openingListGroupSectionTitleArrow1.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow2.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow3.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow4.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow5.style.transform = "rotate(0deg)"
        openingListGroupSectionTitleArrow6.style.transform = "rotate(0deg)"
        openingListGroupSectionEntrails1.style.display = "none"
        openingListGroupSectionEntrails2.style.display = "none"
        openingListGroupSectionEntrails3.style.display = "none"
        openingListGroupSectionEntrails4.style.display = "none"
        openingListGroupSectionEntrails5.style.display = "none"
        openingListGroupSectionEntrails6.style.display = "none"

        boolean1 = true
        boolean2 = true
        boolean3 = true
        boolean4 = true
        boolean5 = true
        boolean6 = true
        if (boolean7) {
            openingListGroupSectionTitleArrow7.style.transform = "rotate(90deg)"
            boolean7 = false
            openingListGroupSectionEntrails7.style.display = "block"
        }
        else {
            openingListGroupSectionTitleArrow7.style.transform = "rotate(0deg)"
            boolean7 = true
            openingListGroupSectionEntrails7.style.display = "none"
        }
    })
}

openingDropDownFunction()


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