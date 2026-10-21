// 배열
let arr1 = new Array();
let arr2 = [];

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1.push(40);

arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2.push(40); // 끝에 추가

arr2 = [...arr2,...arr2, 50]; // 스프레드 , 새로운 배열 안에 카피
console.log(arr1,arr2);

let result = [];
for (let i = 0; i < 100; i++) {
    result = [...result, i + 1];
}

console.log((result));