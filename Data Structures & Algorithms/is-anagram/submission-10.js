class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        let chars = Array(26).fill(0);

        for(let i = 0; i < s.length; i++){
            chars[s.charCodeAt(i) - 97]++;
            chars[t.charCodeAt(i) - 97]--;
        }
        for(let el of chars){
            if(el != 0){
                return false;
            }
        }
        return true;
    }
}
