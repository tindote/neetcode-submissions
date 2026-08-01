class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            let temp = str.split('').sort().join('');
            if (!map[temp]) {
                map[temp]=[];
            }
            map[temp].push(str);
        }   

        let result = [];
        for(const key in map){
            result.push(map[key]);
        }

        return result;
    }


    // isAnagrams(t, s){
    //     if(t.length != s.length){
    //         return false;
    //     }
    //     let chars = new Array(26).fill(0);
    //     for(let i = 0; i<t.length; i++){
    //         chars[s.charCodeAt(i)-97]++;
    //         chars[t.charCodeAt(i)-97]--;
    //     }

    //     for(el of chars){
    //         if(el != 0){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}
