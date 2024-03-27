// let cal = prompt("Nhập dấu phép tính")
// function plus(a,b){
//     return a + b
// }
// function minus(a,b){
//     return a-b
// }
// function multiply(a,b){
//     return a*b
// }
// function divide(a,b){
//     return a/b
// }
// if(
//     cal == "+" || cal == "-" || cal == "*" || cal == "/"
//     ){
//     let n1 = Number(prompt('Nhập số cần tính vào đây'))
//     let n2 =Number(prompt("Nhập số cần tính vào đây")) 
//     console.log(n1);
//     console.log(n2);
//     if(isNaN(n1) == false && isNaN(n2) == false){
//         if(cal == "+"){
//            alert(`Tổng 2 số là:  ${plus(n1,n2)} `)
//         }
//         if(cal == "-"){
//             alert(`Hiệu 2 số là:  ${minus(n1,n2)} `)
//         }
//         if(cal == "*"){
//             alert(`Tích 2 số là:  ${multiply(n1,n2)} `)
//         }
//         if(cal == "/"){
//             alert(`Thương 2 số là:  ${divide(n1,n2)} `)
//         }
//     }else{"sai số"}
// }else{
//     alert("Sai dấu")
// }

// console.log("10")

/**
 * let i = 0
 * i = i+1 <=> i++<=>i+=1
 * 
 * Chỉ dùng cho dấu cộng và dấu trừ
 */

// for (i=0; i<=1000;i++){
//     if(i%2==0 && (i-2)%10 == 0){
//         console.log(i);
//     }
// }

// for (i=0;i<=100; i++){
//     if (i<85 || i>95){
//         console.log(i);
//     }
// }

// for (i=0;i<=5; i++){
//     console.log("hello")
// }
// let s = "";
// for (let i = 0; i < 5; i++) {
//   s = s + "Hello ";
// }

// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// console.log(s);

// let tong = 0;
// for (let i = 1; i <= 50; i++) {
//   tong = tong + i;
// }
// console.log(tong);

// let a = Number(prompt("Nhập 1 số"))
// let b=1
// for( let i=1; i<=a; i++){
//     b = b*i
// }
// alert(b);
/**
 * Mảng : Chứa tập hợp các giá trị vs nhau
 */
// let food1 = "Bún chả"
// let food2 = "Phở"
// let foo3 = "Xôi"
// let list_of_food = ["Bún chả", "Phở", "Xôi"]
/** 
 * In ra 1 phần tử cho mảng:tên mảng[0->tên mảng.length-1])
 */
// console.log(list_of_food[2]);

let list_of_food = ["Bún chả", "Xiên bẩn", "Tào phớ"];
list_of_food.push("Cha ca")//(them phan tu )
list_of_food.pop("Cha ca")//(xoa phan tu)
for(let i=0; i<list_of_food.length; i++){
    console.log(list_of_food[i]); 
}
// slice la lay cac phan tu trong mảng. lay ten mang.length
