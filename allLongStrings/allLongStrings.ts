//completed
function allLongestStrings(inputArray: string[]): any[] {
    let m = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (m<inputArray[i].length) {
            m=inputArray[i].length;
        }
    }
    let longestStrings = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (m==inputArray[i].length) {
            longestStrings.push(inputArray[i]);
        }
    }
    return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd","aba"]));
