let outer = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count)
    }
}
let counter = outer();
counter();
counter();
counter();