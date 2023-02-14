/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let zero=one=two=0;
    for(let i=0;i<nums.length;i++){
        nums[i]===0 && zero++;
        nums[i]===1 && one++;
        nums[i]===2 && two++;
    }
    let i=0;
    while(zero>0){
        nums[i]=0;
        i++;
        zero--;
    }
    while(one>0){
        nums[i]=1;
        i++;
        one--;
    }
    while(two>0){
        nums[i]=2;
        i++;
        two--;
    }
    return nums;

};