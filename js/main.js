function circle1() {
    var x = document.getElementById("text");
    x.style.color = "#582a34";
}

function circle2() {
    var x = document.getElementById("text");
    x.style.color = "#b897a0";
}

function circle3() {
    var x = document.getElementById("text");
    x.style.color = "#dbe0e4";
}

anime({
    targets: '.textarea h1',
    translateX: [-250, 0],
    easing: 'easeOutExpo',
    duration: 1400,

    opacity: [0, 1],

});
anime({
    targets: '.navlogo',
    translateY: [-250, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    //delay: 1000,
    opacity: [0, 1],

});
anime({
    targets: '.imagearea ',

    // easing: 'easeOutExpo',
    duration: 4000,
    delay: 1000,
    opacity: [0, 1],

});

anime({
    targets: '.colorselector ul li',
    translateX: [-250, 0],
    easing: 'easeOutExpo',
    duration: 1500,

    opacity: [0, 1],


});
anime({
    targets: '.navlinks ul li',
    translateY: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: function(el, i, l) {
        return 500 + i * 100;
    },
    opacity: [0, 1],


});
anime({
    targets: '.textarea p ',
    translateX: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: function(el, i, l) {
        return 1000 + i * 100;
    },
    opacity: [0, 1],


});
anime({
    targets: '.textareaul  ',
    translateX: [-250, 0],
    easing: 'easeOutExpo',
    duration: 1000,

    opacity: [0, 1],


});
anime({
    targets: '.footer-area   ',
    duration: 4000,
    delay: 1000,
    opacity: [0, 1],


});
