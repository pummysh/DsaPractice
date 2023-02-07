function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,k]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   let index=findMin(arr,0,n-1);
   let leftWindow=findNum(arr,0,index-1,k);
   let rightWindow=findNum(arr,index,n-1,k);

   if(leftWindow===-1 && rightWindow===-1){
       console.log(-1);
   }else if(rightWindow===-1){
       console.log(leftWindow);
   }else{
       console.log(rightWindow)
   }
 
}

const findNum=(arr,l,h,k)=>{
    
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid]===k){
            return mid;
        }else if(arr[mid]<k){
            l=mid+1;
        }else{
            h=mid-1
        }
    }
    return -1;
}

const findMin=(arr,l,h)=>{
    
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid]>arr[mid+1]){
            return mid+1;
        }else if(arr[mid-1]>arr[mid]){
            return mid
        }else if(arr[h]>arr[mid]){
            h=mid-1
        }else{
            l=mid+1;
        }
    }
    return 0;
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