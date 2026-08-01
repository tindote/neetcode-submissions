class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Set();
        for(let i = 0 ; i < nums.length - 1 ; i++){
            let temp = target - nums[i];
            if(!set.has(nums[i])){
                for(let j = i + 1; j < nums.length ; j++){
                    if (nums[j] === temp){
                        return [i,j];
                    }
                }
                set.add(nums[i]);
            }
        }  
    }
}
