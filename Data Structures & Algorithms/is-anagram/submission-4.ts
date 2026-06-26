class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const hash = {};
        for(let i=0; i<s.length;i++){
           if(hash[s[i]]){
            hash[s[i]] += 1;
           }else{
            hash[s[i]] = 1;
           }
        }

        for (let j=0; j<t.length;j++){
            if(hash[t[j]]){
                hash[t[j]] -=1;
                if(hash[t[j]] == 0){
                    delete hash[t[j]];
                }
            }
        }

        if (Object.keys(hash).length === 0) return true;
        else return false;
    }
}
