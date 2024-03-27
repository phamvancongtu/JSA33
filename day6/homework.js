document.body.style.backgroundColor  ="lightblue"
let all_div = document.createElement("div")
let small_div = document .createElement("div")
let title = document .createElement("h1")
// let img = document .createElement("div")
let subHeading = document.createElement("h5")
let list = document.createElement("ul")
let list_content = document.createElement("li")
let list_content1 = document.createElement("li")
let list_content2 = document.createElement("li")
let button = document.createElement("button")
let button1 = document.createElement("button")
let img = document.createElement("img")
all_div.className = "all_div"
title.innerText="Udacity for Business"
title.style.marginBlockEnd = "1px"
title.style.fontWeight = "bold"
title.style.marginLeft  ="30px"
subHeading.innerText = "Scale skills development for your organnization"
subHeading.style.marginBlockStart = "1px"
subHeading.style.fontWeight = "lighter"
subHeading.style.marginLeft  ="30px"
list.style.marginLeft = "20px"
list_content.innerText = "Hands-on project-based approach"
list_content1.innerText = "Top content co-developed with industry leaders"
list_content2.innerText = "Global mentor network with 700+ domain experts"
button.innerText = "Learn More --→"
button1.innerText = "Contact US --→"
button.style.backgroundColor = "#0000CD"
button.style.color = "white"
button.style.borderRadius = "5%"
button.style.border = "none"
button.style.height = "50px"
button.style.width = "150px"
button.style.marginLeft = "25px"
button1.style.marginLeft = "5px"
// button1.style.backgroundColor = "#0000CD"
button1.style.color = "blue"
button1.style.borderRadius = "5%"
button1.style.border = "2px solid blue"
button1.style.height = "50px"
button1.style.width = "150px"
img.src = "images.jpg"
// document.all_div.style.width = "100%"
img.style.width = "400px"
img.style.width = "350px"
all_div.style.marginTop = "200px"
img.style.marginLeft= "19px"
// all_div.style.marginBottom = "300px"
list.appendChild(list_content)
list.appendChild(list_content1)
list.appendChild(list_content2)
small_div.appendChild(title)
small_div.appendChild(subHeading)
small_div.appendChild(list)
small_div.appendChild(button)
small_div.appendChild(button1)
all_div.appendChild(small_div)
all_div.appendChild(img)
// all_div.appendChild(img)
document.body.appendChild(all_div)
