function createFooter() {
	const rootFooter = document.querySelector(".rootFooter")
	const footer = document.createElement("div")
	footer.classList.add("footer")
	footer.innerHTML = `
    <nav class="footerNav">
				<ul class="footerNavUL">
					<li class="itemfooterNav">Services
						<ul>
							<li><a href="./services.html?ser=sWDes">Web Design</a></li>
							<li><a href="./services.html?ser=sWDev">Web Development</a></li>
							<li><a href="./services.html?ser=sEcom">Ecommerce</a></li>
							<li><a href="./services.html?ser=sMark">Digital Marketing</a></li>
							<li><a href="./services.html?ser=sSupp">Support and Maintenance</a></li>
						</ul>
					</li>


					<li class="itemfooterNav">Find Us
						<ul>
							<li>89 King St W, Dundas, <span class="pc">on l9h 1v1</span></li>
							<li>&#40;467&#41; 888 6357</li>
							<li>info&#64;rubiwebdev.com</li>
						</ul>
					</li>


			</nav>
			<div class="rights">
				<div class="brandFooter">
					<img class="brandLogoFooter" src="./img/logo1.svg" alt="Logo">
					<img class="brandNameFooter" src="./img/logo2.svg" alt="Rubi WebDev">
				</div>
				<p class="rightsP">All rights reserved</p>
			</div>
    
    `

	rootFooter.appendChild(footer)

}

export { createFooter }