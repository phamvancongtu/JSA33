// let text = document.getElementsByClassName("text"); // array
// text[0].innerText = "<h3>Hihi</h3>";
// console.log(text[0].innerHTML);

// let array = ["A", "B", "C"]; // array = mảng
// //            0    1    2
// let person = {
//   // object = đối tượng
//   name: "David",
//   age: 39,
// };
// console.log(person.name);
// console.log(array[1]);
function off(){
    // let a = document.createElement("P")
    // a.innerText = "ON"
    // document.body.appendChild(a)
    // console.log("off");
    document.body.style.backgroundColor = "black"
}
function prints(){
    // let a = document.createElement("P")
    // a.innerText = "ON"
    // // document.body.appendChild(a)
    document.body.style.backgroundColor = "white"
    
}
//addEventListener()
let buttonOn = document.getElementById("On")
let buttonOff = document.getElementById("off")
buttonOn.addEventListener("click",function(){
    alert("On")
})
// let inputText = document.querySelector(".inputtext")
// let button = document.getElementsByTagName("button")
// button[2].addEventListener("click",function(){
//     let a = document.querySelector(".hello_text")
//     a.innerText = inputText.value
// })
let inputText = document.querySelector(".inputtext")
let button = document.getElementsByTagName("button")
button[2].addEventListener("click",function(){
    let content = document.createElement("div")
    content.className = "text"
    let content1 = document.createElement("h1")
    content1.innerText=inputText.value
    content1.className = "hello_text"
    content.appendChild(content1)
    document.body.appendChild(content)
})
