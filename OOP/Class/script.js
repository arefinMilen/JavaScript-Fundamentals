class createEarPhone {
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}
let earPhone1 = new createEarPhone("Sony", "red", 100);
let earPhone2 = new createEarPhone("Apple", "blue", 200);
console.log(earPhone1);
console.log(earPhone2);
earPhone1.write("This is Sony earphone");
earPhone2.write("This is Apple earphone");