let a = +prompt("nhập a");
let b = +prompt("nhập b");
let arr = [];
if(a>b){
    for(let i=1;i<=a;i++){
        if(a%i==0){
            arr.push(i);
        }
    }
}else{
    for(let i=1;i<=b;i++){
        if(b%i==0){
            arr.push(i);
        }
    }
}
console.log(arr);