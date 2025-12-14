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

const secondSavedEmail = localStorage.getItem('registerEmailGlobal')
console.log(`Saved Email: ${secondSavedEmail}`)
const savedPassword = localStorage.getItem('registerPasswordGlobal')
console.log(`Saved Password: ${savedPassword}`)


let count = 4
function inputValueLooker() {
    const loginEmail = document.getElementById("loginEmail")
    const loginPassword = document.getElementById("loginPassword")
    const ifPassOrEmailNotCorrect = document.getElementById("ifPassOrEmailNotCorrect")
    const timer = document.getElementById("timer")
    const loginCorrectLookerLi = document.getElementsByClassName("login-correct-looker-li")[0]
    const loginCorrectLookerLi1 = document.getElementsByClassName("login-correct-looker-li")[1]
    const loginCorrectLookerLi2 = document.getElementsByClassName("login-correct-looker-li")[2]

    if (loginEmail.value.trim() != "" && loginPassword.value.trim() != "") {
        if (loginEmail.value.trim() == secondSavedEmail && loginPassword.value.trim() == savedPassword) {
            loginCorrectLookerLi2.style.display = "block"
            location.href = "/index.html"
            loginEmail.value = ""
            loginPassword.value = ""
            loginCorrectLookerLi.style.display = "none"
            loginCorrectLookerLi1.style.display = "none"
        }
        else {
            count--
            loginCorrectLookerLi1.style.display = "block"
            loginCorrectLookerLi1.innerHTML = `Hey, please write correct password or email u have ${count} change`
            loginCorrectLookerLi.style.display = "none"
            if (count == 0) {
                loginCorrectLookerLi.style.display = "none"
                loginCorrectLookerLi2.style.display = "none"
                loginCorrectLookerLi1.style.display = "none"
                timer.style.display = "block"
                ifPassOrEmailNotCorrect.style.display = "block"
                let timeCounter = 30
                const timeInterval = setInterval(() => {
                    timeCounter--
                    timer.innerHTML = `${timeCounter} sec`
                    if (timeCounter < 0) {
                        clearInterval(timeInterval)
                        timer.style.display = "none"
                        ifPassOrEmailNotCorrect.style.display = "none"
                        count = 4
                        loginEmail.value = ""
                        loginPassword.value = ""
                        timeCounter = 30
                    }
                }, 1000)
            }
        }
    }
    else {
        loginCorrectLookerLi.style.display = "block"
        loginCorrectLookerLi.style.marginRight = "150px"
        loginCorrectLookerLi1.style.display = "none"
    }
}


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


