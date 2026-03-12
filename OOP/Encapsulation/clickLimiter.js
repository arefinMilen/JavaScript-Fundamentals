function clickLimiter() {
    let click = 0;
    return function () {
        click++;
        if(click <= 5) {
            
            console.log(`clicked ${click} times`);
        } else {
            console.log("click limit reached");
        }
    }
}

let func = clickLimiter();
func();
func();
func();
func();
func();
func();