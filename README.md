https://rubigit.github.io/recipe-project/

https://rubigit.github.io/ecomm-store-project/



https://rubigit.github.io/assignment2quotes/

https://rubigit.github.io/RubiAPIone/



.navigation{
	grid-area:nav;
	border:0.1em solid rgba(255, 255, 255, 0.144);
  box-shadow: 0px 0px 9px 1px rgba(255, 255, 255, 0.1);
	/* width: fit-content; */
	padding: calc(var(--pad-gap));
}



/////////////////////////////////////////////
mainpichome.svg 	.com  https://www.iconfinder.com/search?q=website&price=free

3255466.svg  <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a>

https://www.freepik.com/free-vector/startup-life-concept-illustration_7117748.htm#page=1&query=Illustrations&position=1


marketing https://unblast.com/marketing-campaign-vector-illustration-ai/

planning https://www.graphicpear.com/business-analytics-illustration/

bakground pic Photo by <a href="https://unsplash.com/@fabioha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">fabio</a> on <a href="https://unsplash.com/s/photos/digital-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  




function createGetQuoteForm() {
    const qForm = document.querySelector(".qForm")


    const contentQForm = document.createElement("div")
    contentQForm.classList.add("contentQForm")
    contentQForm.innerHTML = ` 
    <label class="TitleForm">Let's talk about your project</label>
    <div class="fieldsQFormDiv">
        <input id="iFNameQForm" class="iFNameQForm" value="" name="iFNameQForm" type="text"
            placeholder="First name  &#42;">
        <input id="iLNameQForm" class="iLNameQForm" value="" name="iLNameQForm" type="text"
            placeholder="Last name  &#42;">
        <input id="iEmailQForm" class="iEmailQForm" value="" name="iEmailQForm" type="email"
            placeholder="Email &#42;">
    </div>

    <textarea id="tMsjQForm" class="tMsjQForm" name="" cols="30" rows="10"
        placeholder=" Drecribe your project &#42;"></textarea>
    <input class="subQForm" type="submit" value="Send">


    <div class="contactQFormDiv">
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
    </div>
    `

    qForm.append(contentQForm)
















