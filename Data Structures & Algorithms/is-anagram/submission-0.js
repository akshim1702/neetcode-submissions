class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length == t.length) {

            s= s.split('').sort();
            t= t.split('').sort();

           
            if(s.join('')==t.join('')){
                return true;
            }
            else{
                return false;
            }

        }
        return false;

    }
}
