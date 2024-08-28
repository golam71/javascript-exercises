const removeFromArray = function(array, ...bannedItems) {
    return array.filter(item=> !bannedItems.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
