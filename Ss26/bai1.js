let arr = ['chó', 10, 20, 'hehe'];
let count=arr.length;
for(let i=0;i<arr.length;i++){
    if(isNaN(arr[i])){
        continue;
    }else{
        console.log(arr[i]);
        count--;
    }
}
if(count==arr.length){
    console.log("Không có số nguyên tồn tại trong mảng");
}