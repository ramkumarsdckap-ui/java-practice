// 1 How many object and number

// let str="Dckap123";
// let num="";
// let chr="";
// for (i=0;i<str.length;i++){
//    if(!isNaN(str[i])){
//        num+=str[i];
//    }
//    else{
//        chr+=str[i];
//    }
// }
// console.log(`number in this string - ${num.length}`)
// console.log(`character in this string - ${chr.length}`)



//2 sum of the element

// let a=[1,2,3,4,5,true]
// let sum=0;
// for(let i=0;i<a.length;i++){
//     if(typeof(a[i])==="boolean"){
//         continue;
//     }
//     sum+=a[i]
// }
// console.log(sum)



//3 second largest number

// let arr=[54,23,11,17,10];
// for (let j=0;j<arr.length;j++){
// for (let i=0;i<arr.length-1;i++){
//     if(arr[i] < arr[i+1]){
//       let des = arr[i];
//       arr[i] = arr[i+1];
//       arr[i+1] = des;
//     }
// }
// }
// console.log(`secondlargest number is - ${arr[1]}`);



//4 assending and desending

// let arr=[5,2,3,6,4];
// let asc=[];
// function descending(){
// for (let j=0;j<arr.length;j++){
// for (let i=0;i<arr.length;i++){
//     if(arr[i] < arr[i+1]){
//       let des = arr[i];
//       arr[i] = arr[i+1];
//       arr[i+1] = des;
//     }
// }
// }
// console.log(`descending order - ${arr}`);
// }
// function ascending(){

// for (k=arr.length-1;k>=0;k--){
//     if(k!=0){
//          asc+=arr[k]+",";
//     }
//     else{
//          asc+=arr[k]
//     }
// }
// console.log(`ascending order - ${asc}`);
// }
// descending();
// ascending();



//5 count positive and negative value in array

// 5 sum positive and count negative value

// let int=[-1,-2,-3,-4,1,2,3];
// sum=0;
// count=0
// for (i=0;i<int.length;i++){
//     if(int[i]>0){
//         sum+=int[i]
//     }
//     else{
//         count++
//     }
// }
// console.log(sum)
// console.log(count)



//6 find missing number in array

// let a=[1,2,3,4,5,7,8,9,16];
// let b=[];
// let c={};
// let d=[]
// for (let i=a[0];i<=a[a.length-1];i++){
//     b[b.length]=i;
// }

// for (let j=0;j<a.length;j++){
//     if(!c[a[j]]){
//         c[a[j]]=true
//     }
// }

// for (let k=0;k<b.length;k++){
//     if(!c[b[k]]){
//         d[d.length]=b[k]
//     }

// }    
//     console.log(`Missing numbers are - ${d}`)