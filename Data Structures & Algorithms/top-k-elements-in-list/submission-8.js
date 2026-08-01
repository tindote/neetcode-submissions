class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for(const num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        const keys = Object.keys(map);

        keys.sort((a,b) => map[b] - map[a]);

        let result = [];
        for(let i = 0; i < k ; i ++){
            result.push(parseInt(keys[i]));
        }
        
        return result;







        // const map = new Map();

        // for(let num of nums){
        //     if(!map.has(num)){
        //         map.set(num, 0);
        //     }
        //     map.set(num, map.get(num) + 1);
        // }

        // let array = new Array();
        // for(let [key, value] of map){
        //     array.push([key,value]);
        // }
        // array.sort((a, b) => b[1] - a[1]);

        // let result = [];
        // for(let i = 0; i < k; i++){
        //     result.push(array[i][0]);
        // }

        // return result;
    }
}
