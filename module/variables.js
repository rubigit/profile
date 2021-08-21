
const reasonDescription = [
    "Talk to us about your preferred working method. We try to accommodate our clients to the best of our abilities.",
    "Websites can easily cost tens of thousands of dollars, which is just not plausible for small businesses. We create cost-effective designs and we are transparent about pricing up front. There are no hidden costs or monthly fees. ",
    "Unlike some designers who focus solely on the artistic elements of a website and ignore the user experience, our websites are designed with your customer in mind. Therefore, all of our sites are clean, modern and easy to navigate."
]

const reasonInf = [
    {
        reasonName: "Client Centric",
        reasonDescription: reasonDescription[0],
        picName: "wuclientcentric",
        picAlt: "Picture for client centric"
    },
    {
        reasonName: "Affordable Prices",
        reasonDescription: reasonDescription[1],
        picName: "wusprice",
        picAlt: "Picture for affordable prices "
    },
    {
        reasonName: "User Friendly",
        reasonDescription: reasonDescription[2],
        picName: "wuuserfdly",
        picAlt: "Picture for user friendly"
    }
]


const servDetail = [

    "Our approach to design reflects our commitment to best practice web design principles, user experience research and material design standards. We use this foundation to explore concepts and develop unique solutions based on the objectives of every project we take on. All of our design work is uniquely tailored to visually represent you and your brand to take you from web presence to web excellence.",
    "Agency specializing in building secure, scalable, custom, accessible and dynamic websites. When you work with us, you work with an experienced and talented team that’s committed to helping you achieve your project goals today and make your website future-ready for tomorrow.",
    "We build a thoughtful web design for your ecommerce to maximize your reach and profitability for your business. We ensure that your website remains market competitive, functional, customizable, and swift according to the changing needs of the ecommerce business type.",
    "Digital marketing is the best medium to connect with your clients and generate trus with your audience. We have got what you need to create multichannel campaigns to make your brand's message travel faster to reach your audience where they are",
    "Our website maintenance and support plans give you a peace of mind in knowing that your website is going to be running smoothly. Our pricing is competitive and the services that are covered under our plans are extensive."

]

const servicesArr = [
    {
        serviceID: "sWDes", legend: "Web Design", picName: "", picAlt: "sWDes alt",
        serviceSHeading: "A Web Design your users will love", serviceDetail: servDetail[0]
    },
    {
        serviceID: "sWDev", legend: "Web Development", picName: "", picAlt: "sWDev alt",
        serviceSHeading: "A Web Development that gives you results", serviceDetail: servDetail[1]
    },
    {
        serviceID: "sEcom", legend: "Ecommerce", picName: "", picAlt: "sEcom alt",
        serviceSHeading: "Ecommerce Solution", serviceDetail: servDetail[2]
    },
    {
        serviceID: "sMark", legend: "Digital Marketing", picName: "", picAlt: "sMark alt",
        serviceSHeading: "Digital strategy that helps you succeed", serviceDetail: servDetail[3]
    },
    {
        serviceID: "sSupp", legend: "Support and Maintenance", picName: "", picAlt: "sSupp alt",
        serviceSHeading: "Go beyond and get support after deployment ", serviceDetail: servDetail[4]
    }
]



const pFolioContent = [
    {
        link: "https://rubigit.github.io/recipe-project/",
        picName: "pfolio1",
        picAlt: "Preview for recipe article",
        title: "Recipe Article",
        desc: "Responsive single page website that provides information about a cooking recipe",
        skills: "HTML, CSS"
    },
    {
        link: "https://rubigit.github.io/ecomm-store-project/",
        picName: "pfolio2",
        picAlt: "Preview for ecommerce website",
        title: "Ecommerce Website",
        desc: "Responsive ecommerce for a lamp shop",
        skills: "HTML, CSS, JavaScript"
    },
    {
        link: "https://rubigit.github.io/assignment2quotes/",
        picName: "pfolio3",
        picAlt: "Preview for Generate Quotes website",
        title: "Quote Generator",
        desc: "Responsive single page website to create quotes, generate random quotes using an api and store the quotes in a database",
        skills: "HTML, CSS, JavaScript, firebase"
    },
    {
        link: "https://rubigit.github.io/RubiAPIone/",
        picName: "pfolio4",
        picAlt: "Preview for love calculator",
        title: "Love Calculator",
        desc: "Responsive single page website that uses an api to calculate love",
        skills: "HTML, CSS, JavaScript"
    }

]


const stagesArr = [
    "requirement gathering",
    "Refine requirements, Define Scope and Constrains",
    "Development plan, Time estimation ad Project Cost",
    "Development cycle: Design Sketch and prototype, Development, Testing and Review",
    "Deployment",
    "Support"
]


export { reasonInf, servicesArr, pFolioContent, stagesArr }