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

const savedEmail = localStorage.getItem('userEmail')
const registerEmail = document.getElementById("registerEmail")
registerEmail.value = savedEmail

function inputValueLooker() {
    const registerFirstName = document.getElementById("registerFirstName")
    const registerLastName = document.getElementById("registerLastName")
    const registerTel = document.getElementById("registerTel")
    const registerAddress = document.getElementById("registerAddress")
    const registerCity = document.getElementById("registerCity")
    const registerPassword = document.getElementById("registerPassword")
    const registerCountry = document.getElementById("registerCountry")
    const registerRegion = document.getElementById("registerRegion")
    const registerEmail = document.getElementById("registerEmail")
    const registerCorrectLookerLi = document.getElementsByClassName("register-correct-looker-li")[0]
    const registerCorrectLookerLi1 = document.getElementsByClassName("register-correct-looker-li")[1]
    const registerCorrectLookerLi2 = document.getElementsByClassName("register-correct-looker-li")[2]

    if (registerFirstName.value.trim() !== "" && registerLastName.value.trim() !== "" && registerTel.value.trim() !== "" && registerAddress.value.trim() !== "" && registerCity.value.trim() !== "" && registerPassword.value.trim() !== "" && registerCountry.value.trim() !== "" && registerRegion.value.trim() !== "" && registerEmail.value.trim() !== "") {

        function registionEmail() {
            const registerEmailData = registerEmail.value.trim()
            if (registerEmailData.endsWith("@gmail.com")) {
                localStorage.setItem('registerEmailGlobal', registerEmailData)
                registerEmail.value = ""
                displayData()
                location.href = "/index.html"
            }
            else {
                registerCorrectLookerLi.style.display = "block"
                registerCorrectLookerLi.style.marginRight = "180px"
                registerCorrectLookerLi1.style.display = "none"
            }
        }
        registionEmail()

        function registionFirstName() {
            const data = registerFirstName.value.trim()
            if (/^[a-zA-Z]/.test(data)) {
                localStorage.setItem('registerFirstNameGlobal', data)
                registerFirstName.value = ""
                displayData()
            }
            else {
                registerCorrectLookerLi2.style.marginRight = "140px"
                registerCorrectLookerLi2.style.display = "block"
                registerCorrectLookerLi1.style.display = "none"
            }
        }
        registionFirstName()

        function registionLastName() {
            const data = registerLastName.value.trim()
            if (/^[a-zA-Z]/.test(data)) {
                localStorage.setItem('registerLastNameGlobal', data)
                registerLastName.value = ""
                displayData()
            }
            else {
                registerCorrectLookerLi2.style.marginRight = "140px"
                registerCorrectLookerLi2.style.display = "block"
                registerCorrectLookerLi1.style.display = "none"
            }
        }
        registionLastName()

        function registionTel() {
            const data = registerTel.value.trim()
            localStorage.setItem('registerTelGlobal', data)
            registerTel.value = ""
            displayData()
        }
        registionTel()

        function registionAddress() {
            const data = registerAddress.value.trim()
            localStorage.setItem('registerAddressGlobal', data)
            registerAddress.value = ""
            displayData()
        }
        registionAddress()

        function registionCity() {
            const data = registerCity.value.trim()
            localStorage.setItem('registerCityGlobal', data)
            registerCity.value = ""
            displayData()
        }
        registionCity()

        function registionPassword() {
            const data = registerPassword.value.trim()
            localStorage.setItem('registerPasswordGlobal', data)
            registerPassword.value = ""
            displayData()
        }
        registionPassword()

        function registionCountry() {
            const data = registerCountry.value.trim()
            localStorage.setItem('registerCountryGlobal', data)
            registerCountry.value = ""
            displayData()
        }
        registionCountry()

        function registionRegion() {
            const data = registerRegion.value.trim()
            localStorage.setItem('registerRegionGlobal', data)
            registerRegion.value = ""
            displayData()
        }
        registionRegion()
    }
    else {
        registerCorrectLookerLi1.style.display = "block"
        registerCorrectLookerLi1.style.marginRight = "310px"
        registerCorrectLookerLi.style.display = "none"
        registerCorrectLookerLi2.style.display = "none"
    }
}


function displayData() {
    const secondSavedEmail = localStorage.getItem('registerEmailGlobal')
    console.log(`Saved Email: ${secondSavedEmail}`)
    const savedFirstName = localStorage.getItem('registerFirstNameGlobal')
    console.log(`Saved First Name: ${savedFirstName}`)
    const savedLastName = localStorage.getItem('registerLastNameGlobal')
    console.log(`Saved Last Name: ${savedLastName}`)
    const savedTel = localStorage.getItem('registerTelGlobal')
    console.log(`Saved Phone number: ${savedTel}`)
    const savedAddress = localStorage.getItem('registerAddressGlobal')
    console.log(`Saved Address: ${savedAddress}`)
    const savedCity = localStorage.getItem('registerCityGlobal')
    console.log(`Saved City: ${savedCity}`)
    const savedPassword = localStorage.getItem('registerPasswordGlobal')
    console.log(`Saved Password: ${savedPassword}`)
    const savedCountry = localStorage.getItem('registerCountryGlobal')
    console.log(`Saved Country: ${savedCountry}`)
    const savedRegion = localStorage.getItem('registerRegionGlobal')
    console.log(`Saved Region/State: ${savedRegion}`)
}

displayData()

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