function resetNavItems() {
    const submenu = document.querySelector("#submenuServices")
    const trangle = document.querySelector(".menuServices").children[1]
    const serv = document.querySelector(".menuServices")

    submenu.classList.remove("submenuServices")
    submenu.classList.add("hide")
    trangle.innerHTML = `&dtrif;`
    serv.classList.add("serviceOpen")
    serv.classList.remove("serviceClose")
}


const toggleNav = (event) => {
    const ham = document.querySelector("#hamBtn")
    const nav = document.querySelector("#navigation")
    ham.classList.toggle("hamBtnOpen")
    ham.classList.toggle("hamBtnClose")
    resetNavItems()

    if (ham.classList.contains("hamBtnClose")) {
        nav.classList.add("grid")
        nav.classList.remove("hide")
        // document.querySelector("main").style.display = "none"
    } else {
        nav.classList.remove("grid")
        nav.classList.add("hide")
        // document.querySelector("main").style.display = "grid"
    }


    console.log(document.querySelector("main"))
}


const toggleServicesMenu = (event) => {
    const serv = document.querySelector(".menuServices")
    const submenu = document.querySelector("#submenuServices")
    const trangle = document.querySelector(".menuServices").children[1]
    serv.classList.toggle("serviceOpen")
    serv.classList.toggle("serviceClose")

    if (serv.classList.contains("serviceClose")) {
        submenu.classList.add("submenuServices")
        submenu.classList.remove("hide")
        trangle.innerHTML = `&utrif;`
    } else {
        resetNavItems()
    }
}

document.querySelector("#hamBtn").addEventListener("click", toggleNav, false)
document.querySelector(".menuServices").addEventListener("click", toggleServicesMenu, false)


Array.from(document.getElementsByClassName("submenuItem")).forEach((item) => {
    item.addEventListener("click", resetNavItems, false)
})


export { resetNavItems, toggleNav, toggleServicesMenu }

