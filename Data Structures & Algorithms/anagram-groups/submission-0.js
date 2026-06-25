class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = [];
        for (let i = 0; i < strs.length; i++) {

            if (strs[i] != undefined) {
                let temp = [strs[i]];
                let idxStr = strs[i].split('').sort().join('');
                for (let j = i + 1; j < strs.length; j++) {

                    if (strs[j] != undefined) {
                        let newStr = strs[j].split('').sort().join('');
                        if (idxStr == newStr) {
                            temp.push(strs[j]);
                            strs[j] = undefined;
                        }
                    }
                }
                res.push(temp);
            }
        }
        return res;
    }
}
