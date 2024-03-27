let list_product = [
  { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
  { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
  { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
  { name: "Vase", price: 16, availability: true, id: "4", category: "bag" },
  { name: "Flower", price: 26, availability: true, id: "5", category: "bag" },
  {
    name: "Bedsheet",
    price: 49,
    availability: true,
    id: "6",
    category: "shirt",
  },
  { name: "Mat", price: 69, availability: false, id: "7", category: "shirt" },
  { name: "Teapot", price: 13, availability: true, id: "8", category: "bag" },
  {
    name: "Large Bookshelf",
    price: 88,
    availability: true,
    id: "9",
    category: "shirt",
  },
  { name: "Small Bookshelf", price: 75, availability: true, id: "10", category:"shirt"  },
  {
    name: "Wardrobe",
    price: 82,
    availability: false,
    id: "11",
    category: "shirt",
  },
  { name: "Carpet", price: 45, availability: false, id: "12", category: "bag" },
];

  let b = document.getElementsByTagName("ul")
  // Create product
  function createListproduct(product){
    let b = document.getElementsByTagName("ul")
    for(let i =0; i<12; i++){
      let a = document.createElement("li")
      a.innerHTML = ` ID: <b class="productID">${product.id}</b><br />
      Tên sản phẩm:
      <b class="productName">${product.name}</b> <br />
      Giá sản phẩm:
      <b class="productPrice">${product.price}</b><b>VND <br /></b> Trạng thái:
      <b class="productStatus">${product.availability}</b>`
      b[0].appendChild(a) 
      // document.createElement("")
      if(product.availability == false){
        a.innerHTML = ` ID: <b class="productID">${product.id}</b><br />
      Tên sản phẩm:
      <b class="productName">${product.name}</b> <br />
      Giá sản phẩm:
      <b class="productPrice">${product.price}</b><b>VND <br /></b> Trạng thái:
      <b class="productStatus">Hết hàng</b>`
      }else if(product.availability == true){
          a.innerHTML = ` ID: <b class="productID">${product.id}</b><br />
      Tên sản phẩm:
      <b class="productName">${product.name}</b> <br />
      Giá sản phẩm:
      <b class="productPrice">${product.price}</b><b>VND <br /></b> Trạng thái:
      <b class="productStatus">Còn hàng</b>
      <br>
      Category: <b>${product.category}</b>`
      }  
  }
}
  for(let i =0; i<list_product.length; i++){
   
    createListproduct(list_product[i])
  
    // list_product[i].availability == true ? "Còn hàng" : "Hết hàng"
  }
//   let a = document.getElementsByClassName("Hello")
//   let g = document.getElementsByClassName("Click")
//   let button = document.querySelector("button");
// let input = document.querySelector("input");
// button.addEventListener("click", function () {
// let take_li = document.querySelector(`li:nth-child(${input.value})`);
//   console.log(input.value);
//   console.log(take_li);
//   for(let i=1;i<=list_product.length;i++){
//     // let a = list_product[i]
//       if(input.value == i){
//         let take_li = document.querySelector(`li:nth-child(${input.value})`);
//         take_li.style.backgroundColor = "red"
//       }else{
//         let take_li = document.querySelector(`li:nth-child(${i})`);
//         take_li.style.backgroundColor = "white"
//       }
//   }

// });


// let input = document.getElementsByTagName("input")
// let shirt =String(document.querySelector(".shirt")) 
// let shoes = String(document.querySelector(".shoes"))
// let bag = String(document.querySelector(".shoes"))

// // let take_li = document.querySelector(`input:nth-child(${shirt.value})`);
// // console.log(shirt.value);
// // console.log(take_li);
// // console.log(shirt);
// input[1].addEventListener("click", function(){
//   for(let i = 0; i<=list_product.length; i++){
//     // let m = String(list_product[i].category)
//     if(list_product[i].category == input[1].value){
//         let take_li = document.querySelector(`input:nth-child(${input[1].value})`);
//         // list_product[i].style.backgroundColor = "red"
//         take_li.style.background.color = "red"

//     }
// }
// })

// let button =document.getElementsByTagName("button")
// // console.log(typeof(button));
// // let take_li = document.querySelector(`button:nth-child(1)`);
// button[1].addEventListener("click", function(){
//   let button1 = String(button)
//   for(let i = 0; i<=list_product.length; i++){    
// let take_li = document.querySelector(`li:nth-child(${i})`);
// let list = String(list_product[i].category)
//     if(button1 == list){
//       take_li.style.backgroundColor = "red"
//     }
//         }
// })

let a = document.querySelectorAll("button")
let g = document.getElementsByClassName("Click")
let button = document.querySelector("button");
let input = document.querySelector("input");
a[0].addEventListener("click", function () {
let take_li = document.querySelector(`li:nth-child(${button.value})`);
console.log(input.value);
console.log(take_li);
for(let i=1;i<=list_product.length;i++){
  // let a = list_product[i]
    if(button[0].value == list_product[i]){
      // product[i].style.backgroundColor = "red"
      let take_li = document.querySelector(`li:nth-child(${button.value})`);
      take_li.style.backgroundColor = "red"
    }else{
      // let take_li = document.querySelector(`li:nth-child(${i})`);
      // take_li.style.backgroundColor = "white"
    }
}

});

for(let i=1;i<button.length;i++){
  button[0].addEventListener("click", function(){
    if(i==1){
      for(let x=0;x<list_product.length;x++){
        if(list_product[x].category == "shoes"){
          createListproduct(list_product[z]).style.backgroundColor = "red"
        }
      }
    }
    else if(i==2){
      for(let x=0;x<list_product.length;x++){
        if(list_product[x].category == "shirt"){
          createListproduct(list_product[z]).style.backgroundColor = "red"
        }
      }
    }
    else if(i==3){
      for(let x=0;x<list_product.length;x++){
        if(list_product[x].category == "bag"){
          createListproduct(list_product[z]).style.backgroundColor = "red"
        }
      }
    }
  }
    )
  }

// Chữa HW 
