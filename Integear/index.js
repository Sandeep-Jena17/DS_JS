//reverse integear

//reverseInt(13)=31;
//reverseInt(57)===75;

/* 
 1. Convert number to string;

 let num=33;
console.log(  typeof num.toString())

2.Reverse string 
let num=33;
console.log(  num.toString().split(''))
3. If -ve number then 

reverseInt(-12)===-21

4. if  number start with 0

reverseInt(001)===1
reverseInt(04)===4

5.use Math object
*/
let num=43;
//console.log( Math.sign(0034))

const reverseInt=(num)=>{
 const reverseNumber=num.toString().split('').reverse().join('');
//console.log("REVERSED INTEGEAR",Math.sign(parseInt(reverseNumber))*parseInt(reverseNumber))
//console.log("rn", Math.sign(parseInt(reverseNumber)))
 return  num<0?-1*parseInt(reverseNumber):parseInt(reverseNumber);


}

reverseInt(457);
//reverseInt(0034);
console.log(reverseInt(-67))