class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length == t.length) {
            let hashS = {};
            let hashT = {};
            for (let i = 0; i < s.length; i++) {
                if (hashS[s[i]]) {
                    hashS[s[i]] = hashS[s[i]] + 1;
                }
                else {
                    hashS[s[i]] = 1;
                }
                if (hashT[t[i]]) {
                    hashT[t[i]] = hashT[t[i]] + 1;
                } else {
                    hashT[t[i]] = 1;
                }
            }

            for (const key in hashT) {
                if (hashS[key] != hashT[key]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
