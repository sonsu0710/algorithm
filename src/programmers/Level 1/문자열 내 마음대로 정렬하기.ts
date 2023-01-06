function solution(strings: string[], n: number): string[] {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        } else {
            if (a[n] > b[n]) return 1;
            else if (a[n] < b[n]) return -1;
            else return 0;
        }
    });
}

console.log(solution(["abce", "abcd", "cdx"], 2));

export {}