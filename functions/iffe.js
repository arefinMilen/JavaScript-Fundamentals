let myIffe = (function(){
    let score = 0;
return {
    getScore: function () {
        console.log(score);
    },
    setScore: function (val) {
        score = val;
    },
};
})();