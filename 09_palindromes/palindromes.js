const palindromes = (string) => {
    // Filter out non-alphanumeric characters and convert to lower case
    let cleanString = string
        .toLowerCase()
        .split("")
        .filter(char => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char))
        .join("");

    // Reverse the cleaned string
    let revString = cleanString.split("").reverse().join("");

    // Check if the cleaned string is equal to its reversed version
    return cleanString === revString;
}

// Do not edit below this line
module.exports = palindromes;
