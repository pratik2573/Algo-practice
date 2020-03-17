//completed

function almostIncreasingSequence(sequence: number[]): any {
    let m = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i]>sequence[i+1]) {
            m++;
            if (sequence[i-1]>sequence[i+1] || sequence[i]<=sequence[i-2]) {
                return false;
            }
        }
    }
    
    return m<2;
}

console.log(almostIncreasingSequence([2, 3, 1, 2])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
