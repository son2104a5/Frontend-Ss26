let arr = [1,1,4,3,5,6,3,2,7,5,4,2,3,5,2];
let a = +prompt("nhập 1 số nguyên");
let count=0;
for(let i=0;i<arr.length;i++){
    if(a===arr[i]){
        count++;
    }
}
if(count==0){
    console.log("Phần tử không tồn tại");
}else{
    console.log("Số lần phần tử xuất hiện trong mảng là:", count);
}
