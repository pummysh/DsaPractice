function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let n=+input[0];
   let arr=input[1].trim().split(" ").map(Number);
   let ans=findMin(arr,0,n-1);
  
    console.log(ans);
 
}

const findMin=(arr,l,h)=>{
    
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid]>arr[mid+1]){
            return arr[mid+1];
        }else if(arr[mid-1]>arr[mid]){
            return arr[mid]
        }else if(arr[l]<arr[mid]){
            l=mid+1;
        }else{
            h=mid-1
        }
    }
    return arr[0];
}
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }