function createGetQuoteForm() {
    const qForm = document.querySelector(".qForm")


    // INPUTS

    const iFNameQForm = document.createElement("input")
    const iLNameQForm = document.createElement("input")
    const iEmailQForm = document.createElement("input")

    iFNameQForm.id = iFNameQForm
    iLNameQForm.id = iLNameQForm
    iEmailQForm.id = iEmailQForm


    iFNameQForm.classList.add("iFNameQForm")
    iLNameQForm.classList.add("iLNameQForm")
    iEmailQForm.classList.add("iEmailQForm")
    iFNameQForm.classList.add("inp")
    iLNameQForm.classList.add("inp")
    iEmailQForm.classList.add("inp")

    iFNameQForm.value = ""
    iLNameQForm.value = ""
    iEmailQForm.value = ""

    iFNameQForm.type = "text"
    iLNameQForm.type = "text"
    iEmailQForm.type = "text"


    iFNameQForm.placeholder = "First Name *"
    iLNameQForm.placeholder = "Last Name *"
    iEmailQForm.placeholder = "Email *"


    //INPUT DIV fieldsQFormDiv
    const fieldsQFormDiv = document.createElement("div")
    fieldsQFormDiv.classList.add("fieldsQFormDiv")
    fieldsQFormDiv.appendChild(iFNameQForm)
    fieldsQFormDiv.appendChild(iLNameQForm)
    fieldsQFormDiv.appendChild(iEmailQForm)

    //TEXTAREA

    const tMsjQForm = document.createElement("textarea")
    tMsjQForm.id = "tMsjQForm"
    tMsjQForm.classList.add("tMsjQForm")
    tMsjQForm.cols = "30"
    tMsjQForm.rows = "10"
    tMsjQForm.value = ""
    tMsjQForm.name = "tMsjQForm"
    tMsjQForm.placeholder = "Describe your project *"


    //BUTTON

    const subQForm = document.createElement("button")
    subQForm.classList.add("subQForm")
    subQForm.innerHTML = `Submit`


    //CONTACT


    //ALERT

    const qFAlertDiv = document.createElement("div")


    qFAlertDiv.classList.add("qFAlertDiv")

    qFAlertDiv.id = "qFAlertDiv"

    const qFAlertSpan = document.createElement("span")

    qFAlertSpan.id = "qFAlertSpan"
    qFAlertSpan.classList.add("qFAlertSpan")


    qFAlertSpan.innerHTML = "Default"

    qFAlertDiv.appendChild(qFAlertSpan)



    const contact = `<div class="contactQFormDiv">
    <div class="contactQFormDivInfo">
         <img class="iconQForm" src="../img/iconemail.svg" alt="icon email">
         <p>info@rubiwebdev.com</p>
    </div>
    <div class="contactQFormDivInfo">
        <img class="iconQForm"src="../img/iconphone.svg" alt="icon phone">
        <p>(467) 888 6357</p>
    </div>
     <div class="contactQFormDivInfo">
        <img class="iconQForm" src="../img/iconaddress.svg" alt="icon iconaddress">
        <p>89 King St W, Dundas, <span class="pc">on l9h 1v1</span></p>
    </div>
</div>`







    const contentQForm = document.createElement("div")
    contentQForm.classList.add("contentQForm")
    contentQForm.innerHTML += ` <label class="TitleForm">Let's talk about your project</label>
    `
    contentQForm.appendChild(fieldsQFormDiv)
    contentQForm.appendChild(tMsjQForm)
    contentQForm.appendChild(qFAlertDiv)
    contentQForm.appendChild(subQForm)

    contentQForm.innerHTML += contact


    qForm.append(contentQForm)


    qForm.addEventListener("submit", function (event) {
        let empty = "w"
        event.preventDefault()

        const span = document.querySelector("#qFAlertSpan")
        const qFAlertDiv2 = document.querySelector("#qFAlertDiv")

        const tMsjQForm2 = document.querySelector("#tMsjQForm")
        Array.from(document.getElementsByClassName("inp")).forEach((input) => {
            if (input.value.trim() == "" || tMsjQForm2.value.trim() == "") {
                empty = ""
            }
        })

        if (empty == "") {

            qFAlertDiv2.focus()
            qFAlertDiv2.style.backgroundColor = "black"

            span.classList.add("qFAlertSpan")
            span.classList.remove("hide")
            span.innerHTML = "Please fill all the fields"
            span.style.color = "red"

            runHideFormAlert()
        }

        else {
            qFAlertDiv2.focus()

            qFAlertDiv2.style.backgroundColor = "black"
            span.classList.add("qFAlertSpan")
            span.classList.remove("hide")
            span.innerHTML = "Submited"
            span.style.color = "greenyellow"

            runHideFormAlert()
        }


    })



    function hideFormAlert() {
        const span = document.querySelector("#qFAlertSpan")
        const qFAlertDiv2 = document.querySelector("#qFAlertDiv")
        qFAlertDiv2.style.backgroundColor = "transparent"
        span.style.color = "transparent"

        // span.classList.add("hide")
        // span.classList.remove("qFAlertSpan")

        // qFAlertDiv2.classList.remove("qFAlertDiv")
        // qFAlertDiv2.classList.add("hide")
    }


    function runHideFormAlert() {
        let timing = ``
        timing = setTimeout(function () { hideFormAlert() }, 900);
    }











    // qForm.addEventListener("submit", function (event) { submitting() }
}
// newLoveCalc.addEventListener(`click`, function (event) { toggleForms(), toggleResult(), clearForm() })

//




export { createGetQuoteForm }