let arr = [1,1,2,3,4,5,5,2,9,6,124,75,1,75];
let count=0;
let i=0;
do{  
    for(let j=i;j<arr.length;j++){
        if(arr[j]==arr[i]){
            count++;
        }
    }
    if(count==2){
        console.log(arr[i]);
    }
    count=0;
    i++;
}while(i<arr.length);