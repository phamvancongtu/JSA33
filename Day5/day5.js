let n = document.getElementsByClassName("line1")
n.innerText = "hi"
// console.log(a.innerText)
let list_line1 = document.getElementsByClassName("line3")
//[line3] ko truy cập đc
console.log(list_line1[1].innerText)
for(let i = 0; i<list_line1.length; i++){
    console.log(list_line1[i].innerText)
}
let b = document.title = "Hello"
let li = document.getElementsByTagName("li")
console.log(li)   

//Thêm 1 thẻ vào trong body
let divelement = document.createElement("div")
divelement.innerText="AOV"
divelement.style.color = "blue"
divelement.className="line1"
document.body.appendChild(divelement)

// let round = document.createElement("div")
// round.style.backgroundColor="blue"
// round.style.width="40px"
// round.style.height="40px"
// round.style.borderRadius="50%"
// document.body.appendChild(round)

let square = document.createElement("div")
square.style.backgroundColor="Red"
square.style.width="40px"
square.style.height="40px"
document.body.appendChild(square)

//Thêm 1 thẻ vào trong thẻ khác 
let ul_element = document.getElementsByClassName("ul_element")
let new_li = document.createElement("li")
new_li.innerText = "Hello my friend"
//Thêm li vào ul
ul_element[0].appendChild(new_li)
function print(){
    round = document.createElement("div")
    round.style.backgroundColor="blue"
    round.style.width="40px"
    round.style.height="40px"
    round.style.borderRadius="50%"
    document.body.appendChild(round)
}
// let click = document.getElementsByClassName("button")
// let a = document.getElementById("text")//Lấy tên thẻ trong h1 ra
// a.id="abc"//Thay đổi tên của id
// a.style.color = "red"//Thay đổi thuộc tính của html
let a = document.getElementById("text")//Lấy tên thẻ trong h1 ra
// a.innerText="Hello Earth"//Thay đổi nội dung của thẻ text
a.style.backgroundColor="Blue"
function ChangeColor(){
    if(a.style.backgroundColor=="blue"){
        a.style.backgroundColor="pink"
    }else if(a.style.backgroundColor == "pink" ){
        a.style.backgroundColor = "blue"
    }
}




