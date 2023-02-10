let str="abcd";
let finalStr="";

const reverseString=(i,str)=>{
    if(i<0){
        return finalStr;
    }

    finalStr=finalStr+str[i];

    return reverseString(i-1,str);
}

let ans=reverseString(str.length-1,str);
console.log(ans);
