let arr = [1,2,3,4,5,6,7,8,9,10];
let temp;
console.log("Mảng ban đầu:", arr);
for(let i=0;i<arr.length/2;i++){
    temp = arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log("Mảng sau khi đổi chỗ:", arr);