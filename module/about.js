import * as Module from './header.js'
import { servicesArr } from './variables.js'
import { createGetQuoteForm } from './getquote.js'
import { createFooter } from './createfooter.js'
createFooter()


document.addEventListener("DOMContentLoaded", function () {
    console.log(`Ready`)

    createGetQuoteForm()

})
