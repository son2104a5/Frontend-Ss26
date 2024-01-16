let arr = [1,-1,2,-2,3,-3,4,-4];
let temp1,temp2;
console.log("Mảng ban đầu:", arr);
for(let i=0;i<arr.length/2;i++){
    if(arr[i]>0){
        temp1=arr[arr.length-i-1];
        arr[arr.length-i-1]=arr[i];
        arr[i]=temp1;
    }else{
        temp2=arr[i-1];
        arr[i-1]=arr[i];
        arr[i]=temp2;
    }
}
console.log("Mảng sau khi cập nhật:", arr);