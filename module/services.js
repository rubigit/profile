import * as Module from './header.js'
import { servicesArr } from './variables.js'
import { stagesArr } from './variables.js'
import { createGetQuoteForm } from './getquote.js'
import { createFooter } from './createfooter.js'

document.addEventListener("DOMContentLoaded", function () {
    console.log(`Ready`)
    let srvDetail

    function loadServiceContent() {
        servicesArr.map((service) => {
            let serv = window.location.search.split('=')[1]
            if (service.serviceID == serv) {
                srvDetail = service
            }
        })


        const serviceHeader = document.querySelector("#serviceHeader")
        const serviceHeaderContent = document.createElement("div")
        serviceHeaderContent.innerHTML = `
        <p class="serviceLegend">${srvDetail.legend}</p>
        <img src="../img/services.svg" alt="Picture about web services">
        `
        serviceHeader.appendChild(serviceHeaderContent)


        const rootServiceDetail = document.querySelector("#rootServiceDetail")
        const rootServiceDetailContent = document.createElement("div")
        rootServiceDetailContent.innerHTML = `
        <p class="serviceSHeading" >${srvDetail.serviceSHeading}</p>
        <p class="serviceDetail">${srvDetail.serviceDetail}</p>
        `
        rootServiceDetail.appendChild(rootServiceDetailContent)


        console.log(srvDetail)
    }

    function loadStages() {
        const stages = document.querySelector(".stages")



        stagesArr.map((stage, index) => {
            const stageRow = document.createElement("div")
            stageRow.classList.add("stageRow")
            const stageName = document.createElement("p")
            const stageNDiv = document.createElement("div")
            stageName.classList.add("stageName")
            stageNDiv.classList.add("stageNDiv")
            stageName.innerHTML = `${stage}`
            stageNDiv.innerHTML = `<span>${index + 1}</span>`
            stageRow.appendChild(stageNDiv)
            stageRow.appendChild(stageName)
            stages.appendChild(stageRow)
        })


    }


    // Module.resetNavItems()
    // Module.toggleNav()
    // Module.toggleServicesMenu()

    loadServiceContent()
    createGetQuoteForm()
    createFooter()
    loadStages()
})

