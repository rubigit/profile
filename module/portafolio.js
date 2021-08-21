import * as Module from './header.js'
import { pFolioContent } from './variables.js'
import { createGetQuoteForm } from './getquote.js'
import { createFooter } from './createfooter.js'

document.addEventListener("DOMContentLoaded", function () {
	console.log(`Ready`)

	function loadpFolioContent() {
		const pfolioDetail = document.querySelector(".pfolioDetail")
		pFolioContent.map((pfolio) => {
			const pFolioRow = document.createElement("div")
			pFolioRow.classList.add("pFolioRow")
			pFolioRow.innerHTML = `
			<a class="linkPicPfolio" href="${pfolio.link}"><img src="../img/${pfolio.picName}.png"
						alt="${pfolio.picAlt}"></a>
				<div class="pFolioInfo">
					<p class="linkHeadingPfolio"><a href="${pfolio.link}">${pfolio.title}</a></p>
					<p class="pFolioDescription">${pfolio.desc}</p>
					<p class="pFolioSkills">Skills: <span>${pfolio.skills}</span></p>
				</div>`
			pfolioDetail.appendChild(pFolioRow)
			console.log(pfolio)
		})




	}



	loadpFolioContent()
	createGetQuoteForm()
	createFooter()

})