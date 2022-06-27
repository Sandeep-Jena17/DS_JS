//string ds 
//String reversal
//Write  code for reversing string 
const str1="Sandeep";
//Output: peednaS

//Reverse a string first problem.
const reverseString=(str)=>{

    const reversed=str.split('').reverse()
    console.log(reversed)
};

//reverseString("Sandeep")

const reverseStr=(str)=>{
    let reverse='';
    for(let a=str.length-1; a>=0; a--){
        //console.log("a")
       reverse+=str[a]
    }
    console.log("REVERSE",reverse)
return reverse
}
//reverseStr("ctuuui");

//reverseStr("Sandeep");

//Write palindromes case 

const isPalindrome=(str)=>{
let reverseString='';
for (let a=str.length; a>=0; a--){
    reverseString+=str[a];
}
if(str===reverseString){
    console.log("ITS PALINDROME")
    return true
}else{
    console.log("NOT PALINDROME");
    return false;
}
}






// isPalindrome("abc123")
// isPalindrome()


/* 

MAX CHARS

findMaxChars('aabbcccccccd')==='c'
1. Create a map with with specified char and it count in string;




*/

//console.log(Object.keys("sandeep"))


const findMaxChars=(str)=>{

const arry=str.split('');
const map={

}
let max=0;
let maxChar=''

for(let a of  arry){
//console.log("A",a); 
if(map[a]){
    map[a]++
}   else{
    map[a]=1;
}
//map[a]=
}
console.log("obj", )
for (let b in  map){
    //console.log('b',b)
    if(map[b]>max){
        max=map[b];
        maxChar=b
    }
}
return maxChar 
}


console.log(findMaxChars('we r ssssss'))
