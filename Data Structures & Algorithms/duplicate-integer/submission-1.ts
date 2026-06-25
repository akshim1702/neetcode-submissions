 interface HashSet{
        [key:string]:1;
 }

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
   
    hasDuplicate(nums: number[]): boolean {
        let hash:HashSet={};
        for(let i=0;i<nums.length;i++){
            if(hash[nums[i]]){
                return true;
            }
            hash[nums[i]]=1;
        }
        return false;
    }
}
