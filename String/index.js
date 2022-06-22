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

reverseString("Sandeep")

const reverseStr=(str)=>{
    let reverse='';
    for(let a=str.length-1; a>=0; a--){
        console.log("a")
       reverse+=str[a]
    }
    console.log("jj",reverse)
return reverse
}
reverseStr("ctuuui");