function notification(config) {
    return function(data){
        let div = document.createElement("div");
        div.textContent = data;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"} px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300`;
        document.querySelector(".parent").appendChild(div);
        
        if(config.PositionX !== 'left' || config.PositionY !== 'top') {
            document.querySelector(".parent").className += 
            ` ${config.PositionX === 'right' ? 'right-5' : left-5} ${config.PositionY === 'bottom' ? 'bottom-5' : 'top-5'}`
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
}
}

let notify = notification({
    PositionX: "right",
    PositionY: "bottom",
    theme: "light",
    duration: 3
})
notify("Order Placed");
setTimeout(() => { 
    notify("Order Shipped");
}, 2000)
