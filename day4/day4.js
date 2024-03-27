// // // Các phần tử trong mảng đc bắt đầu từ số 0
// // // Truy cập vào các phần tử nằm trong mảnh: tên mảng[0 -> length - 1]
// // // Thêm phần tử mới vào mảng dùng push()
// // // Lấy các giá trị trong mảng từ a -> b thì dùng hàm gì:
// // // - slice(a, b): tạo ra 1 mảng dựa trên mảng cũ
// // // - Mảng mới sẽ có các phần tử trong khoảng a -> b của mảng cũ
// // // Các lấy tổng số các phần tử trong mảng: Tên mảng.length

// // // for( sự khởi tạo của vòng lặp ; điều kiện để vòng lặp chạy ; sự biến đổi của sự khởi tạo sau mỗi vòng lặp)
// // // for: thực thi 1 đoạn code nào đó nhiều lần
// // // for có 3 đầu vào

// // for (let i = 5; i < 10; i++) {
// //     /**
// //      * (1) Khởi tạo 1 giá trị i
// //      * (2) Điều kiện để vòng lặp chạy là i phải nhỏ hơn 10
// //      * (3) sự thay đổi của i sau mỗi vòng lặp
// //      */
// //   }
  
// //   let t = 0;
  
// //   let numbers = [8, 12, 55, 99, 0, 3, 5, 102, 1002, 111, 100];
// //   let newArray = []
// //   // In ra các phần tử nằm trong mảng numbers:
// //   for (let i = 0; i < numbers.length; i++) {
// //     for (let j = i + 1; j < numbers.length; j++) {
// //       if (numbers[i] > numbers[j]){
// //         let s = numbers[i];
// //         numbers[i] = numbers[j];
// //         numbers[j] = s;
// //     }
// // }
// //   }
// //   for(let i =0;i<numbers.length;i++){
// //     if(numbers[i]%2==0){
// //         newArray.push(numbers[i])
// //     }
// //   }
// //   console.log(newArray);
  
  
//   // for (let i = 0; i < numbers.length; i++) {
//   //   if (t < numbers[i] && numbers[i] % 2 == 0) {
//   //     t = numbers[i];
//   //   }
//   // }
  
// //   console.log(t);
// //   // In ra 1 phần tử lớn nhất nằm trong mảng
  
// //   let array = [35, 99];
// //   let s = 0;
// //   s = array[0];
// //   array[0] = array[1];
// //   array[1] = s;
  
// //   console.log(array);
// // Đối tượng trg js
// //Mô tả nhg đặc trưng của đối tượng\
// let student={
//     name:"Nguyen VAn a",
//     age :40,
//     favor:["An", "ngu", "choi"]

// }
// let student2 = {
//     name: "Đặng Thị B",
//     age: 33,
//     favor: ["Dạy học", "Đi chơi", "Golf", "Swimming"],
// }
// let student3 = {
//     name: "Lê Quang T",
//     age: 20,
//     favor: ["Bay LẮc", "Ngủ"],
// }
// // if(student.favor.length > student2.favor.length){
// //     console.log(student.name);
// // }else{
// //     console.log(student2.name)
// // }
// let list_student = [
//     {
//       name: "Nguyễn Văn A",
//       age: 30,
//       favor: ["Ăn", "Ngủ", "Học Bài"],
//     },
//     {
//       name: "Đặng Thị B",
//       age: 33,
//       favor: ["Dạy học", "Đi chơi", "Golf", "Swimming"],
//     },
//     {
//       name: "Le Quang T",
//       age: 20,
//       favor: ["Bay Lắc", "Ngủ"],
//     },
//   ];
  
//   let t = 0;
  
  
// //   let student_order = []
//   // In ra các phần tử nằm trong mảng numbers:
//   for (let i = 0; i < list_student.length; i++) {
//     for (let j = i + 1; j < list_student.length; j++) {
//       if (list_student[i].age > list_student[j].age){
//         let s = list_student[i];
//         list_student[i] = list_student[j];
//         list_student[j] = s;
//     }
// }
//   }
//   console.log(list_student);
let s =prompt("Nhập số cần kiểm tra đối xứng") 
let reverse = []
for(let i=s.length-1;i>=0;i--){
    reverse = reverse + s[i]
}
if (s === reverse){
    alert("Đây là chữ, dãy số đối xứng")
}else{
    alert("Đây ko phải là chữ, dãy số đối xứng")
}
