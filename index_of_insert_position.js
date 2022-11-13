var searchInsert = function(nums, target) {

    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        let count = 0
        nums.forEach(element => {
            if (target > element) {
                count++
            }
        });
        return count
    }
};

searchInsert([1, 3, 5, 6], 7)