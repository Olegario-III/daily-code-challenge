const isBalanced = (str) => {
    const vowels = new Set('aeiouAEIOU');
    const mid = str.length >> 1; // same as Math.floor(str.length / 2)
    
    const count = (s) => [...s].reduce((acc, c) => acc + (vowels.has(c) ? 1 : 0), 0);
    
    return count(str.slice(0, mid)) === count(str.slice(-mid));
};

console.log(isBalanced("racecar"));