class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if(nums.length===2) return [0,1];
        // [3,4,5,6] t=7;

        let hash = {};
        for(let i=0; i<nums.length;++i){
            const n=target-nums[i];
            if(nums[i] in hash){
                return [hash[nums[i]],i];
            }
            hash[n]=i;
        }
    }
}
