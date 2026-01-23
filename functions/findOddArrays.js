function oddAverage(arrays) {
    const odd = [];
    for (const arr of arrays) {
        if (arr%2 === 1) {
            odd.push(arr);
        }
    }
    console.log(odd);
}
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddArrays = oddAverage(arrays);