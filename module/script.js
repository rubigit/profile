import * as Module from './header.js'
import { reasonInf } from './variables.js'
import { servicesArr } from './variables.js'
import { createGetQuoteForm } from './getquote.js'
import { createFooter } from './createfooter.js'

document.addEventListener("DOMContentLoaded", function () {
    console.log(`Ready`)

    const eList = document.querySelector(".eList")

    // Module.resetNavItems()
    // Module.toggleNav()
    // Module.toggleServicesMenu()


    function loadreasonSecion() {
        const rootwUs = document.querySelector(".root-wUs")
        console.log(reasonInf)
        reasonInf.map((info, index) => {
            const rowwUs = document.createElement(`div`)
            rowwUs.classList.add("row-wUs")
            rowwUs.innerHTML = `
            <p class="reasonInfo"><span>${info.reasonName}</span><span>${info.reasonDescription}</span></p>
                    <img class="reasonPicture" src="../img/${info.picName}.svg" alt="${info.picAlt}">
            `
            rootwUs.appendChild(rowwUs)

            console.log(info.reasonName)
        })
    }


    function openqForm() {

        const ocForm = document.querySelector("#ocForm")
        ocForm.classList.add("qFormContainer")
        ocForm.classList.remove("hide")
        // document.body.style.overflow = "hidden"
        ocForm.focus()

    }

    function closeqForm() {
        const ocForm = document.querySelector("#ocForm")
        ocForm.classList.remove("qFormContainer")
        ocForm.classList.add("hide")
        // document.body.style.overflow = "visible"

    }


    function hideElistAlert() {
        const elistAlert = document.querySelector("#elistAlert")
        elistAlert.classList.add("elistAlert")
        elistAlert.classList.remove("hide")
        elistAlert.innerHTML = ``
        elistAlert.style.zIndex = "-1"
    }


    function runHideElistAlert() {
        let timing = ``
        timing = setTimeout(function () { hideElistAlert() }, 900);
    }



    eList.addEventListener("submit", function (event) {

        event.preventDefault()


        const emailEList = document.querySelector("#emailEList")
        const elistAlert = document.querySelector("#elistAlert")

        const value = emailEList.value.toUpperCase().trim()


        if (value == "") {

            elistAlert.classList.add("elistAlert")
            elistAlert.classList.remove("hide")
            elistAlert.innerHTML = `<div><span>Please enter your email</span></div>
            `
            elistAlert.style.zIndex = "1"
            elistAlert.style.color = "red"


        } else {
            elistAlert.classList.add("elistAlert")
            elistAlert.classList.remove("hide")
            elistAlert.innerHTML = `<div><span>Email Added</span></div>
            `
            elistAlert.style.zIndex = "1"
            elistAlert.style.color = "greenyellow"
        }

        runHideElistAlert()
    })



    console.log(eList)





    Array.from(document.getElementsByClassName("openQuote")).forEach((btn) => {
        btn.addEventListener("click", openqForm, false)
    })

    document.querySelector(".closeqForm").addEventListener(`click`, closeqForm)




    loadreasonSecion()
    createGetQuoteForm()
    createFooter()
})