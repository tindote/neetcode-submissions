class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Set();
        for(let i = 0 ; i < nums.length - 1 ; i++){
            if(!set.has(nums[i])){
                for(let j = i + 1; j < nums.length ; j++){
                    if (nums[i] + nums[j] === target){
                        return [i,j];
                    }
                }
                set.add(nums[i]);
            }
        }
    }
}
