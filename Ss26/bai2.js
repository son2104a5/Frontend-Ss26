let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let a = +prompt("nhập vào 1 giá trị bất kỳ");
let count=0;
let i=0;
do{
    ++i;
    if(a===arr[i]){
        count++;
        break;
    }
}while(i<arr.length);
if(count!=0){
    console.log("Số bạn đang tìm nằm ở vị trí thứ " + i + " trong mảng");
}else{
    console.log("Phần tử không tồn tại");
}