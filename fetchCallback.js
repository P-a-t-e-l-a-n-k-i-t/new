// let arr=[1,2,3,4,5,8,6,9]
// let largest=arr[0]
// let secondLarge=  0

// for(let i=1; i<arr.length;i++){
//     if(largest<arr[i]){
//         secondLarge=largest
//         largest=arr[i]
//     }
//      else if(arr[i]> secondLarge && arr[i] !==largest){
//      secondLarge=arr[i]
    
//      }
    
// }
//  console.log(largest)
//  console.log(secondLarge)


//reverse a string

// let str="ankit"
// let reverse
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }

//count number of vowels

// let namee="ankit"
// number=0
// for (let i=0;i<namee.length-1;i++){
//     if(namee[i]=='a'||namee[i]=='e'||namee[i]=='i'||namee[i]=='o'||namee[i]=='u'||namee[i]=='A'||namee[i]=='E'||namee[i]=='I'||namee[i]=='O'||namee[i]=='U')
//     {
//         number++
//     }

// }
// console.log(number)

//sum of all elements of array

// let arr=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

//fibonacci series

// let a=0;
// let b=1;
// for(let i=0;i<10;i++){
//     sum=a+b;
//     a=b;
//     b=sum
//     console.log(sum)
// }

//prime number

let number=73
let value=false
if(number<=1)
{
    value=false
}
else{
    for(let i=2;i<=number;i++){
        if(number%i==0){
           value=false
           break 
        }
        else{
            value=true
        }
    }
}
console.log(value)

console.log("adding these one more line to understand merge in more depth")