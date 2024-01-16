let arr1 = [1,3,6,5,4];
let arr2 = [2,1,4,6,3];
let arr3 = [4,3,2,7,6];
let arr4 = [];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        for(let k=0;k<arr3.length;k++){
            if(arr1[i]===arr2[j]&&arr2[j]===arr3[k]&&arr3[k]===arr1[i]){
                arr4.push(arr1[i]);
            }
        }
    }
}
console.log(arr4);