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




isPalindrome("abc123")
isPalindrome()





